'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ticketNumber: {
        type: Sequelize.STRING
      },
      ticketType: {
        type: Sequelize.STRING
      },
      showTime: {
        type: Sequelize.DATE
      },
      seatNumber: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      MovieId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Movies"
        }
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users"
        }
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tickets');
  }
};