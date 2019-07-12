'use strict';
module.exports = (sequelize, DataTypes) => {
  const chord = sequelize.define('chord', {
    root: DataTypes.STRING,
    type: DataTypes.STRING,
    extension: DataTypes.INTEGER,
    note: DataTypes.STRING,
    rel: DataTypes.INTEGER
  }, {});
  chord.associate = function(models) {
    // associations can be defined here
    models.chord.belongsToMany(models.scale, {through:"scalesChords"})
    models.chord.belongsToMany(models.user, {through:"usersChords"})

  };
  return chord;
};