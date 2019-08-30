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
      name: 'C Natural Minor Scale',
      note: 'C4/w, D4, Eb4, F4, G4, Ab4, B4, C5',
      rel: 1,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
   
   {
     name: 'D Natural Minor Scale',
     note: 'D4/w, E4, F4, G4, A4, Bb4, C5, D5',
     rel: 2,
     createdAt: new Date(),
     updatedAt: new Date() 
   },
  
   {
     name: 'E Natural Minor Scale',
     note: 'E4/w, F#4, G4, A4, B4, C5, D5, E5',
     rel: 3,
     createdAt: new Date(),
     updatedAt: new Date() 
   },
   
   {
     name: 'F Natural Minor Scale',
     note: 'F4/w, G4, Ab4, Bb4, C5, Db5, Eb5, F5',
     rel: 4,
     createdAt: new Date(),
     updatedAt: new Date() 
   },
   
   {
     name: 'G Natural Minor Scale',
     note: 'G4/w, A4, Bb4, C5, D5, Eb5, F5, G5',
     rel: 5,
     createdAt: new Date(),
     updatedAt: new Date() 
   },
   
   {
     name: 'A Natural Minor Scale',
     note: 'A4/w, B4, C5, D5, E5, F5, G5, A5',
     rel: 6,
     createdAt: new Date(),
     updatedAt: new Date() 
   },
   
   {
     name: 'B Natural Minor Scale',
     note: 'B4/w, C#5, D5, E5, F#5, G5, A5, B5',
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
