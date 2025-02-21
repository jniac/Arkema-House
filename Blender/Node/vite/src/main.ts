import { Mesh, TorusKnotGeometry } from 'three'

import { VertigoControls } from 'some-utils-three/camera/vertigo/controls'
import { ThreeWebGLContext } from 'some-utils-three/experimental/contexts/webgl'
import { LineHelper } from 'some-utils-three/helpers/line'
import { AutoLitMaterial } from 'some-utils-three/materials/auto-lit'

const three = new ThreeWebGLContext()
three.initialize(document.body)

const knot = new Mesh(new TorusKnotGeometry(1, .45, 512, 128), new AutoLitMaterial({ color: 'red' }))
three.scene.add(knot)

const cube = new LineHelper()
  .color('black')
  .box({ size: 3.6 })
  .draw()
three.scene.add(cube)

const controls = new VertigoControls({
  size: 6,
})
  .initialize(document.body)
  .start()

three.ticker.onTick(tick => {
  controls.update(three.camera, three.aspect, tick.deltaTime)
  knot.rotation.y += 1 * tick.deltaTime
})

