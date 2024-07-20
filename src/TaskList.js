import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';
import styles from './TaskList.module.css';

function TaskList({ tasks }) {
  const { dispatch } = useContext(TaskContext);

  return (
    <ul className={styles.taskList}>
      {tasks.map(task => (
        <li key={task.id} className={styles.taskItem}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
            className={styles.checkbox}
          />
          <span className={task.completed ? styles.completed : ''}>{task.text}</span>
          <button 
            onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}
            className={styles.deleteButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
