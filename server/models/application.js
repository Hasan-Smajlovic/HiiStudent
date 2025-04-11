const { DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const Application = sequelize.define(
  "Application",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Students",
        key: "id",
      },
    },
    announcementId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Announcements",
          key: "id",
        },
      },
      coverLetter: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    stauts: {
        type: DataTypes.ENUM,
        defaultValue: "pending", // Default role
        values: ["pending", "accepted", "rejected"],
    },
    appliedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    }
  }
);

module.exports = Application;
