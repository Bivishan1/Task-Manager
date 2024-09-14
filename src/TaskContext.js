import { createContext, useReducer } from "react";
import { taskReducer, initialState } from "./TaskReducer";

export const TaskContext = createContext();

// this component will wrap all the other components to give them access to this context.
//destructured the props object to get the Children

export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
            {/* now all component has a access to this props. */}
        </TaskContext.Provider>
    )
}

// let's create taskReducer in seperate file and initialState also.