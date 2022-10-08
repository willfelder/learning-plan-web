import React, { createContext, useState, useEffect } from "react";
import uuid from "react-uuid";

export const PlanContext = createContext();

const PlanContextProvider = props => {

    const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
    const [tasks, setTasks] = useState(initialState);
    const [edit, setEdit] = useState(null);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    },[tasks])

    const addTask = task => {
        setTasks([...tasks, {id: uuid(), title: task}]);
    };

    const deleteTask = id => {
        setTasks(tasks.filter(items => items.id !== id));
    };

    const findTask = id => {
        const item = tasks.find(item => item.id === id);
        setEdit(item);
    };

    const editTask = (id, task) => {
        const newItem = tasks.map(items => (items.id === id ? {id: id, title: task} : items));
        setTasks(newItem);
        setEdit(null);
    };

    return (
        <PlanContext.Provider value={{
            tasks,
            addTask,
            deleteTask,
            findTask,
            editTask,
            edit
        }}>
            {props.children}
        </PlanContext.Provider>
    )
};

export default PlanContextProvider;