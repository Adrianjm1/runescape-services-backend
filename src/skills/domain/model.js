const { DataTypes, Model } = require('sequelize');
const db = require('../../database/domain');

class Skill extends Model {}
Skill.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  lvl: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  xpRequired: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  difference: {
    type: DataTypes.INTEGER,
    allowNull: false
  },


}, {sequelize: db, modelName: 'skill'});

module.exports = Skill;