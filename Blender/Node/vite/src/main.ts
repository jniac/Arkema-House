import { DirectionalLight, HemisphereLight, Material, Mesh, MeshPhysicalMaterial, NoColorSpace, Texture, TorusKnotGeometry } from 'three'

import { VertigoControls } from 'some-utils-three/camera/vertigo/controls'
import { ThreeWebGLContext } from 'some-utils-three/experimental/contexts/webgl'
import { LineHelper } from 'some-utils-three/helpers/line'
import { AutoLitMaterial } from 'some-utils-three/materials/auto-lit'
import { allDescendantsOf } from 'some-utils-three/utils/tree'

import { loadGLTF, loadTexture } from './loaders'

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
  size: 12,
  rotation: ['-45deg', '-30deg', '0'],
})
  .initialize(document.body)
  .start()

three.ticker.onTick(tick => {
  controls.update(three.camera, three.aspect, tick.deltaTime)
  knot.rotation.y += 1 * tick.deltaTime
})

const skyLight = new HemisphereLight('#ffffff', '#00056a', 1)
three.scene.add(skyLight)

const sunLight = new DirectionalLight('#ffffff', 1)
sunLight.position.set(-10, 10, 10)
three.scene.add(sunLight)

const glbUrl = 'http://127.0.0.1:5500/Blender/Exports/ArkemaHouse_DSN.glb'
// const glbUrl = 'http://127.0.0.1:5500/Blender/Exports/Floor.glb'
const gltf = await loadGLTF(glbUrl)
three.scene.add(gltf.scene)

Object.assign(window, { three, gltf, controls })

const lightmap1 = await loadTexture('http://127.0.0.1:5500/Blender/Exports/ArkemaHouse-Lightmap-4096-1-Architecture.png')
lightmap1.flipY = false
lightmap1.colorSpace = NoColorSpace
lightmap1.generateMipmaps = false
lightmap1.channel = 1
lightmap1.needsUpdate = true

const lightmap2 = await loadTexture('http://127.0.0.1:5500/Blender/Exports/ArkemaHouse-Lightmap-4096-2-Furniture.png')
lightmap2.flipY = false
lightmap2.colorSpace = NoColorSpace
lightmap2.generateMipmaps = false
lightmap2.channel = 1
lightmap2.needsUpdate = true

const processedMaterials = new Set<Material>()
function associateLightmap(lightmap: Texture, ...meshes: Mesh[]) {
  for (const mesh of meshes) {
    mesh.receiveShadow = true
    mesh.castShadow = true

    console.log(mesh.name)
    if (mesh.name !== 'Tiles_3')
      continue

    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
    for (const material of materials) {
      if (processedMaterials.has(material)) continue
      processedMaterials.add(material)

      material['lightMap'] = lightmap
      material.needsUpdate = true

      const newMaterial = new MeshPhysicalMaterial({
        map: material['map'],
        normalMap: material['normalMap'],
        aoMap: material['aoMap'],
        lightMap: lightmap,
        lightMapIntensity: 1,
      })

      mesh.material = newMaterial
    }
  }
}

for (const child of allDescendantsOf(gltf.scene)) {
  if (/_LM\d+$/.test(child.name)) {
    if (child['isMesh']) {
      associateLightmap(lightmap1, child as Mesh)
    } else if (child['isGroup']) {
      associateLightmap(lightmap2, ...[...allDescendantsOf(child)].filter(child => child['isMesh']) as Mesh[])
    }
  }
}
