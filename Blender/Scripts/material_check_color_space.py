import bpy


def check_image_nodes_color_space():
    for mat in bpy.data.materials:
        if mat.use_nodes:
            print(f"\n🔍 Checking Material: {mat.name}")
            nodes = mat.node_tree.nodes

            for node in nodes:
                # Check Image Texture nodes
                if node.type == 'TEX_IMAGE' and node.image:
                    image_name = node.image.name

                    # Track connections from the Image Texture node
                    for link in node.outputs['Color'].links:
                        to_node = link.to_node
                        to_socket = link.to_socket

                        # Check if linked to Normal Map node
                        if to_node.type == 'NORMAL_MAP':
                            if node.image.colorspace_settings.name != 'Non-Color':
                                print(f"⚠️ Image '{image_name}' linked to 'Normal Map' in '{mat.name}' is NOT set to 'Non-Color'.")
                            else:
                                print(f"✅ Image '{image_name}' linked to 'Normal Map' in '{mat.name}' is correctly set to 'Non-Color'.")

                        # Check if directly linked to Roughness input
                        elif to_socket.name.lower() == 'roughness':
                            if node.image.colorspace_settings.name != 'Non-Color':
                                print(f"⚠️ Image '{image_name}' linked to 'Roughness' in '{mat.name}' is NOT set to 'Non-Color'.")
                            else:
                                print(f"✅ Image '{image_name}' linked to 'Roughness' in '{mat.name}' is correctly set to 'Non-Color'.")

print("🎯 Checking all materials for correct color space on Normal and Roughness maps...")
check_image_nodes_color_space()