import React,{useState} from 'react';
import './App.css';

function App() {
  const[toDos,setTodos] = useState([])
  const[toDo,setTodo] = useState('')


  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,toDo])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        <div className="todo">
          <div className="left">
            <input  type="checkbox" name="" id="" />
            <p>React tutorial</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;