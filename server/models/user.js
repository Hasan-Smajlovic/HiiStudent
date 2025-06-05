const sequelize = require("../config/database");
const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  surname: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  role: {
    type: DataTypes.ENUM,
    defaultValue: "student", // Default role
    values: ["student", "employer"],
  },
});

module.exports = User;
