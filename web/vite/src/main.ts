import "@fontsource/inter"
import { BackSide, DirectionalLight, FrontSide, IcosahedronGeometry, Material, Mesh, MeshBasicMaterial, MeshStandardMaterial, Object3D, Texture, VSMShadowMap } from 'three'

import { VertigoControls } from 'some-utils-three/camera/vertigo/controls'
import { ThreeWebGLContext } from 'some-utils-three/experimental/contexts/webgl'
import { ShaderForge, vec3 } from 'some-utils-three/shader-forge'
import { allAncestorsOf, allDescendantsOf, setup } from 'some-utils-three/utils/tree'
import { glsl_easings } from 'some-utils-ts/glsl/easings'
import { glsl_stegu_snoise } from 'some-utils-ts/glsl/stegu-snoise'
import { glsl_utils } from 'some-utils-ts/glsl/utils'

import { initAssets, loadEnvMap, loadGLTF, loadLightMap, whiteTexture } from './assets'
import { debugKnot } from './debugKnot'
import { pointLights } from './pointLights'

// @ts-ignore
const production = /true|1/.test(import.meta?.env?.VITE_PRODUCTION)

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

  const sun = new DirectionalLight('#ffffff', 2)
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
  sun.shadow.radius = 5
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
  three.scene.environmentIntensity = .25

  Object.assign(window, { three, controls })

  const prefix = production
    ? `/Arkema-House/output`
    : 'http://localhost:4001/output'

  const gltf = await loadGLTF(`${prefix}/ArkemaHouse6-KOK-webp.glb`)
  three.scene.add(gltf.scene)

  const lightMap1 = await loadLightMap(`${prefix}/ArkemaHouse6-KOK-LM1-@512.png`)
  const lightMap2 = await loadLightMap(`${prefix}/ArkemaHouse6-KOK-LM2-@512.png`)
  const aoMap1 = await loadLightMap(`${prefix}/ArkemaHouse6-KOK-AO1-@512.png`)
  const aoMap2 = await loadLightMap(`${prefix}/ArkemaHouse6-KOK-AO2-@512.png`)

  const processedMaterials = new Map<Material, Material>()
  function getConvertedMaterial(material: Material, aoMap: Texture, lightMap: Texture, {
    debug = false,
  } = {}) {
    if (processedMaterials.has(material))
      return processedMaterials.get(material)!

    const newMaterial = (debug
      ? () => {
        const newMaterial = new MeshStandardMaterial({
          color: '#000000',
          emissive: '#ffffff',
          emissiveMap: aoMap,
        })
        return newMaterial
      }
      : () => {
        const newMaterial = (material as MeshStandardMaterial).clone()
        newMaterial.defines = { USE_LIGHTMAP: '' }
        newMaterial.aoMap = aoMap
        newMaterial.aoMapIntensity = .33
        newMaterial.lightMap = lightMap
        newMaterial.lightMapIntensity = 1
        newMaterial.normalScale.setScalar(1.25)
        newMaterial.side = FrontSide
        return newMaterial
      })()

    processedMaterials.set(material, newMaterial)

    return newMaterial
  }

  function associateMaps(aoMap: Texture, lightMap: Texture, ...meshes: Mesh[]) {
    for (const mesh of meshes) {
      mesh.receiveShadow = true
      mesh.castShadow = true
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
      for (const material of materials) {
        mesh.material = getConvertedMaterial(material, aoMap, lightMap)
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
      const aoMap = [whiteTexture, aoMap1, aoMap2][index]
      mesh.receiveShadow = true
      mesh.castShadow = true
      associateMaps(aoMap, lightMap, mesh)
    }
  }

  const stage = {
    sun,
    gltf,
  }

  Object.assign(window, { stage })
}

main()
