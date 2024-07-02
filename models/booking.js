'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.User, { foreignKey: 'user_id' })
      Booking.belongsTo(models.Service, { foreignKey: 'services_id' })
    }
  }
  Booking.init({
    booking_id: DataTypes.UUID,
    services_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    booking_date: DataTypes.DATEONLY,
    status: DataTypes.ENUM('booked', 'cancelled', 'success')
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};