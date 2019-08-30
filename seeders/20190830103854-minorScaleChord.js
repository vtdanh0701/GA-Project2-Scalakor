'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('scalesChords',[
    {
      chordId: 22,
      scaleId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
     chordId: 23,
     scaleId: 16,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     chordId: 24,
     scaleId: 17,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     chordId: 25,
     scaleId: 18,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     chordId: 26,
     scaleId: 19,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     chordId: 27,
     scaleId: 20,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     chordId: 28,
     scaleId: 21,
     createdAt: new Date(),
     updatedAt: new Date()
    },
   ])
 },


  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('scalesChords', null, {});
  }
};
