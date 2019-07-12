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
       chordId: 1,
       scaleId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      chordId: 1,
      scaleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 8,
      scaleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 8,
      scaleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 15,
      scaleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 15,
      scaleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 2,
      scaleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 2,
      scaleId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 9,
      scaleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 9,
      scaleId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 16,
      scaleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 16,
      scaleId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 3,
      scaleId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 3,
      scaleId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 10,
      scaleId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 10,
      scaleId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 17,
      scaleId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 17,
      scaleId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 4,
      scaleId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 4,
      scaleId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 11,
      scaleId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 11,
      scaleId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 18,
      scaleId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 18,
      scaleId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 5,
      scaleId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 5,
      scaleId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 12,
      scaleId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 12,
      scaleId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 19,
      scaleId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 19,
      scaleId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 6,
      scaleId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 6,
      scaleId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 13,
      scaleId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 13,
      scaleId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 20,
      scaleId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 20,
      scaleId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 7,
      scaleId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 7,
      scaleId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 14,
      scaleId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 14,
      scaleId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 21,
      scaleId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      chordId: 21,
      scaleId: 14,
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
