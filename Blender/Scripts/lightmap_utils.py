import bpy


def set(value=1, prop_name="lightmap_bake"):
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
        if obj.get(prop_name) is value:
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

# set(10)
# isolate(10)
# select(10)
# switchTo(10, 1)

set("walls", "merge_group")
