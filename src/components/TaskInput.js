// we're not going to use reducer here bcz this is local to this component.
//we should not share it with any other component, so other components don't need to know about it.
//that's why wer are going to use useState[]
// we don't have to use useReducer for all scenarios, we can also use useState depends on the scenario like this.
import { useState, useContext } from "react";
import { TaskContext } from "../TaskContext";

function TaskInput() {
    const [newTask, setnewTask] = useState('');
    //update and adding new task , we use dispatch
    //dispatch function from the context, so we are just using destructuring object and using and retrieving only dispatch function.
    const { dispatch } = useContext(TaskContext);

    //event handler to handle the event.
    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTask.trim().length !== 0) {
            dispatch({ type: 'ADD_TASK', payload: newTask });
            setnewTask('');
        }
        else {
            alert("please add sometask");
        }
    }

    return (
        <>
            {/* <input type="text"
                value={props.newTask}
                onChange={(e) => props.setnewTask(e.target.value)}
                placeholder="Enter new task" />
            <button onClick={props.handleAddTask}>Add Task</button> */}

            <form onSubmit={handleAddTask}>
                <input type="text"
                    value={newTask}
                    onChange={(e) => setnewTask(e.target.value)}
                    placeholder="Enter new task" />
                <button onClick={handleAddTask}>Add Task</button>
            </form>
        </>
    )
}

export default TaskInput;