// What do we need to require here?
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/config')
const bcrypt = require('bcrypt')

// create our User model
class User extends Model {
  checkPass(password) {
    return bcrypt.compareSync(password, this.password)
  }
  // set up method to run on instance data (per user) to check password
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  //  What needs to go in the User expression here?
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10)
        return newUserData
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10)
        return updatedUserData
      }
      // How do we set up the hook functionality?
    
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User'
  }
);

module.exports = User;
