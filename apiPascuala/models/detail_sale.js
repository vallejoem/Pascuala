'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  detail_sale.init({
    quantity: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    sales_id: DataTypes.INTEGER,
    products_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detail_sale',
  });
  return detail_sale;
};