import React from "react";
import { useContext } from "react";
import { PlanContext } from "../../context/PlanContext";
import "./planformlistcontent.css";

const PlanFormListContent = props => {

    const { deleteTask, findTask } = useContext(PlanContext);
        
    return (
        <li className="list">
            <span>{props.task.title}</span>
            <div className="list__buttons">
                <button 
                    className="planformlist__buttons-delete"
                    onClick={() => deleteTask(props.task.id)}
                >
                    Delete
                </button>
                <button 
                    className="planformlist__buttons-edit"
                    onClick={() => findTask(props.task.id)}
                >
                    Edit
                </button>
            </div>
        </li>
    )
};

export default PlanFormListContent;