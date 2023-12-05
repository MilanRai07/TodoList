import React, { useEffect, useState } from "react";
import './Todo.css';
import EditBtn from "./EditBtn";
import { ReactComponent as Empty } from "./assets/pencil.svg";
const Todo = () => {
  const [text, setText] = useState();        //for input that is typing 
  const [list, setList] = useState([]);      //array for storing input
  const [indexEdit, setIndexEdit] = useState();     // to get current id 
  const [editbtn, setEditbtn] = useState(false);    // to show or hide editcancel button 
  const [empty,setEmpty]=useState();     //to let know the array are empty 


  useEffect(()=>{           //useEffect hook to show svg image if empty
     if(list.length===0){
      setEmpty(true);
     }else{
      setEmpty(false);
     }
  },[list])
  const handleChange = (event) => {    
    setText(event.target.value);
  }

  const add = () => {                        //function for adding the input in array
    let getDate = new Date();
    let month = getDate.getMonth();
    let day = getDate.getDate();
    let timeof = getDate.toLocaleTimeString();
    let Id = `${month + 1}/${day} ${timeof}`;

    if (!text) {

    } else {
      setList((oldlist) => {
        return [...oldlist, { id: Id, content: text }]
      })
    }

    setText("");

  }

  const del = (index) => {                       //function for delete items from array
    const newItems = list.filter((ele) => {
      return ele.id !== index;
    })
    setList(newItems);
  }

  const edit = (index) => {                          //function allows to re type already saved text
    const showItem = list.find((ele) => {
      return ele.id === index;
    })
    setIndexEdit(showItem.id);
    setText(showItem.content);
    setEditbtn(true);
  }

  const edited = () => {                 //function matches the id and changes is done only on the selected id
    const updateItem = list.map((ele) => {
      if (ele.id === indexEdit) {
        return {
          ...ele, content: text
        }
      }
      return ele;
    })
    setList(updateItem);
    setEditbtn(false);
    setText("");
  }
  const cancel = () => {             //function to cancel the changes
    setEditbtn(false);
  }

  return (
    <>
      <div className="container">
        <div className="container-todo">
          <span>
            <h2 className="todo-head">Todo List</h2>
          </span>
          <div className="todo-input">
            <input className="todo-inputbox"
              name="todo"
              value={text}
              onChange={handleChange}
            ></input>
             {editbtn ?                    /*buttons shown according to the boolean */
              <EditBtn
                editfunc={edited}
                cancelfunc={cancel}
              />
              :
              <button className="todo-inputbutton" onClick={add}>Add</button>
            }
          </div>
          <div className="listcontainer">
            
            { empty?                        /*show svg image if empty */
             <Empty className="pencil"/>:                    
              list.map((ele, ind) => {           /* array mapping */
                return (  
                  <div key={ind} className="list">
                    <p>{ele.content}</p>
                    <div className="list-event">
                      <button className="edit-buton" onClick={() => edit(ele.id)}>Edit</button>
                      <button className="del-buton" onClick={() => del(ele.id)}>Delete</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )

}
export default Todo;