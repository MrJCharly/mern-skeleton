import express from 'express'
import devBundle from './devBundle'
import path from 'path'
import template from './../template'

const CURR_DIR = process.cwd()
const app = express()

devBundle.compile(app)
app.use('/dist', express.static(path.join(CURR_DIR, 'dist')))
app.get('/', (req, res) => {
  res.status(200).send(template())
})

const port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err)
  }

  console.info('Server started and listening on port %s', port)
})
