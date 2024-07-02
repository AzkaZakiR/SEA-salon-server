'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Branch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Branch.hasMany(models.Service, { foreignKey: 'id_branch' })
    }
  }
  Branch.init({
    branch_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    location: DataTypes.INTEGER,
    branch_name: DataTypes.STRING,
    opening_time: DataTypes.TIME,
    closing_time: DataTypes.TIME,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Branch',
  });
  return Branch;
};