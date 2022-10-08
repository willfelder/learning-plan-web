import React, { useState, useEffect, useContext} from "react";
import { PlanContext } from "../../context/PlanContext";
import "./platform.css";

const PlanForm = () => {

    const { addTask, editTask, edit } = useContext(PlanContext);

    const [plan, setPlan] = useState("");

    const onChangeHandler = e => {
        setPlan(e.target.value);
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        if(!edit) {
            addTask(plan);
            setPlan("");
        } else {
            editTask(edit.id, plan);
        }
    };

    useEffect(() => {
        if(edit) {
            setPlan(edit.title);
        } else {
            setPlan("");
        }
    },[edit]);

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
                <button type="submit">
                    {edit ? "Edit" : "Add"}
                </button>
            </form>
    )
};

export default PlanForm;