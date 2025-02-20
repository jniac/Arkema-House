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

def add_custom_float_property(obj, prop_name, default_value=0.0, min_value=0.0, max_value=10.0):
    """Adds a custom float property with range to an object"""
    bpy.types.Object.my_custom_float = bpy.props(
        name=prop_name,
        description="Custom float property",
        default=default_value,
        min=min_value,
        max=max_value
    )
    obj[prop_name] = default_value