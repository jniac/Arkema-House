# Notes.md

## Version

### MaisonArkema4
- One lightmap for all
- script for conversion

### MaisonArkema5
- Split lightmap (2 x 4096x4096): 
  - architecture (walls, floor)
  - furniture (curtains, bed, sofa etc.)
- Clean window bay (remove old meshes)
- Clean other windows
- Clean child bed (invisible / useless screws)
- Clean roof (one simple base mesh)
- Python script for auto-merge some meshes (`merge_meshes_by_group()`).
- Clean "C4D Arkema FBX wrapper" (the 1 / 100 scale caused problems in lightmap meshes scale / weight) 
- Added "Arkema green ground" for baking reflections

## Render time

### MaisonArkema4
Lightmap 4096x4096
10:18 -> 10:57 (00:39)

### MaisonArkema
21/02/2025: 

- Lightmap #1 (architecture) 4096x4096  
  09:20 -> 10:24 (01:04)

- Lightmap #2 (furniture) 4096x4096  
  11:06 -> ?
