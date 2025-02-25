import { DataTexture, NearestFilter, PMREMGenerator, RepeatWrapping, RGBAFormat, SRGBColorSpace, Texture, TextureLoader, UnsignedByteType, WebGLRenderer } from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'

import { loading } from './loading'

const development = /localhost|127.0.0.1/.test(window.location.host)
console.log(`development: ${development}`)

const outputPrefix = development
  ? 'http://localhost:4001/output/'
  : `/Arkema-House/output/`

const assetsPrefix = development
  ? 'http://localhost:4001/web/vite/public/'
  : ``

const textureLoader = new TextureLoader()
const rgbeLoader = new RGBELoader()
const gltfLoader = new GLTFLoader()

const dracoLoader = new DRACOLoader()
  .setDecoderPath('./assets/draco/')
  .preload()

let _renderer: WebGLRenderer | null = null
export function initAssets(renderer: WebGLRenderer) {
  _renderer = renderer
}

const getPremGenerator = (() => {
  let pmremGenerator: PMREMGenerator | null = null
  return () => {
    if (!_renderer) {
      throw new Error('Renderer not initialized')
    }
    if (!pmremGenerator) {
      pmremGenerator = new PMREMGenerator(_renderer)
      pmremGenerator.compileEquirectangularShader()
    }
    return pmremGenerator
  }
})()

gltfLoader.setDRACOLoader(dracoLoader)

export async function loadGLTF(url: string): Promise<GLTF> {
  return new Promise((resolve, reject) => {
    loading.set(`loading ${url} ...`)
    gltfLoader.load(outputPrefix + url, resolve, undefined, reject)
  })
}

export async function loadTexture(url: string): Promise<Texture> {
  return new Promise((resolve, reject) => {
    loading.set(`loading ${url} ...`)
    textureLoader.load(outputPrefix + url, resolve, undefined, reject)
  })
}

export async function loadLightMap(url: string, {
  uvChannel = 1,
} = {}): Promise<Texture> {
  const texture = await loadTexture(url)
  texture.flipY = false
  texture.colorSpace = SRGBColorSpace
  texture.generateMipmaps = false
  texture.channel = uvChannel
  return texture
}

export async function loadEnvMap(url: string): Promise<Texture> {
  return new Promise((resolve, reject) => {
    rgbeLoader.load(assetsPrefix + url, texture => {
      loading.set(`loading ${url} ...`)
      const envMap = getPremGenerator().fromEquirectangular(texture).texture
      texture.dispose()
      resolve(envMap)
    }, undefined, reject)
  })
}

export const whiteTexture = (() => {
  const width = 4
  const height = 4
  const size = width * height
  const data = new Uint8Array(4 * size).fill(0xff)

  const texture = new DataTexture(data, width, height, RGBAFormat, UnsignedByteType)
  texture.magFilter = NearestFilter
  texture.minFilter = NearestFilter
  texture.wrapS = RepeatWrapping
  texture.wrapT = RepeatWrapping
  texture.needsUpdate = true

  return texture
})()
