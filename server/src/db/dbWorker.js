const { Sequelize } = require('sequelize')
require('dotenv').config()
const dbWorker = {}
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})
let table

dbWorker.getUser = async (username) => {
  const user = await table.findAll({
    where: {
      login: username
    }
  })
  if (user.length > 1) {
    return user[0].dataValues
  } else {
    return {}
  }
}

dbWorker.setUser = async (user) => {
  table.create({
    login: user.login,
    id_github: user.id,
    node_id: user.node_id,
    avatar_url: user.avatar_url,
    gravatar_id: user.gravatar_id,
    url: user.url,
    html_url: user.html_url,
    followers_url: user.followers_url,
    following_url: user.following_url,
    gists_url: user.gists_url,
    starred_url: user.starred_url,
    subscriptions_url: user.subscriptions_url,
    organizations_url: user.organizations_url,
    repos_url: user.repos_url,
    events_url: user.events_url,
    received_events_url: user.received_events_url,
    type: user.type,
    site_admin: user.site_admin,
    name: user.name,
    company: user.company,
    blog: user.blog,
    location: user.location,
    email: user.email,
    hireable: user.hireable,
    bio: user.bio,
    twitter_username: user.twitter_username,
    public_repos: user.public_repos,
    public_gists: user.public_gists,
    followers: user.followers,
    following: user.following,
    created_at: user.created_at,
    updated_at: user.updated_at
  })
}

dbWorker.createTable = () => {
  table = sequelize.define('users', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    login: { type: Sequelize.STRING, allowNull: true },
    id_github: { type: Sequelize.INTEGER, allowNull: true },
    node_id: { type: Sequelize.STRING, allowNull: true },
    avatar_url: { type: Sequelize.STRING, allowNull: true },
    gravatar_id: { type: Sequelize.STRING, allowNull: true },
    url: { type: Sequelize.STRING, allowNull: true },
    html_url: { type: Sequelize.STRING, allowNull: true },
    followers_url: { type: Sequelize.STRING, allowNull: true },
    following_url: { type: Sequelize.STRING, allowNull: true },
    gists_url: { type: Sequelize.STRING, allowNull: true },
    starred_url: { type: Sequelize.STRING, allowNull: true },
    subscriptions_url: { type: Sequelize.STRING, allowNull: true },
    organizations_url: { type: Sequelize.STRING, allowNull: true },
    repos_url: { type: Sequelize.STRING, allowNull: true },
    events_url: { type: Sequelize.STRING, allowNull: true },
    received_events_url: { type: Sequelize.STRING, allowNull: true },
    type: { type: Sequelize.STRING, allowNull: true },
    site_admin: { type: Sequelize.BOOLEAN, allowNull: true },
    name: { type: Sequelize.STRING, allowNull: true },
    company: { type: Sequelize.STRING, allowNull: true },
    blog: { type: Sequelize.STRING, allowNull: true },
    location: { type: Sequelize.STRING, allowNull: true },
    email: { type: Sequelize.STRING, allowNull: true },
    hireable: { type: Sequelize.BOOLEAN, allowNull: true },
    bio: { type: Sequelize.STRING(1000), allowNull: true },
    twitter_username: { type: Sequelize.STRING, allowNull: true },
    public_repos: { type: Sequelize.INTEGER, allowNull: true },
    public_gists: { type: Sequelize.INTEGER, allowNull: true },
    followers: { type: Sequelize.INTEGER, allowNull: true },
    following: { type: Sequelize.INTEGER, allowNull: true },
    created_at: { type: Sequelize.STRING, allowNull: true },
    updated_at: { type: Sequelize.STRING, allowNull: true }
  }, { freezeTableName: true })
  table.sync()
}

module.exports = dbWorker
