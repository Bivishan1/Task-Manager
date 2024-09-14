import logo from './logo.svg';
import './App.css';
import TaskInput from './components/TaskInput';
import { useState } from 'react';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setnewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return alert('please add something');

    setTasks([...tasks, { name: newTask, completed: false }]);
    setnewTask("");
  }

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      return i === index ? { ...task, completed: !task.completed } : task
    });
    setTasks(updatedTasks);
  }

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => {
      return i !== index;
    });

    setTasks(updatedTasks);
  }


  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskInput handleAddTask={handleAddTask}
        newTask={newTask}
        setnewTask={setnewTask}
      />
      <TaskList tasks={tasks}
        handleToggleComplete={handleToggleComplete}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
