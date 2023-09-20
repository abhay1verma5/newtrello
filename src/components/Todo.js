import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import random from './img/random.png';
import MenuIcon from '@mui/icons-material/Menu';
import AttachmentIcon from '@mui/icons-material/Attachment';
import './todo.css'
export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
     const [value,setvalue]=useState('')

   
  return (
    <div className={task.todo}>
      { task.isimage? (task.images.length?  <div>  <img src={task.images} width="100%" height="100px"></img> <p  >{task.para}</p></div>:(<div><progress className='fil' value="20" max="100"/>  <p  >{task.para}</p></div> )):( <p  >{task.para}</p>)}
          
       
          
       
       
         
         <div class="row">
         <div class="column">
         <MenuIcon  className="menuicon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
         </div>
         <div class="column">
         <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
         </div>
         <div class="column">
         <AttachmentIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
          
       
   
         </div>
         <div class="column">
         {task.isprofile?<div className="circle" ><img src={task.images} alt="Circular Image"/></div>:(<div></div>)}  
          
       
   
         </div>
      
       </div>
     
  

     
    </div>
  )
}
