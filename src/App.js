import React, { useState } from 'react';
import './App.css';
import TodoUi from './components/todoUI';
import Card from './components/card';
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

  const [task, setTaks] = useState(state);

  const addTaskHandler = (id, title) => {
    setTaks((prev) => {
      return[...prev, {id: id, title: title}]
    })
  }



  
  return (
    <div className="App">
      <TodoUi addTask={addTaskHandler} createEl={task} />
      <Card cardItem={state} />
    </div>
  );
}

export default App;
