import bpy

LIGHTMAP_UV_NAME = "UVLightmap"


def setCustom(value=1, prop_name="lightmap_bake"):
    # Determine the property type based on the type of `value`
    if isinstance(value, int):
        prop_type = bpy.props.IntProperty
    elif isinstance(value, float):
        prop_type = bpy.props.FloatProperty
    elif isinstance(value, str):
        prop_type = bpy.props.StringProperty
    elif isinstance(value, bool):
        prop_type = bpy.props.BoolProperty
    else:
        raise TypeError(f"Unsupported type for value: {type(value)}")

    # Define the custom property on the Object type
    setattr(bpy.types.Object, prop_name, prop_type(
        name=prop_name,
        description="Custom property",
        default=value
    ))

    # Assign the value to the custom property for all selected objects
    for obj in bpy.context.selected_objects:
        obj[prop_name] = value

    print(f"🎯 Custom property '{prop_name}' ({prop_type.__name__}) added to all selected objects with value: {value}")

def isolate(value, prop_name = "lightmap_bake"):
    for obj in bpy.context.scene.objects:
        if obj.get(prop_name) is not value:
            obj.hide_set(True)
            obj.hide_render = True
            print(f"Hidden object: {obj.name} (no 'lightmap_bake = True')")
        else:
            obj.hide_set(False)
            obj.hide_render = False
            print(f"Visible object: {obj.name} (has 'lightmap_bake = True')")
            

def select(value = 1, prop_name = "lightmap_bake"):
    bpy.ops.object.select_all(action='DESELECT')
    for obj in bpy.context.scene.objects:
        if obj.type == 'MESH' and obj.get(prop_name) is value:
            obj.select_set(True)

def switchTo(valueSource, valueTarget, prop_name = "lightmap_bake"):
    for obj in bpy.context.scene.objects:
        if obj.get(prop_name) is valueSource:
            obj[prop_name] = valueTarget
            print(f"Switched object: {obj.name} (from {valueSource} to {valueTarget})")


def merge_meshes_by_group():
    # Dictionary to store groups of objects
    merge_groups = {}

    # Iterate through all objects in the scene
    for obj in bpy.context.scene.objects:
        if obj.type == 'MESH' and "merge_group" in obj.keys():
            # Get the merge_group value
            group_id = obj["merge_group"]

            # Add the object to the corresponding group
            if group_id not in merge_groups:
                merge_groups[group_id] = []
            merge_groups[group_id].append(obj)

    # Merge objects in each group
    for group_id, objects in merge_groups.items():
        if len(objects) > 1:
            print(f"Merging group {group_id} with {len(objects)} objects")

            # Deselect all objects
            bpy.ops.object.select_all(action='DESELECT')

            # Select objects in the current group
            for obj in objects:
                obj.select_set(True)
                bpy.context.view_layer.objects.active = obj

            # Join the selected objects
            bpy.ops.object.join()

            # Rename the merged object (optional)
            bpy.context.active_object.name = f"Merged_Group_{group_id}"
        else:
            print(f"Group {group_id} has only 1 object, skipping merge")

    print("Merge operation complete!")

def ensure_lightmap_suffixes():
    for obj in bpy.context.scene.objects:
        if obj.type == 'MESH':
            lightmap = obj.get("lightmap_bake")
            if lightmap is not None and lightmap > 0:
                re = r"_LM\d+$"
                name = obj.name.replace(re, "")
                obj.name = f"{name}_LM{lightmap}"

def delete_unwanted_uv_layers():
    for obj in bpy.context.scene.objects:
        if obj.type == 'MESH':
            for uv_layer in obj.data.uv_layers:
                if uv_layer.name != "UVMap" and uv_layer.name != "UVLightmap":
                    obj.data.uv_layers.remove(uv_layer)
                    print(f"Deleted UV layer: {uv_layer.name}")

def adjust_bevel_modifiers():
    count = 0
    # Iterate over all objects in the scene
    for obj in bpy.data.objects:
        if obj.type == 'MESH':
            # Iterate over all modifiers for each object
            for modifier in obj.modifiers:
                if modifier.type == 'BEVEL':
                    # Set segments to 2
                    modifier.segments = 2
                    
                    # Enable Harden Normals
                    modifier.harden_normals = True
                    count += 1
                    
    print(f"modified: {count} bevel")

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
    lightmap_uv_node = ensure_uv_map_node(material, LIGHTMAP_UV_NAME, x=-1400, y=400)
    clear_existing_image_texture_nodes(material)
    tex_node = ensure_lightmap_texture_node(material, lightmap_image, x=-1200, y=400)
    link_nodes(material, lightmap_uv_node, tex_node)               


# Main function: process all objects
def process_selected_objects(lightmap_image_name = "foo", lightmap_resolution = 4096):
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

    print("✅ process_selected_objects completed") 




# Run the script
resolution = 4096
id = 'WGP'
samples = 512

# select(1)
# process_selected_objects(f"ArkemaHouse-{id}-Lightmap-{resolution}-1-Arc-@{samples}", resolution)

# select(2)
# process_selected_objects(f"ArkemaHouse-{id}-Lightmap-{resolution}-2-Fur-@{samples}", resolution)

# select(1)
# setCustom(10)
# isolate(10)
# switchTo(10, 1)
# setCustom("walls", "merge_group")
# ensure_lightmap_suffixes()
# delete_unwanted_uv_layers()

