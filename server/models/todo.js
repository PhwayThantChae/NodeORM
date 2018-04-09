'use strict';
module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Todo.associate = (models) => {
    Todo.hasMany(models.ToDoItem, {
      foreignKey: 'todoId',
      as: 'todoItems'
    })
  };
  return Todo;
};