import React from "react";

import Task from "./Task.jsx";

const Tasks = ({ tasks, handleTaskClick }) => {
    return (
        <>
            {
                tasks.map((task) => (
                    <Task task={task} handleTaskClick = {handleTaskClick}/>
                ))
            }
        </>
    );
}

export default Tasks;