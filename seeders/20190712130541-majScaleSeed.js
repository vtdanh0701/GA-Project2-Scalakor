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
   return queryInterface.bulkInsert('scales', [
     {
       name: 'Cmaj Scale',
       note: 'C4/w, D4, E4, F4, G4, A4, B4, C5',
       rel: 1,
       createdAt: new Date(),
       updatedAt: new Date() 
     },
     {
      name: 'C Lydian',
      note: 'C4/w, D4, E4, F#4, G4, A4, B4, C5',
      rel: 1,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      name: 'Dmaj Scale',
      note: 'D4/w, E4, F#4, G4, A4, B4, C#5, D5',
      rel: 2,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      name: 'D Lydian',
      note: 'D4/w, E4, F#4, G#4, A4, B4, C#5, D5',
      rel: 2,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      name: 'Emaj Scale',
      note: 'E4/w, F#4, G#4, A4, B4, C#5, D#5, E5',
      rel: 3,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      name: 'E Lydian',
      note: 'E4/w, F#4, G#4, A#4, B4, C#5, D#5, E5',
      rel: 3,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      name: 'Fmaj Scale',
      note: 'F4/w, G4, A4, Bb4, C5, D5, E5, F5',
      rel: 4,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      name: 'F Lydian',
      note: 'F4/w, G4, A4, B4, C5, D5, E5, F5',
      rel: 4,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      name: 'Gmaj Scale',
      note: 'G4/w, A4, B4, C5, D5, E5, F#5, G5',
      rel: 5,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      name: 'G Lydian',
      note: 'G4/w, A4, B4, C#5, D5, E5, F#5, G5',
      rel: 5,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      name: 'Amaj Scale',
      note: 'A4/w, B4, C#5, D5, E5, F#5, G#5, A5',
      rel: 6,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      name: 'A Lydian',
      note: 'A4/w, B4, C#5, D#5, E5, F#5, G#5, A5',
      rel: 6,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      name: 'Bmaj Scale',
      note: 'B4/w, C#5, D#5, E5, F#5, G#5, A#5, B5',
      rel: 7,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      name: 'B Lydian',
      note: 'B4/w, C#5, D#5, F5, F#5, G#5, A#5, B5',
      rel: 7,
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
   return queryInterface.bulkDelete('scales', null, {})
  }
};
