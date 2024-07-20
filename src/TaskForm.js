import React, { useState } from 'react';
import styles from './TaskForm.module.css';

function TaskForm({ addTask, inputRef }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Add Task</button>
    </form>
  );
}

export default TaskForm;