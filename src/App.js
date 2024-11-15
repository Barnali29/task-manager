
import './App.css';
import { useEffect, useState } from 'react';
import { Todocontextprovider } from './Context';
import Todoform from './Component/Todoform';
import Todoitem from './Component/Todoitem';

function App() {
  const[todos,Settodos]=useState([])

const addTodo=(todo)=>{
Settodos((prev)=>[{id:Date.now(),...todo},...prev]);
}

const updateTodo=(todo,id)=>{
  Settodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id?todo:prevtodo)))
}
const deleteTodo=(id)=>{
  Settodos((prev)=>prev.filter((prevtodo)=> prevtodo.id!==id))
}

const toggleCheck=(id)=>{
  Settodos((prev)=>prev.map((prevtodo)=>prevtodo.id===id?{...prevtodo,checked:!prevtodo.checked}:prevtodo))
}

useEffect(()=>{
const todos=JSON.parse(localStorage.getItem('todos'))
if(todos && todos.length>0) {Settodos(todos)}
},[])

useEffect(()=>{
  localStorage.setItem('todos',JSON.stringify(todos))
},[todos])

  return (
  <Todocontextprovider value={{todos,addTodo, updateTodo, deleteTodo, toggleCheck}}>
  <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Tasks</h1>
                   
                    <div className="mb-4"> 
                        <Todoform />
                    </div>
                   { todos.map((todo)=>(console.log(todo)))}
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <Todoitem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
  </Todocontextprovider>
  
  );
}

export default App;
