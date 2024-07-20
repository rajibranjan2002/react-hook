import { useMemo } from 'react';

function useTaskFilter(tasks, filter) {
  return useMemo(() => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);
}

export default useTaskFilter;