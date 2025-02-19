import bpy

# Constants
LIGHTMAP_UV_NAME = "LightmapUV"
LIGHTMAP_RESOLUTION = 4096
LIGHTMAP_IMAGE_NAME = f"Lightmap-{LIGHTMAP_RESOLUTION}"

def ensure_lightmap_uv(mesh_obj):
    """Ensure the object has a Lightmap UV set"""
    uv_layer = mesh_obj.data.uv_layers.get(LIGHTMAP_UV_NAME)
    if uv_layer is None:
        uv_layer = mesh_obj.data.uv_layers.new(name=LIGHTMAP_UV_NAME)
        print(f"✅ Created LightmapUV for: {mesh_obj.name}")

    # Set it as the active UV layer
    mesh_obj.data.uv_layers.active = uv_layer
    uv_layer.active_render = True
    print(f"🎯 Set LightmapUV as active for: {mesh_obj.name}")

    return uv_layer

def ensure_lightmap_image():
    """Ensure a global image exists for the lightmap"""
    image = bpy.data.images.get(LIGHTMAP_IMAGE_NAME)
    if image is None:
        image = bpy.data.images.new(LIGHTMAP_IMAGE_NAME, LIGHTMAP_RESOLUTION, LIGHTMAP_RESOLUTION)
        print(f"✅ Created lightmap image: {LIGHTMAP_IMAGE_NAME}")
    return image

def ensure_uv_map_node(material, uv_map_name):
    """Ensure a UV Map node exists in the material and references the correct UV"""
    nodes = material.node_tree.nodes
    uv_map_node = None

    # Search for an existing UV Map node
    for node in nodes:
        if node.type == 'UVMAP' and node.uv_map == uv_map_name:
            uv_map_node = node
            break

    # Create if missing
    if uv_map_node is None:
        uv_map_node = nodes.new(type='ShaderNodeUVMap')
        uv_map_node.uv_map = uv_map_name
        uv_map_node.location = (-400, 0)
        print(f"✅ Created UV Map Node for {material.name} → {uv_map_name}")

    return uv_map_node

def ensure_texture_node(material, image):
    """Ensure a texture node exists and references the lightmap image"""
    nodes = material.node_tree.nodes
    tex_node = None

    # Search for existing texture node
    for node in nodes:
        if node.type == 'TEX_IMAGE' and node.image == image:
            tex_node = node
            break

    # Create if missing
    if tex_node is None:
        tex_node = nodes.new(type='ShaderNodeTexImage')
        tex_node.image = image
        tex_node.location = (-200, 0)
        print(f"✅ Created Texture Node for {material.name} → {image.name}")

    # Set the texture node as the active one for baking
    material.node_tree.nodes.active = tex_node
    print(f"🎯 Selected texture node for {material.name} → {image.name}")

    return tex_node

def link_nodes(material, uv_map_node, tex_node):
    """Ensure the UV Map Node is linked to the Texture Node"""
    nodes = material.node_tree.nodes
    links = material.node_tree.links

    # Check if already linked
    for link in links:
        if link.to_node == tex_node and link.from_node == uv_map_node:
            return  # Already linked

    # Create the link
    links.new(uv_map_node.outputs["UV"], tex_node.inputs["Vector"])
    print(f"🔗 Linked UV Map Node to Texture Node in {material.name}")

# Main function: process all objects
def process_scene():
    lightmap_image = ensure_lightmap_image()

    for obj in bpy.data.objects:
        if obj.type == 'MESH':
            print(f"🔍 Processing {obj.name}...")
            ensure_lightmap_uv(obj)

            for mat_slot in obj.material_slots:
                material = mat_slot.material
                if material and material.use_nodes:
                    uv_map_node = ensure_uv_map_node(material, LIGHTMAP_UV_NAME)
                    tex_node = ensure_texture_node(material, lightmap_image)
                    link_nodes(material, uv_map_node, tex_node)

# Run the script
process_scene()
print("✅ Lightmap setup complete for all meshes.")