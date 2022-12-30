const fetch = require('node-fetch')
const userAPI = {}
const dbWorker = require('../db/dbWorker')

userAPI.get = async (res, username) => {
  const response = {}
  let user = await dbWorker.getUser(username)
  if (Object.keys(user).length === 0) {
    user = await fetch(`https://api.github.com/users/${username}`).then(res => res.json())
    if (user.message) {
      response.code = 400
      response.message = 'User not found'
      res.send(response)
    } else {
      response.code = 200
      response.data = user
      res.send(response)
      dbWorker.setUser(user)
    }
  } else {
    response.code = 200
    response.data = user
    res.send(response)
  }
}

module.exports = userAPI
