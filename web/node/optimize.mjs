import { join } from '@gltf-transform/functions'

import { buildMaterialMaps } from './tools/buildMaterialMaps.mjs'
import { io } from './tools/io.mjs'

const entries = [
  {
    input: '../../output/ArkemaHouse6-LYX.glb',
    output: '../../output/ArkemaHouse6-LYX-merge.glb',
  },
  // {
  //   input: '../../output/ArkemaHouse6-LYX-webp.glb',
  //   output: '../../output/ArkemaHouse6-LYX-webp-merge.glb',
  // },
]

for (const { input, output } of entries) {
  const document = await io.read(input)

  await document.transform(
    join({ perMaterial: true })
  )

  const materialMaps = buildMaterialMaps(document)

  for (const [materialType, map] of Object.entries(materialMaps.materials)) {
    const suffix = materialType === 'none' ? '' : `_${materialType.toUpperCase()}`
    for (const material of map.keys()) {
      const newName = material.getName().replace(/_LM\d+/g, '') + suffix
      material.setName(newName)
    }
  }

  io.write(output, document)

  console.log(`Meshes merged by material and saved to ${output}`)
}
