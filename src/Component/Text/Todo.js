import React from "react";
import "../../App.css";

function Todo({ todo, index,  removeTodo ,searchTodo,remove}) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo}
      <div>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    
    </div>
  );
}

export default Todo;
