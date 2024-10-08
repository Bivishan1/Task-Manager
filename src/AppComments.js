import logo from './logo.svg';
import './App.css';
import TaskInput from './components/TaskInput';
import { useState } from 'react';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setnewTask] = useState('');

  const handleAddTask = () => {
    //validatioon
    if (newTask.trim() === "") return alert('please add something');
    // The current array of tasks (tasks) is spread into a new array, and the new task (as an object with name and completed properties) is added to the end.
    setTasks([...tasks, { name: newTask, completed: false }]);
    console.log(tasks);
    // resetting the newTask state to an empty string that makes text field an empty.
    setnewTask("");
  }

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      //checking whether current item is matching with current index or not
      return i === index ? { ...task, completed: !task.completed } : task
    });
    setTasks(updatedTasks);//returning newly toggled array tasks list with checking passing index along with matching list item i.e. i
  }

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => {
      return i !== index;//returns a false, and return a new array only by clearing falsy values with the filter method. because if we want to delete element at index 1, and we certainly choose index 1, so as given condition 1!==1 is a false, so with the filter options the falsy values will excluded from the elements and new elements will store to the updateTasks array. it only excluded falsy values and stores except falsy values because we are returning only falsy value condition, which is necessary to delete from the list.
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
