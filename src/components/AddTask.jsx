import {React, useState} from 'react';

import Button from "./Button.jsx"

import "./AddTask.css"

const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState();

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData("");
    }

    return (
        <div className="add-task-container">
            <input type="text" className="add-task-input" onChange={handleInputChange} value={inputData}/>
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    )
}

export default AddTask;