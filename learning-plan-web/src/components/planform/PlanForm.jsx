import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { PlanContext } from "../../context/PlanContext";
import "./platform.css";

const PlanForm = () => {

    const { addTask } = useContext(PlanContext);

    const [plan, setPlan] = useState("");

    const onChangeHandler = e => {
        setPlan(e.target.value);
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        addTask(plan);
    };

    return (
            <form 
                className="form"
                onSubmit={onSubmitHandler}
            >
                <input 
                    type="text" 
                    placeholder="Type what you want to learn"
                    value={plan}
                    onChange={onChangeHandler}
                    required
                />
                <br />
                <button type="submit">Add</button>
            </form>
    )
};

export default PlanForm;