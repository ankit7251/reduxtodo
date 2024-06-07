import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from '../store/feature/todoSlice';
import '../components/Todo.css'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Todo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("")

  const car = [
    "https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg?t=st=1717772956~exp=1717776556~hmac=b38ed697fbb8179b43c03d6551bbc52b1217a53f8464fb38d356850001ef49f4&w=826",

    "https://img.freepik.com/free-photo/adorable-watercolor-cat-illustration_23-2151510085.jpg?t=st=1717773185~exp=1717776785~hmac=9b1cced7a9e337d16f3ab869928edbf60165167414493febe534ac818df3eb2a&w=360",

    "https://img.freepik.com/free-photo/vertical-shot-grey-cat-with-blue-eyes-dark_181624-34787.jpg?t=st=1717773253~exp=1717776853~hmac=0435459f494509894421b16d8d595c58faceac3dedb96e92f838e3d060ae0251&w=360",

    "https://img.freepik.com/free-photo/closeup-shot-boxer-dog_181624-35378.jpg?t=st=1717773289~exp=1717776889~hmac=cdebb1df60409715ea472852b80076ee373817e55c11f371fc4b5e0a009ba9b1&w=740",

    "https://img.freepik.com/free-photo/selective-focus-shot-adorable-golden-retriever-outdoors_181624-45466.jpg?t=st=1717773310~exp=1717776910~hmac=043fbc27af8c491ff144ba8be677a8d5a2f5ad5ce941df5e95e923f77d026e9c&w=740",

    "https://img.freepik.com/free-photo/majestic-bengal-tiger-resting-mosscovered-rock-heart-jungle_1268-35056.jpg?t=st=1717773525~exp=1717777125~hmac=a2c60828338f5b7b6e749ea5bfc37a5d545af8fe5ee0c373e40e73c0b6eddffd&w=826",

    "https://img.freepik.com/free-photo/tiger-jungle_188544-8719.jpg?t=st=1717773558~exp=1717777158~hmac=2cc7aa685de2912261d0fba80e1cdd91f89de1deed2daeaa7e33b0741cf703ea&w=826",
  ]

  const handlesubmit = (e) => {
    e.preventDefault();
   if(input === ""){
    toast.error("please enter a value")
   }else{
    dispatch(addTodo(input))

    setInput("")
    toast.success("Successful...")
    var images = Math.floor(Math.random() * car.length)
    var select = car[images]
    console.log(select)
    document.body.style.backgroundImage =  `url(${select})`;
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
        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder='Enter a value'/>
        <button type='submit'>Add</button>
        <ul>
        {todos.map((item , i) => (
          <li key={i}>{item.text} <p onClick={() => handleremoveTodo(item.id)} style={{ cursor: "pointer" , float:"right"}} >❌</p></li>
        ))}

      </ul>
      </form>
      </div>
      
    </>
  )
}

export default Todo