import React, { useState } from 'react';
import './App.css';
import TodoUi from './components/todoUI';
function App() {


  const state = [
    {
      id: 1,
      title: 'Make me coffee'
    },
    {
      id: 2,
      title: 'Organize, discuss and get things done.'
      
    },

    {
      id: 3,
      title: 'Organize everything into different spaces.'
    }
  ];

  const stateCopy = [...state];

  const [task, setTaks] = useState(stateCopy);

  const addTaskHandler = (id, title) => {
    setTaks((prev) => {
      return[...prev, {id: id, title: title}]
    })
  }
  
  return (
    <div className="App">
      <TodoUi addTask={addTaskHandler} createEl={task} />
    </div>
  );
}

export default App;
