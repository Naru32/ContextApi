import { useContext } from "react";
import { createContext } from "react";

export const TodoContextApi = createContext({
    todos : [
        {
            id : 1,
            title : "",
            isCompleted : false
        }
    ],
    addTodo : (title)=> {
        // this function will add todo 
    },
    updateTodo : (id,title)=> {
        // this will update todo
    },
    deleteTodo : (id)=>{
        // this will delete todo from local storage
    },
    toggleComplete : (id)=>{
        // this function will work for completed or not isCompleted value will be set by this
    }
}) // we can define default values in context api by {} so app doesnt crash

export const TodoProvider = TodoContextApi.Provider;

export const useTodo = ()=>{
    return useContext(TodoContextApi)
}