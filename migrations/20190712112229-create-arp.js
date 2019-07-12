'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('arps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      note1: {
        type: Sequelize.STRING
      },
      note2: {
        type: Sequelize.STRING
      },
      note3: {
        type: Sequelize.STRING
      },
      note4: {
        type: Sequelize.STRING
      },
      note5: {
        type: Sequelize.STRING
      },
      chordId: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('arps');
  }
};