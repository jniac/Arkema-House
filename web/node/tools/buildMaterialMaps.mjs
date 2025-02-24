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
  }

  /**
   *
   * @param {import('@gltf-transform/core').Node} node
   * @param {import('@gltf-transform/core').Material} material
   */
  function registerMaterial(node, material) {
    const materialType = /_LM\d+/.test(node.getName())
      ? `lm${node.getName().match(/_LM(\d+)/)[1]}`
      : 'none'
    const map = materials[materialType]
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
    info() {
      const lines = []
      for (const [materialType, map] of Object.entries(materials)) {
        lines.push(`type: ${materialType} (${map.size})`)
        for (const [material, nodes] of map.entries()) {
          lines.push(`  ${material.getName()} (${nodes.size})`)
        }
      }
      return lines.join('\n')
    },
  }
}
