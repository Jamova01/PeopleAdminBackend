const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSON_TABLE = 'people';

const PersonSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  second_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  first_lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  second_lastname: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  birth_country: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  marital_status: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  document_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  document_number: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },

  create_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false,
  },
};

class Person extends Model {
  static assocciate(models) {
    this.hasMany(models.Task, {
      as: 'task',
      foreignKey: 'person_id',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PERSON_TABLE,
      modelName: 'Person',
      timestamps: false,
    };
  }
}

module.exports = { PERSON_TABLE, PersonSchema, Person };
