'use strict';
module.exports = (sequelize, DataTypes) => {
  const scale = sequelize.define('scale', {
    name: DataTypes.STRING,
    note: DataTypes.STRING,
    rel: DataTypes.INTEGER
  }, {});
  scale.associate = function(models) {
    // associations can be defined here
    models.scale.belongsToMany(models.chord, {through:"scalesChords"})
  };
  return scale;
};