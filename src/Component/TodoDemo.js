import React from 'react'
import {Link} from 'react-router-dom';
import ImageTodoList from './Image/ImageTodoList';
import LocationTodoList from './Location/LocationTodoList';
import TextTodoList from './Text/TextTodoList';
import "../App.css"

 function TodoDemo() {
    return (
        <div  className="container_link">
            <button>
                <Link to="/textTodolist" >{TextTodoList}Text Todo</Link>
            </button>
           
            &nbsp;
            <button>
                  <Link to="/imageTodolist" >{ImageTodoList}Image Todo</Link>
            </button>
            &nbsp;
            <button>
                  <Link to="/locationTodolist" >{LocationTodoList}Location Todo</Link>
            </button>
          
          
            
        </div>
    )
}

export default TodoDemo