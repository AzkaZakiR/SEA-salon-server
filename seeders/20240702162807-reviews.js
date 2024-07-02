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
    await queryInterface.bulkInsert('Reviews', [
      {
        user_id: 1,
        rating: '4/5',
        review_text: 'Dengan harga yang mahal servicesnya sangat memuaskan hati dan badan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        rating: '5',
        review_text: 'Excellent service, highly recommended!',
        reviewer: JSON.stringify({ name: 'John Doe', email: 'john.doe@example.com' }),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        rating: '4',
        review_text: 'Good experience overall.',
        reviewer: JSON.stringify({ name: 'Jane Smith', email: 'jane.smith@example.com' }),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        rating: '3',
        review_text: 'Could be better.',
        reviewer: JSON.stringify({ name: 'Alex Johnson', email: 'alex.johnson@example.com' }),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        rating: '4',
        review_text: 'Satisfied with the product.',
        reviewer: JSON.stringify({ name: 'Mary Brown', email: 'mary.brown@example.com' }),
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
