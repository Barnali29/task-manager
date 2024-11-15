import {createContext, useContext} from 'react';

export const todocontext=createContext({
    todos:[{
        id:1,
        todo:"todo message",
        checked:false,
    }],
    addTodo:(todo)=>{},
    updateTodo:(todo,id)=>{},
    deleteTodo:(id)=>{},
    toggleCheck:(id)=>{},
})

export const useTodo=()=> {return useContext(todocontext);}

export const Todocontextprovider=todocontext.Provider
