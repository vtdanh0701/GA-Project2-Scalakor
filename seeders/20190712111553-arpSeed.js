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
   return queryInterface.bulkInsert('arps',[
     {
       name: 'C maj Arp',
       note1: 'C4/8, E4, G4',
       note2: 'C5/8, E5, G5',
       note3: 'C6/8, G5, E5',
       note4: 'C5/8, G4, E4',
       note5: 'C4/h.',
       chordId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: 'D maj Arp',
      note1: 'D4/8, F#4, A4',
      note2: 'D5/8, F#5, A5',
      note3: 'D6/8, A5, F#5',
      note4: 'D5/8, A4, F#4',
      note5: 'D4/h.',
      chordId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'E maj Arp',
      note1: 'E4/8, G#4, B4',
      note2: 'E5/8, G#5, B5',
      note3: 'E6/8, B5, G#5',
      note4: 'E5/8, B4, G#4',
      note5: 'E4/h.',
      chordId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'F maj Arp',
      note1: 'F4/8, A4, C5',
      note2: 'F5/8, A5, C6',
      note3: 'F6/8, C6, A5',
      note4: 'F5/8, C5, A4',
      note5: 'F4/h.',
      chordId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'G maj Arp',
      note1: 'G4/8, B4, D5',
      note2: 'G5/8, B5, D6',
      note3: 'G6/8, D6, B5',
      note4: 'G5/8, D5, B4',
      note5: 'G4/h.',
      chordId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'A maj Arp',
      note1: 'A4/8, C#5, E5',
      note2: 'A5/8, C#6, E6',
      note3: 'A6/8, E6, C#6',
      note4: 'A5/8, E5, C#5',
      note5: 'A4/h.',
      chordId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'B maj Arp',
      note1: 'B4/8, D#5, F#5',
      note2: 'B5/8, D#6, F#6',
      note3: 'B6/8, F#6, D#6',
      note4: 'B5/8, F#5, D#5',
      note5: 'B4/h.',
      chordId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('arps', null, {})
  }
};
