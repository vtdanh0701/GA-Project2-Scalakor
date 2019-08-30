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
      name: 'C Minor Arp',
      note1: 'C4/8, Eb4, G4',
      note2: 'C5/8, Eb5, G5',
      note3: 'C6/8, G5, Eb5',
      note4: 'C5/8, G4, Eb4',
      note5: 'C4/h.',
      chordId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
     name: 'D Minor Arp',
     note1: 'D4/8, F4, A4',
     note2: 'D5/8, F5, A5',
     note3: 'D6/8, A5, F5',
     note4: 'D5/8, A4, F4',
     note5: 'D4/h.',
     chordId: 23,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     name: 'E Minor Arp',
     note1: 'E4/8, G4, B4',
     note2: 'E5/8, G5, B5',
     note3: 'E6/8, B5, G5',
     note4: 'E5/8, B4, G4',
     note5: 'E4/h.',
     chordId: 24,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     name: 'F Minor Arp',
     note1: 'F4/8, Ab4, C5',
     note2: 'F5/8, Ab5, C6',
     note3: 'F6/8, C6, Ab5',
     note4: 'F5/8, C5, Ab4',
     note5: 'F4/h.',
     chordId: 25,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     name: 'G Minor Arp',
     note1: 'G4/8, Bb4, D5',
     note2: 'G5/8, Bb5, D6',
     note3: 'G6/8, D6, Bb5',
     note4: 'G5/8, D5, Bb4',
     note5: 'G4/h.',
     chordId: 26,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     name: 'A Minor Arp',
     note1: 'A4/8, C5, E5',
     note2: 'A5/8, C6, E6',
     note3: 'A6/8, E6, C6',
     note4: 'A5/8, E5, C5',
     note5: 'A4/h.',
     chordId: 27,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     name: 'B Minor Arp',
     note1: 'B4/8, D5, F#5',
     note2: 'B5/8, D6, F#6',
     note3: 'B6/8, F#6, D6',
     note4: 'B5/8, F#5, D5',
     note5: 'B4/h.',
     chordId: 28,
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
