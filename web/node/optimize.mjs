import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import { join } from '@gltf-transform/functions'
import draco3d from 'draco3dgltf'

// Configure I/O.
const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(), // Optional.
    'draco3d.encoder': await draco3d.createEncoderModule(), // Optional.
  })


const inputFile = '../../output/ArkemaHouse6-KOK.glb'
const outputFile = '../../output/ArkemaHouse6-KOK-merge.glb'

const document = await io.read(inputFile)

await document.transform(
  join({ perMaterial: true })
)

io.write(outputFile, document)

console.log(`Meshes merged by material and saved to ${outputFile}`)