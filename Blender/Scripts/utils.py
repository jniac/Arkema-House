import bpy
import mathutils


def apply_parent_inverse():
    for obj in bpy.context.selected_objects:
        if obj.parent:
            # Apply parent inverse matrix to the object's transform
            obj.matrix_basis = obj.matrix_parent_inverse @ obj.matrix_basis
            obj.matrix_parent_inverse.identity()  # Reset parent inverse
            print(f"Applied parent inverse to: {obj.name}")

# Run the function on selected objects
apply_parent_inverse()
print("Parent inverse applied and cleared.")