import React, { useContext } from "react";
import "./planformlist.css";
import { PlanContext } from "../../context/PlanContext";
import PlanFormListContent from "../planformlistcontent/PlanFormListContent";

const PlanFormList = () => {

    const { tasks } = useContext(PlanContext);
    
    return (
        <section className="planformlist">
            <ul>
                {tasks.map(items => {
                    return <PlanFormListContent key={items.id} task={items} />
                })}
            </ul>
        </section>
    )
};

export default PlanFormList;