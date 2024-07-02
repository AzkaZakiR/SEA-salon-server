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
    await queryInterface.bulkInsert('Services', [
      {
        id_services: 1,
        services_name: 'Cut Hair',
        services_image: 'https://img.freepik.com/premium-photo/man-getting-his-hair-cut-barbar_1124848-27263.jpg',
        date: '2024-07-04',
        services_time: '10:00',
        duration: 60,
        id_branch: 1,
        price: 100000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_services: 2,
        services_name: 'Shaving ',
        services_image: 'https://highendbarbershop.com/wp-content/uploads/2018/09/COVER-924x597.jpg',

        date: '2024-07-05',
        services_time: '11:00',
        duration: 60,
        id_branch: 1,
        price: 80000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_services: 3,
        services_name: 'Styling',
        services_image: 'https://www.menshairstylestoday.com/wp-content/uploads/2023/04/Barbershop-Haircuts.jpg',

        date: '2024-07-04',
        services_time: '10:00',
        duration: 60,
        id_branch: 1,
        price: 90000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_services: 15,
        services_name: 'Styling',
        services_image: 'https://www.menshairstylestoday.com/wp-content/uploads/2023/04/Barbershop-Haircuts.jpg',

        date: '2024-07-04',
        services_time: '10:00',
        duration: 60,
        id_branch: 1,
        price: 90000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_services: 4,
        services_name: 'Pedicure',
        services_image: 'https://img.freepik.com/premium-photo/young-woman-getting-professional-pedicure-beauty-salon-closeup_152904-645.jpg?w=1380',

        date: '2024-07-04',
        services_time: '11:00',
        duration: 60,
        id_branch: 1,
        price: 110000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_services: 5,
        services_name: 'Manicure',
        services_image: 'https://nypost.com/wp-content/uploads/sites/2/2023/11/NYPICHPDPICT000071635445.jpg',
        date: '2024-07-04',
        services_time: '16:00',
        duration: 60,
        id_branch: 1,
        price: 150000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_services: 6,
        services_name: 'Facial cleaning',
        services_image: 'https://jadoreinstytut.com/wp-content/uploads/2020/12/Na-czym-polega-oczyszczanie-twarzy-u-kosmetyczki2.jpg',
        date: '2024-07-04',
        services_time: '16:00',
        duration: 60,
        id_branch: 1,
        price: 200000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_services: 7,
        services_name: 'Regular cut',
        services_image: 'https://img.freepik.com/premium-photo/man-getting-his-hair-cut-barbar_1124848-27263.jpg',

        date: '2024-07-04',
        services_time: '11:00',
        duration: 60,
        id_branch: 2,
        price: 100000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_services: 8,
        services_name: 'Styling',
        services_image: 'https://www.menshairstylestoday.com/wp-content/uploads/2023/04/Barbershop-Haircuts.jpg',

        date: '2024-07-04',
        services_time: '16:00',
        duration: 60,
        id_branch: 2,
        price: 110000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_services: 9,
        services_name: 'Pedicure',
        services_image: 'https://img.freepik.com/premium-photo/young-woman-getting-professional-pedicure-beauty-salon-closeup_152904-645.jpg?w=1380',
        date: '2024-07-04',
        services_time: '14:00',
        duration: 60,
        id_branch: 3,
        price: 150000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_services: 11,
        services_name: 'Manicure',
        services_image: 'https://nypost.com/wp-content/uploads/sites/2/2023/11/NYPICHPDPICT000071635445.jpg',

        date: '2024-07-04',
        services_time: '14:00',
        duration: 60,
        id_branch: 3,
        price: 150000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_services: 10,
        services_name: 'regular cut',
        date: '2024-07-04',
        services_time: '12:00',
        duration: 60,
        id_branch: 3,
        price: 100000,
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
