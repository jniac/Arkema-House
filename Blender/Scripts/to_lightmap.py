import re
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
    pattern = r"_LIGHTMAP_\d{8}_\d{6}"  # Matches "_LIGHTMAP_YYYYMMDD_HHMMSS"

    if re.search(pattern, filepath):
        # Replace existing LIGHTMAP timestamp with new one
        new_filepath = re.sub(pattern, f"_LIGHTMAP_{timestamp}", filepath)
    else:
        # Append LIGHTMAP_<TIMESTAMP> if not already in the name
        new_filepath = filepath.replace(".blend", f"_LIGHTMAP_{timestamp}.blend")

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
    for obj in bpy.context.scene.objects:
        # Check if the object is hidden in the viewport or disabled in rendering
        if obj.hide_viewport or obj.hide_render:
            bpy.data.objects.remove(obj, do_unlink=True)
            print(f"Deleted invisible object: {obj.name}")

# Function to delete curves
def delete_curves():
    for obj in bpy.context.scene.objects:
        if obj.type == 'CURVE':
            bpy.data.objects.remove(obj, do_unlink=True)
            print(f"Deleted curve: {obj.name}")

# Main function
def prepare_for_lightmap_baking():
    # Save the current file with a timestamped suffix
    save_lightmap_version()

    # Apply all modifiers on meshes
    apply_all_modifiers()

    # Delete invisible objects
    delete_invisible_objects()

    # Delete curves
    delete_curves()

    print("Lightmap preparation complete!")

# Run the script
prepare_for_lightmap_baking()