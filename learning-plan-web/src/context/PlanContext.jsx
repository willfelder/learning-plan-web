import React, { createContext, useState } from "react";
import uuid from "react-uuid";

export const PlanContext = createContext();

const PlanContextProvider = props => {

    const [tasks, setTasks] = useState([
        {id: 1, title: "Learn React"}
    ]);

    const addTask = task => {
        setTasks([...tasks, {id: uuid(), title: task}]);
    };

    const deleteTask = id => {
        setTasks(tasks.filter(items => items.id !== id));
    };

    return (
        <PlanContext.Provider value={{
            tasks,
            addTask,
            deleteTask
        }}>
            {props.children}
        </PlanContext.Provider>
    )
};

export default PlanContextProvider;