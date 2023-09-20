import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

  
export const TodoWrapper = (e) => {
         
    const [todos, setTodos] = useState(e.data);
  // data.forEach((element)=>setTodos(element))
   console.log(e.data,"ed")
    
  const addTodo = (todo) => {
    setTodos([
      ...todos,
       { id: uuidv4, task: todo, completed: false, isEditing:  false ,isimage:true ,resources:true },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>{e.name}</h1>
         
     
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) :e.data.length? (
          <Todo
              key={e.data.id}
              task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        ): <Todo
        key={todo.id}
        task={todo}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      toggleComplete={toggleComplete}
    />
      )}

      <TodoForm addTodo={addTodo} />
    </div>
  );
};
