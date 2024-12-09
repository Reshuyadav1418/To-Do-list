import React,{useState} from "react";
import TodoForm from "./TodoForm";
import {v4 as uuidv4} from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
function TodoWrapper() {
  const [todos , setTodos]= useState([]);
  // Add Todo
  const addTodo =(todo)=>{
    setTodos([
      ...todos,{id:uuidv4(), task:todo, completed: false, isEditing:false},

    ]);
  }
//Delete todo
const deleteTodo =(id)=>setTodos(todos.filter((todo)=>todo.id !==id));


//toggle 
const toggleComplete= (id)=>{
  setTodos(
    todos.map((todo)=> todo.id ? { ...todo, completed:!todo.completed}: todo)
  )
}

//edit todo
const editTodo =(id)=>{
  setTodos(
    todos.map((todo)=> todo.id===id? {...todo, isEditing:!todo.isEditing}:todo))
  
}

//edit task todo
const editTask = (task,id)=>{
  setTodos(
    todos.map((todo)=> todo.id ===id? {
      ...todo,isEditing:!todo.isEditing
    }:todo)
  )
}
  console.log("todo",todos);
  return (
    <div className="TodoWrapper">
        <h1>Web Developement Tasks!</h1>
       
      <TodoForm addTodo={addTodo}/>

      {todos.map((todo)=>todo.isEditing ? (
        <EditTodoForm editTodo={editTask} task={todo}/>
      ):(
        <Todo
        key={todo.id}
        task={todo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        toggleComplete={toggleComplete}

        />
      )
      )}
        
    </div>
  );
}

export default TodoWrapper;