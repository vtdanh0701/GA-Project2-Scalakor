'use strict';
module.exports = (sequelize, DataTypes) => {
  const usersChords = sequelize.define('usersChords', {
    userId: DataTypes.INTEGER,
    chordId: DataTypes.INTEGER
  }, {});
  usersChords.associate = function(models) {
    // associations can be defined here
  };
  return usersChords;
};