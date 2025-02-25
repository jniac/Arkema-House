import "@fontsource/inter"
import { BackSide, DirectionalLight, FrontSide, IcosahedronGeometry, Material, Mesh, MeshBasicMaterial, Object3D, VSMShadowMap } from 'three'

import { VertigoControls } from 'some-utils-three/camera/vertigo/controls'
import { ThreeWebGLContext } from 'some-utils-three/experimental/contexts/webgl'
import { ShaderForge, vec3 } from 'some-utils-three/shader-forge'
import { allDescendantsOf, queryDescendantsOf, setup } from 'some-utils-three/utils/tree'
import { glsl_easings } from 'some-utils-ts/glsl/easings'
import { glsl_stegu_snoise } from 'some-utils-ts/glsl/stegu-snoise'
import { glsl_utils } from 'some-utils-ts/glsl/utils'

import { initAssets, loadEnvMap, loadGLTF, loadLightMap, whiteTexture } from './assets'
import { debugKnot } from './debug-knot'
import { pointLights } from './point-lights'

// @ts-ignore
const development = /localhost|127.0.0.1/.test(window.location.host)
console.log(`development: ${development}`)

function getAllMaterials(object: Object3D) {
  const materials = new Set<Material>()
  for (const child of allDescendantsOf(object)) {
    if (child['isMesh']) {
      const mesh = child as Mesh
      const meshMaterials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
      for (const material of meshMaterials) {
        materials.add(material)
      }
    }
  }
  return Array.from(materials)
}

async function main() {
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
  sun.position.set(-20, 30, -10)
  sun.castShadow = true
  sun.shadow.intensity = .33
  sun.shadow.mapSize.set(4096, 4096)
  const size = 10
  sun.shadow.camera.far = 100
  sun.shadow.camera.top = size
  sun.shadow.camera.bottom = -size
  sun.shadow.camera.left = -size
  sun.shadow.camera.right = size
  sun.shadow.bias = -.00001
  sun.shadow.radius = 10
  three.scene.add(sun)

  three.scene.add(pointLights().group)

  function arkemaSky() {
    const sky = new Mesh(new IcosahedronGeometry(100, 2), new MeshBasicMaterial({
      color: 'red',
      side: BackSide,
    }))
    setup(sky, {
      rotation: ['-40deg', '0deg', '0'],
    })
    sky.material.onBeforeCompile = shader => ShaderForge.with(shader)
      .varying({
        vObjectPosition: 'vec3',
      })
      .vertex.mainBeforeAll(/* glsl */`
      vObjectPosition = position;
    `)
      .fragment.top(
        glsl_utils,
        glsl_easings,
        glsl_stegu_snoise,
      )
      .fragment.after('color_fragment', /* glsl */`
      float x = inverseLerp(-66.0, 66.0, vObjectPosition.y);
      x += snoise(vObjectPosition.xyz * 12.445678) * .025;
      diffuseColor.rgb = mix(${vec3('#06AEA7')}, ${vec3('#034C5F')}, easeInOut3(x));
    `)
    return sky
  }

  three.scene.add(arkemaSky())

  const envMap = await loadEnvMap('assets/kloofendal_43d_clear_puresky_4k.hdr')
  three.scene.environment = envMap
  three.scene.environmentIntensity = .33

  Object.assign(window, { three, controls })

  const prefix = development
    ? 'http://localhost:4001/output'
    : `/Arkema-House/output`

  const gltf = await loadGLTF(`${prefix}/ArkemaHouse6-LYX-webp-merge.glb`)
  three.scene.add(gltf.scene)

  const lightMap1 = await loadLightMap(`${prefix}/ArkemaHouse6-LYX-LM1-@512.png`)
  const lightMap2 = await loadLightMap(`${prefix}/ArkemaHouse6-LYX-LM2-@512.png`)

  const materials = getAllMaterials(gltf.scene)
  const newMaterials = new Map<Material, Material>()
  for (const material of materials) {
    const lightMap =
      material.name.includes('_LM1') ? lightMap1 :
        material.name.includes('_LM2') ? lightMap2 :
          whiteTexture

    const debug = false

    if (debug) {
      const newMaterial = new MeshBasicMaterial({
        map: lightMap,
        side: FrontSide,
      })
      newMaterials.set(material, newMaterial)
    }

    else {
      const newMaterial = material.clone()
      newMaterial['lightMap'] = lightMap
      newMaterial['lightMapIntensity'] = 1
      material['side'] = FrontSide
      newMaterials.set(material, newMaterial)
    }
  }

  const meshes = [...queryDescendantsOf(gltf.scene, child => !!child['isMesh'])] as Mesh[]
  for (const mesh of meshes) {
    mesh.material = Array.isArray(mesh.material)
      ? mesh.material.map(material => newMaterials.get(material)!)
      : newMaterials.get(mesh.material)!

    mesh.receiveShadow = true
    mesh.castShadow = true
  }

  const stage = {
    sun,
    gltf,
  }

  Object.assign(window, { stage })
}

main()
