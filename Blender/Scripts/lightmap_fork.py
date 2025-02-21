import random
import re
import string
from datetime import datetime

import bpy


def is_ascii(s):
    try:
        s.encode('ascii')
        return True
    except UnicodeEncodeError:
        return False

# Function to save the file with a timestamped suffix
def save_lightmap_version():
    # Get the current file path and name
    filepath = bpy.data.filepath
    if not filepath:
        print("Save the file before running the script.")
        return

    # Generate new timestamp
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")

    # Regular expression to check if LIGHTMAP_<TIMESTAMP> already exists
    pattern = r"_LIGHTMAP_\w{3}_\d{8}_\d{6}"  # Matches "_LIGHTMAP_YYYYMMDD_HHMMSS"

    if re.search(pattern, filepath):
        # Replace existing LIGHTMAP timestamp with new one
        id = ''.join(random.choices(string.ascii_uppercase, k=3))
        new_filepath = re.sub(pattern, f"_LIGHTMAP_{timestamp}_{id}", filepath)
    else:
        # Append LIGHTMAP_XXX_<TIMESTAMP> if not already in the name
        id = ''.join(random.choices(string.ascii_uppercase, k=3))
        new_filepath = filepath.replace(".blend", f"_LIGHTMAP_{timestamp}_{id}.blend")

    # Save the new version
    bpy.ops.wm.save_as_mainfile(filepath=new_filepath)
    print(f"Saved lightmap version: {new_filepath}")

# Function to apply all modifiers on meshes
def apply_all_modifiers():
    for obj in bpy.context.scene.objects:
        if obj.type == 'MESH':
            # Switch to object mode and select the object
            bpy.ops.object.mode_set(mode='OBJECT')
            bpy.ops.object.select_all(action='DESELECT')
            obj.select_set(True)
            bpy.context.view_layer.objects.active = obj

            # Apply all modifiers
            for modifier in obj.modifiers:
                if not is_ascii(modifier.name) or not is_ascii(obj.name):
                    print(f"⚠️ Skipping modifier '{modifier.name}' on '{obj.name}' due to non-ASCII characters.")
                    continue  # Skip this modifier and avoid the error
                
                objectName = obj.name.encode('utf-8', 'ignore').decode()
                modifierName = modifier.name.encode('utf-8', 'ignore').decode()   
                
                try:
                    bpy.ops.object.modifier_apply(modifier=modifier.name)
                    print(f"Applied modifier '{modifierName}' on '{objectName}'")
                except RuntimeError as e:
                    print(f"Failed to apply modifier '{modifierName}' on '{objectName}': {e}")

# Function to delete invisible objects
def delete_invisible_objects():
    objects_to_remove = [obj for obj in bpy.context.scene.objects if obj.hide_viewport or obj.hide_render]

    for obj in objects_to_remove:
        print(f"Deleting invisible object: {obj.name}")
        bpy.data.objects.remove(obj, do_unlink=True)

# Function to delete curves
def delete_curves():
    curves_to_remove = [obj for obj in bpy.context.scene.objects if obj.type == 'CURVE']

    # Then, remove them in a separate loop
    for obj in curves_to_remove:
        if obj.name in bpy.data.objects:  # Extra safety check
            print(f"Deleting curve: {obj.name}")
            bpy.data.objects.remove(obj, do_unlink=True)

def rename_C4D_uv():
    for obj in bpy.data.objects:
        if obj.type == 'MESH':
            for uv in obj.data.uv_layers:
                if uv.name == 'UVW':
                    uv.name = 'UVMap'

def unparent_objects():
    """Function to unparent all objects without affecting their transforms"""
    for obj in bpy.context.scene.objects:
        if obj.parent:
            # Unparent while keeping the object's world transform
            obj.select_set(True)
            bpy.context.view_layer.objects.active = obj
            bpy.ops.object.parent_clear(type='CLEAR_KEEP_TRANSFORM')
            print(f"Unparented: {obj.name}")

def delete_empty_objects():
    """Function to delete empty objects (Empties with no children)"""
    empties_to_delete = [obj for obj in bpy.context.scene.objects if obj.type == 'EMPTY' and len(obj.children) == 0]

    # Delete collected empties
    for empty in empties_to_delete:
        try:
            bpy.data.objects.remove(empty, do_unlink=True)
            print(f"Deleted empty: {empty.name}")
        except Exception as e:
            print(f"Failed to delete empty: {empty.name}, {e}")

def delete_empty_collections():
    """Collect and delete empty collections"""
    empty_collections = [coll for coll in bpy.data.collections if len(coll.objects) == 0]

    # Delete empty collections
    for coll in empty_collections:
        bpy.data.collections.remove(coll)
        print(f"Deleted empty collection: {coll.name}")

def delete_objects_with_property_and_descendants(prop_name="lightmap_remove_on_clean"):
    """Delete objects with a custom property and their descendants."""
    # Iterate through all objects in the scene
    for obj in bpy.context.scene.objects:
        # Check if the object has the custom property and if it's truthy
        if prop_name in obj and bool(obj[prop_name]):
            # Delete the object and its descendants
            delete_object_and_descendants(obj)
            print(f"Deleted object and descendants: {obj.name}")

def delete_object_and_descendants(obj):
    """Delete an object and all its descendants."""
    # Collect all descendants of the object
    descendants = get_descendants(obj)

    # Delete the object and its descendants
    for descendant in descendants:
        bpy.data.objects.remove(descendant, do_unlink=True)
    bpy.data.objects.remove(obj, do_unlink=True)

def get_descendants(obj):
    """Get all descendants of an object."""
    descendants = []
    # Recursively find all children and their children
    for child in obj.children:
        descendants.append(child)
        descendants.extend(get_descendants(child))
    return descendants

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
            
            has_common_lightmap_bake = True
            common_lightmap_bake = -1

            # Select objects in the current group
            for obj in objects:
                current_lightmap_bake = obj.get("lightmap_bake")
                if current_lightmap_bake is None:
                    has_common_lightmap_bake = False
                elif common_lightmap_bake == -1:
                    common_lightmap_bake = current_lightmap_bake
                elif common_lightmap_bake != current_lightmap_bake:
                    has_common_lightmap_bake = False
                
                # Select the object
                obj.select_set(True)
                bpy.context.view_layer.objects.active = obj

            # Join the selected objects
            bpy.ops.object.join()

            # Rename the merged object (optional)
            bpy.context.active_object.name = f"Merged_Group_{group_id}"
            if has_common_lightmap_bake:
                bpy.context.active_object["lightmap_bake"] = common_lightmap_bake
        else:
            print(f"Group {group_id} has only 1 object, skipping merge")

    print("Merge operation complete!")


# Main function
def lightmap_fork():
    save_lightmap_version()
    apply_all_modifiers()
    rename_C4D_uv()
    delete_invisible_objects()
    delete_curves()
    # delete_empty_objects()
    # delete_objects_with_property_and_descendants("lightmap_remove_on_clean")
    # merge_meshes_by_group() # Merge created issues (incorrect materials, UVs, etc.)

    print("Lightmap preparation complete!")

# Run the script
lightmap_fork()