// What are we missing to be required here?
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/config')

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
  // Finish the post expression
);

module.exports = Post;
