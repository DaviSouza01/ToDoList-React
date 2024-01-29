import React from 'react';
import { useNavigate  } from "react-router-dom";

import "./TaskDetails.css"

import Button from './Button';
import { useParams } from 'react-router-dom';

const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("/");
    }
    
    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate nihil quod, veniam repudiandae ducimus magnam.</p>
            </div>
        </>
     );
}
 
export default TaskDetails;