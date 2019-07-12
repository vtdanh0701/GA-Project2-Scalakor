'use strict';
module.exports = (sequelize, DataTypes) => {
  const scalesChords = sequelize.define('scalesChords', {
    chordId: DataTypes.INTEGER,
    scaleId: DataTypes.INTEGER
  }, {});
  scalesChords.associate = function(models) {
    // associations can be defined here
  };
  return scalesChords;
};