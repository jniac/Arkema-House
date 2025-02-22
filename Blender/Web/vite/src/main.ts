import { DirectionalLight, HemisphereLight, Material, Mesh, MeshPhysicalMaterial, Texture, TorusKnotGeometry } from 'three'

import { VertigoControls } from 'some-utils-three/camera/vertigo/controls'
import { ThreeWebGLContext } from 'some-utils-three/experimental/contexts/webgl'
import { LineHelper } from 'some-utils-three/helpers/line'
import { AutoLitMaterial } from 'some-utils-three/materials/auto-lit'
import { allDescendantsOf } from 'some-utils-three/utils/tree'

import { loadGLTF, loadLightMap } from './loaders'

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

const skyLight = new HemisphereLight('#ffffff', '#00056a', .1)
three.scene.add(skyLight)

const sunLight = new DirectionalLight('#ffffff', .5)
sunLight.position.set(-10, 10, 10)
sunLight.castShadow = true
sunLight.shadow.mapSize.set(2048, 2048)
sunLight.shadow.camera.far = 100
sunLight.shadow.camera.top = 10
sunLight.shadow.camera.bottom = -10
sunLight.shadow.camera.left = -10
sunLight.shadow.camera.right = 10
sunLight.shadow.bias = -0.0001
three.scene.add(sunLight)

const glbUrl = '/Blender/Exports/ArkemaHouse_WGP.glb'
const gltf = await loadGLTF(glbUrl)
three.scene.add(gltf.scene)

Object.assign(window, { three, gltf, controls })

const lightMap1 = await loadLightMap('/Blender/Exports/ArkemaHouse-WGP-Lightmap-4096-1-Arc.png')
const lightMap2 = await loadLightMap('/Blender/Exports/ArkemaHouse-WGP-Lightmap-4096-2-Fur.png')

const processedMaterials = new Map<Material, Material>()
function getConvertedMaterial(material: Material, lightMap: Texture) {
  if (processedMaterials.has(material))
    return processedMaterials.get(material)!

  const newMaterial = new MeshPhysicalMaterial({
    color: material['color'],
    roughnessMap: material['roughnessMap'],
    map: material['map'],
    normalMap: material['normalMap'],
    aoMap: material['aoMap'],
    lightMap: lightMap,
    lightMapIntensity: 1,
  })
  processedMaterials.set(material, newMaterial)

  return newMaterial
}

function associateLightMap(lightMap: Texture, ...meshes: Mesh[]) {
  for (const mesh of meshes) {
    mesh.receiveShadow = true
    mesh.castShadow = true
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
    for (const material of materials) {
      mesh.material = getConvertedMaterial(material, lightMap)
    }
  }
}

for (const child of allDescendantsOf(gltf.scene)) {
  console.log(child.name)
  if (/_LM\d+$/.test(child.name)) {
    const lightMap = child.name.endsWith('1') ? lightMap1 : lightMap2
    if (child['isMesh']) {
      associateLightMap(lightMap, child as Mesh)
    } else if (child['isGroup']) {
      associateLightMap(lightMap, ...[...allDescendantsOf(child)].filter(child => child['isMesh']) as Mesh[])
    }
  }
}
