import { NoColorSpace, Texture, TextureLoader } from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const host = 'http://127.0.0.1:5500'
const gltfLoader = new GLTFLoader()
const textureLoader = new TextureLoader()

const dracoLoader = new DRACOLoader()
  .setDecoderPath('/assets/draco/')
  .preload()

gltfLoader.setDRACOLoader(dracoLoader)

export async function loadGLTF(url: string): Promise<GLTF> {
  return new Promise((resolve, reject) => {
    gltfLoader.load(host + url, resolve, undefined, reject)
  })
}

export async function loadTexture(url: string): Promise<Texture> {
  return new Promise((resolve, reject) => {
    textureLoader.load(host + url, resolve, undefined, reject)
  })
}

export async function loadLightMap(url: string, {
  uvChannel = 1,
} = {}): Promise<Texture> {
  const texture = await loadTexture(url)
  texture.flipY = false
  texture.colorSpace = NoColorSpace
  texture.generateMipmaps = false
  texture.channel = uvChannel
  return texture
}
