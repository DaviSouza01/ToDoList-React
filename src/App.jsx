import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";

import "./App.css";

import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    },
    {
      id: '3',
      title: 'Comer',
      completed: true,
    }
  ]);

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
      if(task.id == taskId) {
        return {...task, completed: !task.completed}
      }else {
        return task;
      }
    });

    setTasks(newTasks);
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={ tasks } handleTaskClick = {handleTaskClick}/>
      </div>
    </>
  )
}

export default App;
