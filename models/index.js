const Comment = require('./Comment')
const Post = require('./Post')
const User = require('./User')
//What do we need to require for this document?

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
})

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
})

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
})

module.exports = {
  User,
  Comment,
  Post
};