import { LineHelper } from 'some-utils-three/helpers/line'
import { Mesh, MeshStandardMaterial, TorusKnotGeometry } from 'three'

export function debugKnot() {
  const knot = new Mesh(new TorusKnotGeometry(1, .45, 512, 128), new MeshStandardMaterial({ color: 'red', metalness: .95, roughness: .125 }))
  knot.position.set(0, 3.5, 0)
  knot.castShadow = true
  knot.receiveShadow = true

  knot['onTick'] = (tick: { deltaTime: number }) => {
    knot.rotation.y += tick.deltaTime * .25
  }

  const cube = new LineHelper()
    .color('black')
    .box({ size: 3.6 })
    .draw()
  knot.add(cube)

  return knot
}
