const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
  content: {
    type: Sequelize.TEXT
  },
  tags: {
    type: Sequelize.ARRAY({type: Sequelize.STRING})
  }
})

module.exports = Post
