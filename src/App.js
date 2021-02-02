import React from 'react';
import './App.css';
import ImageTodoList from './Component/Image/ImageTodoList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TextTodoList from './Component/Text/TextTodoList';
import TodoDemo from './Component/TodoDemo';
import LocationTodoList from './Component/Location/LocationTodoList';


function App() {

  return (
    <div className="App">
      <h1>Todo List Application</h1>
      <Router>
      <Switch>
          <Route exact path="/" component={TodoDemo} />
          <Route path="/textTodolist"  component={TextTodoList} />
          <Route path="/imageTodolist" component={ImageTodoList} />
          <Route path="/locationTodolist" component={LocationTodoList} />
          
        </Switch>
      </Router>
    </div>
  );
}




export default App;
