'use strict';
module.exports = (sequelize, DataTypes) => {
  const arp = sequelize.define('arp', {
    name: DataTypes.STRING,
    note1: DataTypes.STRING,
    note2: DataTypes.STRING,
    note3: DataTypes.STRING,
    note4: DataTypes.STRING,
    note5: DataTypes.STRING,
    chordId: DataTypes.INTEGER
  }, {});
  arp.associate = function(models) {
    // associations can be defined here
  };
  return arp;
};