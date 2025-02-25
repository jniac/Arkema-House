/**
 * Returns the material type of the node.
 * @param {import('@gltf-transform/core').Node} node
 * @returns {'none' | 'lm1' | 'lm2'}
 */
function getMaterialType(node) {
  let scope = node
  while (scope) {
    if (/_LM\d+/.test(scope.getName())) {
      return `lm${scope.getName().match(/_LM(\d+)/)[1]}`
    }
    scope = scope.getParentNode()
  }
  return 'none'
}

/**
 *
 * @param {import('@gltf-transform/core').Document} document
 */
export function buildMaterialMaps(document) {
  const materials = {
    /** @type {Map<import('@gltf-transform/core').Material, import('@gltf-transform/core').Node>} */
    none: new Map(),
    /** @type {Map<import('@gltf-transform/core').Material, import('@gltf-transform/core').Node>} */
    lm1: new Map(),
    /** @type {Map<import('@gltf-transform/core').Material, import('@gltf-transform/core').Node>} */
    lm2: new Map(),
    /** @type {Map<import('@gltf-transform/core').Material, import('@gltf-transform/core').Node>} */
    lm3: new Map(),
  }

  /**
   *
   * @param {import('@gltf-transform/core').Node} node
   * @param {import('@gltf-transform/core').Material} material
   */
  function registerMaterial(node, material) {
    const type = getMaterialType(node)
    if (!materials[type]) {
      throw new Error(`Unknown material type: ${type}`)
    }
    const map = materials[type]
    if (!map.has(material)) {
      map.set(material, new Set())
    }
    map.get(material).add(node)
  }

  for (const node of document.getRoot().listNodes()) {
    const mesh = node.getMesh()
    if (mesh) {
      for (const primitive of mesh.listPrimitives()) {
        const material = primitive.getMaterial()
        if (material) {
          registerMaterial(node, material)
        }
      }
    }
  }

  return {
    materials,
    infoShort() {
      return 'materials by type: \n' + Object.entries(materials).map(([type, map]) => `  ${type}: ${map.size}`).join('\n')
    },
    info() {
      const lines = []
      for (const [materialType, map] of Object.entries(materials)) {
        if (lines.length > 0) {
          lines.push('')
        }
        lines.push(`type: ${materialType} (${map.size})`)
        for (const [material, nodes] of map.entries()) {
          lines.push(`  ${material.getName()} (${nodes.size})`)
        }
      }
      return lines.join('\n')
    },
  }
}
