import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import draco3d from 'draco3dgltf'

// Configure I/O.
export const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(), // Optional.
    'draco3d.encoder': await draco3d.createEncoderModule(), // Optional.
  })
