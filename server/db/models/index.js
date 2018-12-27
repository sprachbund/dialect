const User = require('./user')
const Post = require('./post')

Post.belongsTo(User, {as: 'author'})
User.hasMany(Post)

module.exports = {
  User,
  Post
}
