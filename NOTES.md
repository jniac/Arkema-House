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

### MaisonArkema6
- Clean chair meshes (7884 vertices removed!)
- Fix normals
- Fix material lightmap fight (one material per lightmap)
- Fix missing wall in lightmap

## Render time

### MaisonArkema4
Lightmap 4096x4096
10:18 -> 10:57 (00:39)

### MaisonArkema5
21/02/2025: 

- Lightmap #1 (architecture) 4096x4096  
  - 09:20 -> 10:24 (01:04)
  - 12:15 -> 13:28 (01:13)

- Lightmap #2 (furniture) 4096x4096  
  - 11:06 -> 12:06 (01:00)

### MaisonArkema6
22/02/2025: 

- Lightmap #1 (architecture) 4096x4096
  - 09:26 -> 09:52 (00:26, @samples: 128)
  - 10:58 -> ? (?, @samples: 512)
  - 16:35 -> ? (?, @samples: 512)


- Lightmap #2 (furniture) 4096x4096  
  - 10:16 -> 10:44 (00:28, @samples: 128)
  - 21:35 -> 23:XX (?, @samples: 512)

## Debug

uv slice-16

0.164183109998703
0.670603334903717
0.5324695706367493
0.670603334903717
0.32686546444892883
0.670603334903717
0.4097073972225189
0.13452088832855225
0.5324695706367493
0.8345512747764587
0.164183109998703
0.8345512747764587
0.32686546444892883
0.5871286392211914
0.164183109998703
0.5871286392211914
