"use strict";
const { Model } = require("sequelize");
const { UUIDV4 } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Credo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Credo.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
      },
      firstName: {
        type: DataTypes.STRING,
        default: false,
      },
      lastName: {
        type: DataTypes.STRING,
        default: false,
      },
      email: {
        type: DataTypes.STRING,
        default: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        default: true,
      },
      address: {
        type: DataTypes.STRING,
        default: true,
      },
      city: {
        type: DataTypes.STRING,
        default: true,
      },
      country: {
        type: DataTypes.STRING,
        default: true,
      },
      dob: {
        type: DataTypes.STRING,
        default: true,
      },
      gender: {
        type: DataTypes.STRING,
        default: true,
      },
      nationality: {
        type: DataTypes.STRING,
        default: true,
      },
      accountType: {
        type: DataTypes.STRING,
        default: true,
      },
      pin: {
        type: DataTypes.STRING,
        default: true,
      },
      balance: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      accountNumber: {
        type: DataTypes.STRING,
        default: false,
        max: 10,
      },
    },
    {
      sequelize,
      tableName: "credos",
      modelName: "Credo",
    }
  );
  return Credo;
};
