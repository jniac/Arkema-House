import { NodeIO } from '@gltf-transform/core'
import bytes from 'bytes'

const io = new NodeIO()
const document = await io.read('Blender/Exports/MaisonArkema4_JNC_LIGHTMAP_VGJ_20250219_203424.glb')

// Inspect buffers
document.getRoot().listBuffers().forEach((buffer, index) => {
  console.log(`Buffer ${index}: ${buffer}`)
  // console.log(buffer)
})

// Inspect images (textures)
let textureByteLength = 0
document.getRoot().listTextures().forEach((texture, index) => {
  // console.log(`Texture ${index}: ${texture.getImage().byteLength} bytes`)
  textureByteLength += texture.getImage().byteLength
})
console.log(`Total texture byte length: ${bytes(textureByteLength)}`)
