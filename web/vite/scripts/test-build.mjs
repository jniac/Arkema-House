import express from 'express'
import path from 'path'

import config from '../vite.config.mjs'

const app = express()
const PORT = 4004

const dir = path.join(import.meta.dirname, '../../demo')
console.log(dir)
app.use(`/${config.base}`, express.static(dir))
app.get('/', (req, res) => res.send('ok'))

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/${config.base}`)
})
