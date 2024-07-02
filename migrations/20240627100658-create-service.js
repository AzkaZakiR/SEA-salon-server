'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Services', {
      id_services: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,

      },
      services_name: {
        type: Sequelize.STRING
      },
      services_image: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      services_time: {
        type: Sequelize.TIME
      },
      duration: {
        type: Sequelize.INTEGER
      },
      detail: {
        type: Sequelize.JSON
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      id_branch: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Branches',
          key: 'branch_id'
        }
      },
      branchId: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Services');
  }
};