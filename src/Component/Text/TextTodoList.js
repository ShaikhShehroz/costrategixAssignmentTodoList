import React ,{useState}from "react";
import "../../App.css";
import  Todo from './Todo';
import TodoForm from './TodoForm';


  function TextTodoList() {
    
    const [todos, setTodos] = useState([]);
    const [list,setList]= useState(JSON.parse(localStorage.getItem('Todos')));
  
  
    const addTodo = text => {
      const newTodos = [...todos, { text }];
          setTodos(newTodos);
          var peristTodoList=JSON.parse(localStorage.getItem('Todos'));
          console.log(peristTodoList,"persis valuesss")
            if(peristTodoList){
              peristTodoList = peristTodoList.concat(text);
              localStorage.setItem('Todos',JSON.stringify(peristTodoList));
              setList(peristTodoList);
            }else{
              setList([text]);
              localStorage.setItem('Todos', JSON.stringify([text]));
            }
  };

  
  
    const removeTodo = index => {
        var peristTodoList=JSON.parse(localStorage.getItem('Todos'));
        peristTodoList.splice(index, 1);
        setList(peristTodoList);
        localStorage.setItem('Todos',JSON.stringify(peristTodoList));
    };
   
    return (
      <div className="app">
        <h2>Text Todo List</h2>
        <div className="todo-list">
          {list&&list.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              removeTodo={removeTodo}
             
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    );
  }
  
  export default TextTodoList;

  
