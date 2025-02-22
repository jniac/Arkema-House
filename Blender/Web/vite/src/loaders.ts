import { Texture, TextureLoader } from 'three'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const gltfLoader = new GLTFLoader()
const textureLoader = new TextureLoader()

export async function loadGLTF(url: string): Promise<GLTF> {
  return new Promise((resolve, reject) => {
    gltfLoader.load(url, resolve, undefined, reject)
  })
}

export async function loadTexture(url: string): Promise<Texture> {
  return new Promise((resolve, reject) => {
    textureLoader.load(url, resolve, undefined, reject)
  })
}

