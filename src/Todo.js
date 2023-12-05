import React from "react";
import './Todo.css';
const Todo=()=>{
return(
  <>
  <div className="container">
       <div className="container-todo">
        <span>
          <h2 className="todo-head">Todo List</h2>
          </span>  
          <div className="todo-input">
            <input className="todo-inputbox" ></input>
            <button className="todo-inputbutton">Add</button>
          </div>  
          <div className="listcontainer">
             <div className="list">
                <p>Buy some lemons and apples</p>
                 <div className="list-event">
                  <button className="edit-buton">Edit</button>
                  <button className="del-buton">Delete</button> 
                  </div> 
             </div>
          </div> 
       </div>
  </div>
  </>
)

}
export default Todo;