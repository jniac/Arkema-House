import bpy

# Constants
LIGHTMAP_UV_NAME = "UVLightmap"

def ensure_lightmap_uv(mesh_obj):
    uv_layer = mesh_obj.data.uv_layers.get(LIGHTMAP_UV_NAME)
    if uv_layer is None:
        uv_layer = mesh_obj.data.uv_layers.new(name=LIGHTMAP_UV_NAME)
        print(f"✅ Created LightmapUV for: {mesh_obj.name}")

    # Set it as the active UV layer
    mesh_obj.data.uv_layers.active = uv_layer
    uv_layer.active_render = True
    print(f"🎯 Set LightmapUV as active for: {mesh_obj.name}")

    return uv_layer

def ensure_lightmap_image(name, size):
    # Ensure a global image exists for the lightmap
    image = bpy.data.images.get(name)
    if image is None:
        image = bpy.data.images.new(name, size, size)
        print(f"✅ Created lightmap image: {name}")
    return image

def ensure_uv_map_node(material, uv_map_name, x = -400, y = 0):
    # Ensure a UV Map node exists in the material and references the correct UV
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
        uv_map_node.location = (x, y)
        print(f"✅ Created UV Map Node for {material.name} → {uv_map_name}")

    return uv_map_node

def clear_existing_image_texture_nodes(material):
    if material is None or not material.use_nodes:
        print("Material not found or does not use nodes")
    else:
        node_tree = material.node_tree
        nodes = node_tree.nodes

        # Find the UVMap node that uses "UVLightmap"
        uvmap_node = None
        for node in nodes:
            if node.type == 'UVMAP' and getattr(node, "uv_map", None) == LIGHTMAP_UV_NAME:
                uvmap_node = node
                break

        if uvmap_node is None:
            print(f"No UVMap node referencing '{LIGHTMAP_UV_NAME}' found")
        else:
            # Collect nodes that are connected to the UVMap node.
            nodes_to_remove = set()
            for link in node_tree.links:
                if link.from_node == uvmap_node:
                    nodes_to_remove.add(link.to_node)
                if link.to_node == uvmap_node:
                    nodes_to_remove.add(link.from_node)

            # Remove each connected node (avoiding removing the UVMap node itself)
            for node in nodes_to_remove:
                if node != uvmap_node:
                    nodes.remove(node)
            print("Removed nodes connected to the UVMap node.")

def ensure_lightmap_texture_node(material, image, x = -200, y = 0):
    # Ensure a texture node exists and references the lightmap image
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
        tex_node.location = (x, y)
        print(f"✅ Created Texture Node for {material.name} → {image.name}")

    # Set the texture node as the active one for baking
    material.node_tree.nodes.active = tex_node
    print(f"🎯 Selected texture node for {material.name} → {image.name}")

    return tex_node

def link_nodes(material, uv_map_node, tex_node):
    # Ensure the UV Map Node is linked to the Texture Node
    links = material.node_tree.links

    # Check if already linked
    for link in links:
        if link.to_node == tex_node and link.from_node == uv_map_node:
            return  # Already linked

    # Create the link
    links.new(uv_map_node.outputs["UV"], tex_node.inputs["Vector"])
    print(f"🔗 Linked UV Map Node to Texture Node in {material.name}")

def link_default_uv_node_to_existing_images(material):
    default_uv_node = ensure_uv_map_node(material, "UVMap", x=-700, y=0)
    nodes = material.node_tree.nodes
    links = material.node_tree.links
    for node in nodes:
        if node.type == 'TEX_IMAGE':
            # Check if the Vector input is already connected
            if not node.inputs['Vector'].is_linked:
                links.new(default_uv_node.outputs['UV'], node.inputs['Vector'])
                print(f"🔗 Linked UV Map Node to Image Texture: {node.name}")

def link_lightmap_uv_to_lightmap_image(material, lightmap_image):
    lightmap_uv_node = ensure_uv_map_node(material, LIGHTMAP_UV_NAME, x=-1100, y=400)
    clear_existing_image_texture_nodes(material)
    tex_node = ensure_lightmap_texture_node(material, lightmap_image, x=-900, y=400)
    link_nodes(material, lightmap_uv_node, tex_node)               


# Main function: process all objects
def process_scene(lightmap_image_name = "foo", lightmap_resolution = 4096):
    lightmap_image = ensure_lightmap_image(lightmap_image_name, lightmap_resolution)

    processed_materials = set()
    # for obj in bpy.data.objects:
    for obj in bpy.context.selected_objects:
        if obj.type == 'MESH':
            print(f"🔍 Processing {obj.name}...")
            ensure_lightmap_uv(obj)

            for mat_slot in obj.material_slots:
                material = mat_slot.material
                if material and material.use_nodes and material.name not in processed_materials:
                    processed_materials.add(material.name)

                    link_default_uv_node_to_existing_images(material)
                    link_lightmap_uv_to_lightmap_image(material, lightmap_image)





# Run the script
RESOLUTION = 4096
# IMAGE_NAME = f"ArkemaHouse-Lightmap-{RESOLUTION}-1-Architecture"
IMAGE_NAME = f"ArkemaHouse-Lightmap-{RESOLUTION}-2-Furniture"

process_scene(IMAGE_NAME, RESOLUTION)

print("✅ Lightmap setup complete for all meshes.")
