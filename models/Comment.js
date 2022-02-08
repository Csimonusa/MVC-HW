// What needs to be required?
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/config')

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allownull: false
    }
  },  // Fill in the missing data
  {
    sequelize
  }
);

module.exports = Comment;
