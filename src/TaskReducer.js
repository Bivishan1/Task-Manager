export const initialState = {
    tasks: []
}

export const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return { //return an object that contain all the task and state
                ...state,//storing all state tasks
                tasks: [...state.tasks, { name: action.payload, completed: false }] //action has a two attribute one for .type to get the type and another is .payload which helps to get the text of new task. and completed flag is false initially.
            }
        case 'TOGGLE_TASK':
            return {
                ...state,//returning an object with current state elements. and updated tasks with tasks key.
                tasks: state.tasks.map((task, index) => {
                    //task which we want to flag as toggle and if true, then returning an object with task and toggle state. otherwise just return the task without modifying anything.
                    return index === action.payload ? { ...task, completed: !task.completed } : task;
                })
            }
        case 'REMOVE_TASK':
            //filter method to filter or create a new array without the element are removing.
            return {
                ...state,
                tasks: state.tasks.filter((_, i) => {
                    return i !== action.payload;
                })

            }
        default:
            return state;

    }
}