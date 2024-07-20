import React, { useState, useEffect, useRef, useMemo, useCallback, useReducer, useLayoutEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import { TaskProvider } from './TaskContext';
import taskReducer from './taskReducer';
import useTaskFilter from './useTaskFilter';
import styles from './App.module.css';

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [filter, setFilter] = useState('all');
  const inputRef = useRef(null);
  
  const filteredTasks = useTaskFilter(tasks, filter);
  
  const taskCount = useMemo(() => tasks.length, [tasks]);
  
  const addTask = useCallback((text) => {
    dispatch({ type: 'ADD_TASK', payload: text });
  }, []);
  
  useEffect(() => {
    console.log('Tasks updated:', tasks);
  }, [tasks]);
  
  useLayoutEffect(() => {
    inputRef.current.focus();
  }, []);
  
  return (
    <TaskProvider value={{ tasks, dispatch }}>
      <div className={styles.app}>
        <h1 className={styles.title}>Task Manager</h1>
        <TaskForm addTask={addTask} inputRef={inputRef} />
        <div className={styles.filterButtons}>
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('active')}>Active</button>
          <button onClick={() => setFilter('completed')}>Completed</button>
        </div>
        <TaskList tasks={filteredTasks} />
        <p className={styles.taskCount}>Total tasks: {taskCount}</p>
      </div>
    </TaskProvider>
  );
}

export default App;