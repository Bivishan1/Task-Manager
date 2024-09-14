import { useContext, useState } from "react";
import { TaskContext } from "../TaskContext";


function TaskList() {
    const { state, dispatch } = useContext(TaskContext);
    const { tasks } = state;
    return (
        <>
            <ul>
                {tasks.length === 0 ? (<p>Empty List</p>) :
                    (
                        tasks.map((task, index) => {
                            return (
                                <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                    <input id="newTask" type="checkbox"
                                        checked={task.completed}
                                        onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: index })} />
                                    <label htmlFor="newTask">
                                        {task.name}</label>
                                    <button onClick={() => dispatch({ type: 'REMOVE_TASK', payload: index })}>Delete</button>
                                </li>
                            )
                        })
                    )}
            </ul>
        </>
    )
}

export default TaskList;