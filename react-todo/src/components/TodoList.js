import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm/AddTodoForm"; // ✅ Import the new form component

const TodoList = () => {
  // ✅ Initial todo state
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
  ]);

  // ✅ Function to add a new todo (passed to AddTodoForm)
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  // ✅ Function to toggle completion
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // ✅ Function to delete a todo
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>

      {/* ✅ Use AddTodoForm */}
      <AddTodoForm onAddTodo={addTodo} />

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
