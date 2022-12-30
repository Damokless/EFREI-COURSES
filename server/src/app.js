const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./router')
const dbWorker = require('./db/dbWorker')

const app = express()
require('dotenv').config()
const port = parseInt(process.env.PORT) || 4242

if (!port) {
  console.error('Bad port configuration')
  process.exit(0)
}

app.use(cors())
app.use(bodyParser.json())

app.use('/', router)

dbWorker.createTable()

app.listen(port, () => {
  console.log(`Server localhost listening on port ${port}`)
})
