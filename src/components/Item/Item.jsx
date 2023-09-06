import React from 'react';
import './Item.css';

const Item = ({ task, list, saveNewTaskInLocal }) => {
  const handleCompleted = (taskId) => {
    const newTask = list.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    saveNewTaskInLocal(newTask);
  };

  const handleCrossOut = () => {
    handleCompleted(task.id);
  };

  const handleDelete = () => {
    saveNewTaskInLocal(list.filter((el) => el.id !== task.id));
  };

  return (
    <li className='todo-card'>
      <div
        className={
          task.isCompleted ? 'todo-card__title checked' : 'todo-card__title'
        }
      >
        {task.value}
      </div>
      <div className='todo-card__controls'>
        <button
          onClick={handleCrossOut}
          className='todo-card__button todo-card__button_type_check'
        ></button>
        <button
          onClick={handleDelete}
          className='todo-card__button todo-card__button_type_delete'
        ></button>
      </div>
    </li>
  );
};

export default Item;
