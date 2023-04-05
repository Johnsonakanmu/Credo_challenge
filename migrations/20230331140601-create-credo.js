"use strict";

const { UUIDV4 } = require("sequelize");
/** @type {import('DataTypes-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("credos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("credos");
  },
};
