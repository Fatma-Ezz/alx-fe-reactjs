import React from "react";
import TodoList from "./components/TodoList";
import "./App.css"; // Keep this if you want to style your app

function App() {
  return (
    <div className="App">
      <h1>My Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
