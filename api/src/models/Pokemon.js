const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'Pokemon',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      hp: {
        type: DataTypes.INTEGER,
        validate: { min: 1 },
        allowNull: false
      },
      attack: {
        type: DataTypes.INTEGER,
        validate: { min: 1 },
        allowNull: false
      },
      defense: {
        type: DataTypes.INTEGER,
        validate: { min: 1 },
        allowNull: false
      },
      specialAttack: {
        type: DataTypes.INTEGER,
        validate: { min: 1 }
      },
      specialDefense: {
        type: DataTypes.INTEGER,
        validate: { min: 1 }
      },
      speed: {
        type: DataTypes.INTEGER,
        validate: { min: 1 }
      },
      height: {
        type: DataTypes.INTEGER,
        validate: { min: 1 }
      },
      weight: {
        type: DataTypes.INTEGER,
        validate: { min: 1 }
      }
    });
};