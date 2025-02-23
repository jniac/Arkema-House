import { DirectionalLight, Material, Mesh, MeshStandardMaterial, Object3D, Texture, VSMShadowMap } from 'three'

import { VertigoControls } from 'some-utils-three/camera/vertigo/controls'
import { ThreeWebGLContext } from 'some-utils-three/experimental/contexts/webgl'
import { allAncestorsOf, allDescendantsOf } from 'some-utils-three/utils/tree'

import { initAssets, loadEnvMap, loadGLTF, loadLightMap, whiteTexture } from './assets'
import { debugKnot } from './debugKnot'

const three = new ThreeWebGLContext()
three.initialize(document.body)

initAssets(three.renderer)

three.renderer.shadowMap.enabled = true
three.renderer.shadowMap.type = VSMShadowMap

if (false) {
  three.scene.add(debugKnot())
}

const controls = new VertigoControls({
  size: 24,
  focus: [-1, 4.75, -.75],
  rotation: ['-40deg', '-40deg', '0'],
  perspective: .5,
})
  .initialize(document.body)
  .start()

three.ticker.onTick(tick => {
  controls.update(three.camera, three.aspect, tick.deltaTime)
})

const sun = new DirectionalLight('#ffffff', 1)
sun.position.set(-10, 40, 10)
sun.castShadow = true
sun.shadow.intensity = 1.25
sun.shadow.mapSize.set(4096, 4096)
sun.shadow.camera.far = 100
sun.shadow.camera.top = 20
sun.shadow.camera.bottom = -20
sun.shadow.camera.left = -20
sun.shadow.camera.right = 20
sun.shadow.bias = -0.0001
sun.shadow.radius = 25
three.scene.add(sun)

const envMap = await loadEnvMap('/Blender/Assets/kloofendal_43d_clear_puresky_4k.hdr')
three.scene.environment = envMap
three.scene.environmentIntensity = .25

Object.assign(window, { three, controls })

const gltf = await loadGLTF('/Blender/Exports/ArkemaHouse6/ArkemaHouse6-WGP.glb')
three.scene.add(gltf.scene)

const lightMap1 = await loadLightMap('/Blender/Exports/ArkemaHouse6/ArkemaHouse6-WGP-LM1-@512.png')
const lightMap2 = await loadLightMap('/Blender/Exports/ArkemaHouse6/ArkemaHouse6-WGP-LM2-@512.png')

const processedMaterials = new Map<Material, Material>()
function getConvertedMaterial(material: Material, lightMap: Texture) {
  if (processedMaterials.has(material))
    return processedMaterials.get(material)!

  const newMaterial = (material as MeshStandardMaterial).clone()
  // newMaterial.defines = { USE_LIGHTMAP: '' }
  newMaterial.lightMap = lightMap
  newMaterial.lightMapIntensity = .8
  newMaterial.normalScale.setScalar(1.25)
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

function getLightMapIndex(child: Object3D) {
  for (const parent of allAncestorsOf(child, { includeSelf: true, root: gltf.scene })) {
    const match = parent.name.match(/_LM(\d+)$/)
    if (match) {
      return Number(match[1])
    }
  }
  return 0
}

for (const child of allDescendantsOf(gltf.scene)) {
  if (child['isMesh']) {
    const index = getLightMapIndex(child)
    const lightMap = [whiteTexture, lightMap1, lightMap2][index]
    const mesh = child as Mesh
    mesh.receiveShadow = true
    mesh.castShadow = true
    associateLightMap(lightMap, mesh)
  }
}

const stage = {
  sun,
  gltf,
}

Object.assign(window, { stage })
