import { useState } from "react";
import { NewTodoForm } from "./NewTodoForm";

export default function App() {

  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: Math.floor(Math.random() * 1_000_000), title, compelted: false
        }
      ]
    })
  }

  function toggleTodo(id, competed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, competed }
        }
      })
    })
  }

  function deleteTodo(id) {

  }

  console.log(todos);

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1>ToDo List</h1>

    </>
  );
}