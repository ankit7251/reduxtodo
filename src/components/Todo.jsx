import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from '../store/feature/todoSlice';
import '../components/Todo.css'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Todo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("")
  const handlesubmit = (e) => {
    e.preventDefault();
   if(input === ""){
    toast.error("please enter a value")
   }else{
    dispatch(addTodo(input))
    setInput("")
    toast.success("Successful...")
   }
  }
  const todos = useSelector((state => state.todos.todo))
  const handleremoveTodo = (id) => {
    dispatch(removeTodo(id))
    toast.warning("This item deleted...")
  }
  return (
    <>
    <div className="di">
      <form onSubmit={handlesubmit}>
        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
        <button type='submit'>Add</button>
        <ul>
        {todos.map((item) => (
          <li >{item.text} <p onClick={() => handleremoveTodo(item.id)} style={{ cursor: "pointer" , float:"right"}} >💩</p></li>
        ))}

        {/* ankit */}
      </ul>
      </form>
      </div>
      
    </>
  )
}

export default Todo