import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  // states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const [status, setStatus] = useState("all");

  const [filteredTodos, setFilterTodos] = useState([]);
  //Run once  when the app starts

  useEffect(() => {
    getLocalTodos();
  }, []);
  //useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  // Functions

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;

      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilterTodos(todos);
        break;
    }
  };

  // save to local

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") == null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos')) ;
      setTodos(todoLocal) 
    }

  };
  return (
    <div className="App">
      <header>
        <h1>ToDo List </h1>
      </header>

      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
};

export default App;
