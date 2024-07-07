const { Model, DataTypes, Sequelize } = require('sequelize');
const { PERSON_TABLE } = require('./person.model');

const TASK_TABLE = 'tasks';

const TaskSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },

  deadline: {
    allowNull: false,
    type: DataTypes.DATE,
  },

  createdAt: {
    field: 'created_at',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },

  personId: {
    field: 'person_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PERSON_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Task extends Model {
  static assocciate(models) {
    this.belongsTo(models.Person, {
      as: 'person',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TASK_TABLE,
      modelName: 'Task',
      timestamps: false,
    };
  }
}

module.exports = { TASK_TABLE, TaskSchema, Task };
