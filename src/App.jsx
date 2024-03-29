import React, { useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import "./App.css";

import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";
import Header from "./components/Header.jsx";
import TaskDetails from "./components/TaskDetails.jsx"

const App = () => {
  const [tasks, setTasks] = useState([
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=10'
      );
      setTasks(data);
    }

    fetchTasks();
  }, []);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }];

    setTasks(newTasks);
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId) {
        return {...task, completed: !task.completed}
      }else {
        return task;
      }
    });

    setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);

    setTasks(newTasks);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={
            <div className="container">
              <Header>Minhas Tarefas: </Header>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks tasks={ tasks } handleTaskClick = {handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
            </div>
          }
        />
        <Route path="/:taskTitle" exact element={
            <div className="container">
              <Header>Detalhes da Tarefa: </Header>
              <TaskDetails />
            </div>
          }
        />
      </ Routes>
    </BrowserRouter>
  )
}

export default App;