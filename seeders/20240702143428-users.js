'use strict';
const bcrypt = require('bcrypt');

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
    const hashedPassword1 = await bcrypt.hash('Admin123', 10);

    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        full_name: 'John Doe',
        email: 'john.doe@example.com',
        phone_number: '1234567890',
        password: hashedPassword1,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        full_name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone_number: '9876543210',
        password: hashedPassword1,
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        full_name: 'Thomas N',
        email: 'thomas.n@compfest.id',
        phone_number: '08123456789',
        password: hashedPassword1,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
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
