'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Service.belongsTo(models.Branch, { foreignKey: 'id_branch' })

      Service.hasMany(models.Booking, { foreignKey: 'services_id' })
    }
  }
  Service.init({
    id_services: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    services_name: DataTypes.STRING,
    services_image: DataTypes.STRING,
    date: DataTypes.DATE,
    services_time: DataTypes.TIME,
    duration: DataTypes.INTEGER,
    detail: DataTypes.JSON,
    status: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER,
    id_branch: DataTypes.INTEGER,
    branchId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};