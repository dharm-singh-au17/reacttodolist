import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  //Events

  const deleteEventHandler = () => {
    setTodos(todos.filter((ele) => ele.id !== todo.id));
  };

  const completeEventHandler = () =>{
      setTodos(todos.map((item) => {
          if(item.id === todo.id){
              return{
                  ...item,completed:!item.completed
              }

          }
          return item;
      })
      )

    }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>

      <button onClick={completeEventHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteEventHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
