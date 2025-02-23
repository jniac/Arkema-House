import { DirectionalLight, Group, Material, Mesh, MeshStandardMaterial, Object3D, PointLight, PointLightHelper, Texture, VSMShadowMap } from 'three'

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
sun.position.set(-20, 40, -10)
sun.castShadow = true
sun.shadow.intensity = 1.25
sun.shadow.mapSize.set(4096, 4096)
sun.shadow.camera.far = 100
sun.shadow.camera.top = 20
sun.shadow.camera.bottom = -20
sun.shadow.camera.left = -20
sun.shadow.camera.right = 20
sun.shadow.bias = -0.0001
sun.shadow.radius = 12
three.scene.add(sun)

function pointLights({
  debug = false,
} = {}) {
  const group = new Group()

  const parentRoom = new PointLight('#fff8e5', 15, 0, 2)
  parentRoom.position.set(5, 2, -6)
  group.add(parentRoom)

  const kitchen = new PointLight('#fff8e5', 10, 0, 2)
  kitchen.position.set(0, 2.5, -5)
  group.add(kitchen)

  const bathroom = new PointLight('#fff8e5', 5, 0, 2)
  bathroom.position.set(1.5, 2, -1)
  group.add(bathroom)

  const childRoom = new PointLight('#fff8e5', 10, 0, 2)
  childRoom.position.set(2, 2.5, 3)
  group.add(childRoom)

  const garage = new PointLight('#f2e5ff', 5, 0, 2)
  garage.position.set(5.5, 2.5, 2.5)
  group.add(garage)

  if (debug) {
    group.add(...group.children.map(child => {
      return new PointLightHelper(child as PointLight)
    }))
  }

  return {
    group,
  }
}

three.scene.add(pointLights().group)

const envMap = await loadEnvMap('/Blender/Assets/kloofendal_43d_clear_puresky_4k.hdr')
three.scene.environment = envMap
three.scene.environmentIntensity = .25

Object.assign(window, { three, controls })

const gltf = await loadGLTF('/Blender/Exports/ArkemaHouse6/ArkemaHouse6-KOK.glb')
three.scene.add(gltf.scene)

const lightMap1 = await loadLightMap('/Blender/Exports/ArkemaHouse6/ArkemaHouse6-KOK-LM1-@512.png')
const lightMap2 = await loadLightMap('/Blender/Exports/ArkemaHouse6/ArkemaHouse6-KOK-LM2-@512.png')

const processedMaterials = new Map<Material, Material>()
function getConvertedMaterial(material: Material, lightMap: Texture, {
  debug = false,
} = {}) {
  if (processedMaterials.has(material))
    return processedMaterials.get(material)!

  const newMaterial = (debug
    ? () => {
      const newMaterial = new MeshStandardMaterial({
        color: '#000000',
        emissive: '#808080',
        emissiveMap: lightMap,
      })
      return newMaterial
    }
    : () => {
      const newMaterial = (material as MeshStandardMaterial).clone()
      newMaterial.defines = { USE_LIGHTMAP: '' }
      newMaterial.lightMap = lightMap
      newMaterial.lightMapIntensity = .8
      newMaterial.normalScale.setScalar(1.25)
      return newMaterial
    })()

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
    const mesh = child as Mesh
    const index = getLightMapIndex(child)
    // console.log(mesh.name, index)
    const lightMap = [whiteTexture, lightMap1, lightMap2][index]
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
