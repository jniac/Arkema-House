import { NodeIO } from '@gltf-transform/core'
import fs from 'fs/promises'

// Paths
const inputGLTF = 'path/to/your/model.gltf'
const outputGLTF = 'path/to/your/output-model.gltf'
const lightmapPath = 'path/to/your/lightmap.png'

// Initialize IO and Document
const io = new NodeIO()
const document = await io.read(inputGLTF)

// Load the lightmap texture
const lightmapImage = await fs.readFile(lightmapPath)
const lightmapTexture = document.createTexture('Lightmap')
  .setImage(lightmapImage)
  .setMimeType('image/png')

// Iterate through materials
const materials = document.getRoot().listMaterials()

for (const material of materials) {
  console.log(material.getName())
  // if (material.getName().endsWith('_LM')) {
  //   console.log(`Applying lightmap to: ${material.getName()}`)

  //   // Apply the lightmap as an occlusion texture or emissive map
  //   material.setOcclusionTexture(lightmapTexture)

  //   // Optional: Set the strength for the occlusion map
  //   material.setOcclusionTextureInfo({
  //     strength: 1.0
  //   })
  // }
}

// await io.write(outputGLTF, document)

console.log('Lightmap applied successfully!')