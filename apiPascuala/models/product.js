'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    code_product: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    photo: {
      type:DataTypes.STRING,
      get(){
       return this.getDataValue('photo') ?  `http://localhost:4500/public/products/${this.getDataValue('photo')}` :'';
      }
     }
  }, {
    sequelize,
    modelName: 'product',
    paranoid:true
  });
  return product;
};