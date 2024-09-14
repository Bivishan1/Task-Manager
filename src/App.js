import logo from './logo.svg';
import './App.css';
import TaskInput from './components/TaskInput';
import { useState } from 'react';
import TaskList from './components/TaskList';
import { TaskProvider } from './TaskContext';

function App() {
  //removing all logic here since they shifted to context and reducer logic.
  // by wrapping with TaskProvider, now, taks input and task list have access to all the data from the task provider, which is a state and dispatch function to update the state.

  return (
    <TaskProvider>
      <div className="App">
        <h1>Task Manager</h1>
        <TaskInput />
        <TaskList />
      </div>
    </TaskProvider>

  );
}

export default App;
