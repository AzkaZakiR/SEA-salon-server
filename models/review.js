'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Review.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Review.init({
    review_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    rating: DataTypes.STRING,
    review_text: DataTypes.TEXT,
    reviewer: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};