'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Branches', [
      {
        branch_id: 1,
        branch_name: 'PIK1',
        location: 'Jln PIK no 123',
        opening_time: '09:00',
        closing_time: '21:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        branch_id: 2,
        branch_name: 'GI',
        location: 'Grand Indonesia no 123',
        opening_time: '09:00',
        closing_time: '21:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        branch_id: 3,
        branch_name: 'MOI ',
        location: 'Mall of Indonesia no 123',
        opening_time: '09:00',
        closing_time: '21:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
