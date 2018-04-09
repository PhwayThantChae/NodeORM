'use strict';
module.exports = (sequelize, DataTypes) => {
  var ToDoItem = sequelize.define('ToDoItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaulValue: false
    } 
  }, {});
  ToDoItem.associate = function(models) {
    ToDoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE'
    })
  };
  return ToDoItem;
};