import concurrently from 'concurrently'

concurrently([
  { command: 'pnpm serve ../../.. -p 4001 --cors', name: 'Blender', prefixColor: 'bgBlue.bold' },
  { command: 'pnpm vite --port 4000', name: 'Vite', prefixColor: 'bgGreen.bold' }
])
