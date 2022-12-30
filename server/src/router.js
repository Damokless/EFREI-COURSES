const express = require('express')
const userAPI = require('./api/userAPI')

const router = express.Router()

router.get('/', (_req, res) => {
  res.sendStatus(200)
})

router.get('/users/:username', (req, res) => {
  userAPI.get(res, req.params.username)
})

router.get('/*', (_req, res) => {
  res.sendStatus(404)
})

module.exports = router
