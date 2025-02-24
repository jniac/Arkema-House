import bytes from 'bytes'
import path from 'path'

import { buildMaterialMaps } from './tools/buildMaterialMaps.mjs'
import { io } from './tools/io.mjs'

const input = path.join(import.meta.dirname, '../../output/ArkemaHouse6-KOK-merge.glb')

const document = await io.read(input)

// Inspect buffers
document.getRoot().listBuffers().forEach((buffer, index) => {
  console.log(`Buffer ${index}: ${buffer}`)
  // console.log(buffer)
})

console.log(`materials: ${document.getRoot().listMaterials().length}`)
console.log(`meshes: ${document.getRoot().listMeshes().length}`)

console.log(buildMaterialMaps(document).info())

// Inspect images (textures)
let textureByteLength = 0
document.getRoot().listTextures().forEach((texture, index) => {
  // console.log(`Texture ${index}: ${texture.getImage().byteLength} bytes`)
  textureByteLength += texture.getImage().byteLength
})
console.log(`Total texture byte length: ${bytes(textureByteLength)}`)
