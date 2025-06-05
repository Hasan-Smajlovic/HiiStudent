const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Announcement = sequelize.define(
  "Announcement",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    employerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Employers",
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    type: {
        type: DataTypes.ENUM,
        defaultValue: "job", // Default role
        values: ["internship", "job"],
    },
    location: {
        type: DataTypes.ENUM,
        defaultValue: "bih", // Default location
        values: ["bih", "europe"],
      },
      isRemote: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      requirements: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      deadline: {
        type: DataTypes.DATE,
        allowNull: false,
      }
  }
);

module.exports = Announcement;
