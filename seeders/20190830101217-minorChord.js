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
   return queryInterface.bulkInsert('chords', [
    {
      root: 'C',
      type: 'min',
      extension: 0,
      note : '(C4 Eb4 G4)/w',
      rel: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      root: 'D',
      type: 'min',
      extension: 0,
      note : '(D4 F4 A4)/w',
      rel: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      root: 'E',
      type: 'min',
      extension: 0,
      note : '(E4 G4 B4)/w',
      rel: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      root: 'F',
      type: 'min',
      extension: 0,
      note : '(F4 Ab4 C5)/w',
      rel: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      root: 'G',
      type: 'min',
      extension: 0,
      note : '(G4 Bb4 D5)/w',
      rel: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      root: 'A',
      type: 'min',
      extension: 0,
      note : '(A4 C5 E5)/w',
      rel: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      root: 'B',
      type: 'min',
      extension: 0,
      note : '(B4 D5 F#5)/w',
      rel: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      root: 'C',
      type: 'min',
      extension: 7,
      note : '(C4 Eb4 G4 Bb4)/w',
      rel: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      root: 'D',
      type: 'min',
      extension: 7,
      note : '(D4 F4 A4 C5)/w',
      rel: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      root: 'E',
      type: 'min',
      extension: 7,
      note : '(E4 G4 B4 D5)/w',
      rel: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      root: 'F',
      type: 'min',
      extension: 7,
      note : '(F4 Ab4 C5 Eb5)/w',
      rel: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      root: 'G',
      type: 'min',
      extension: 7,
      note : '(G4 Bb4 D5 F5)/w',
      rel: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      root: 'A',
      type: 'min',
      extension: 7,
      note : '(A4 C5 E5 G5)/w',
      rel: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      root: 'B',
      type: 'min',
      extension: 7,
      note : '(B4 D5 F#5 A5)/w',
      rel: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      root: 'C',
      type: 'min',
      extension: 9,
      note : '(C4 Eb4 G4 Bb4 D5)/w',
      rel: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      root: 'D',
      type: 'min',
      extension: 9,
      note : '(D4 F4 A4 C5 E5)/w',
      rel: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      root: 'E',
      type: 'min',
      extension: 9,
      note : '(E4 G4 B4 D5 F#5)/w',
      rel: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      root: 'F',
      type: 'min',
      extension: 9,
      note : '(F4 Ab4 C5 Eb5 G5)/w',
      rel: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      root: 'G',
      type: 'min',
      extension: 9,
      note : '(G4 Bb4 D5 F5 A5)/w',
      rel: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      root: 'A',
      type: 'min',
      extension: 9,
      note : '(A4 C5 E5 G5 B5)/w',
      rel: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      root: 'B',
      type: 'min',
      extension: 9,
      note : '(B4 D5 F#5 A5 C#6)/w',
      rel: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ],{})
},

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('chords', null, {})
  }
};
