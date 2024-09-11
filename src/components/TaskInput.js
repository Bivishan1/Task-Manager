function TaskInput(props) {

    return (
        <>
            {/* <input type="text"
                value={props.newTask}
                onChange={(e) => props.setnewTask(e.target.value)}
                placeholder="Enter new task" />
            <button onClick={props.handleAddTask}>Add Task</button> */}

            <form onSubmit={props.handleAddTask}>
                <input type="text"
                    value={props.newTask}
                    onChange={(e) => props.setnewTask(e.target.value)}
                    placeholder="Enter new task" />
                <button onClick={props.handleAddTask}>Add Task</button>
            </form>
        </>
    )
}

export default TaskInput;