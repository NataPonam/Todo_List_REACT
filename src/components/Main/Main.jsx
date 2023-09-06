import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Main = () => {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem('newlist');
    console.log(saved);
    if (saved) {
      setList(JSON.parse(saved));
    }
  }
  useEffect(() => {
    loadSavedTasks();
  }, []);

  function saveNewTaskInLocal(list) {
    setList(list);
    localStorage.setItem('newlist', JSON.stringify(list));
    console.log(list);
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (task) {
      saveNewTaskInLocal([
        ...list,
        { value: task, id: crypto.randomUUID(), isCompleted: false },
      ]);
      setTask('');
    }
  };

  return (
    <main className='main'>
      <section className='todo'>
        <h1 className='todo__title'>Todo List REACT</h1>
        <p className='todo__subtitle'>with localStorage</p>

        <form className='form'>
          <input
            className='form__input'
            type='text'
            placeholder='Следующее дело...'
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <button
            className='form__button'
            type='submit'
            onClick={handleClick}
          ></button>
        </form>
        <ul className='todo__list'>
          {list.map((task) => (
            <Item
              key={task.id}
              task={task}
              setList={setList}
              list={list}
              saveNewTaskInLocal={saveNewTaskInLocal}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
