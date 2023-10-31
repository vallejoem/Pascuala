'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sale.init({
    code_sale: DataTypes.STRING,
    tax: DataTypes.FLOAT,
    subtotal: DataTypes.FLOAT,
    clients_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sale',
  });
  return sale;
};