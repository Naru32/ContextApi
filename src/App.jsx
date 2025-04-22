import { useEffect, useState } from "react"
import { TodoProvider } from "./contexts";
import {v4 as uuidv4} from 'uuid'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
function App() {
  
 const [todos,setTodos] = useState([]);
 const addTodo = (title)=> {
  setTodos((prev)=> [...prev, {id: uuidv4(),...title}]); // we have added new todo to todos with take care of all previous todos also should be saved by updating state callback way 
}
// when user will click on some todo to update this function get called and that todo id and title is passed in params
// then we have to match the id with the existing todos we have stored and where the id will be matched we have to update title field of that particular todo
const updateTodo = (id,title)=>{
  // here prev hold last state value of todos means all the old saved todos
   setTodos((prev)=> prev.map((prevTodo)=> (
    prevTodo.id === id ? title : prevTodo // here if condition matched then new todo added to todos else old(prevTodo) one remains same
   )))
}
const deleteTodo = (id)=>{
  setTodos((prev)=> prev.filter((prevTodo)=> (
    prevTodo.id !== id 
  ))
)
}
// we will get all the previous todos iterate them match the id of each todo with clicked todo if it matches then we have to copy all the properties(id,title,isChecked) of clicked todo and just override isChecked property in negation if false then set true and vice versa
const toggleComplete = (id)=> {
  setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, isCompleted : !prevTodo.isCompleted} : prevTodo))
}

// now we have to work with localstorage so that our todo data remains as it is even app is closed 

useEffect(()=>{
const stored = JSON.parse(localStorage.getItem("todos")) // we have to convert data that we get from local storage string to array because then only we can show on ui
if (stored && stored.length > 0) {
  setTodos(stored);
}
},[])

useEffect(()=> {
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo, deleteTodo,toggleComplete}}>
      <div className="bg-darkblue min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-col flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                          todos.map((val)=> {
                            return(
                              <div key={val.id} className="w-full">
                                <TodoList todo={val}/>
                              </div>
                            ) 
                          })
                        }
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
