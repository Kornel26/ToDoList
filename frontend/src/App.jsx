import { useState } from "react";
import { NewTodoForm } from "./components/NewTodoForm";
import { TodoList } from "./components/TodoList";
import { HttpClient } from "./api/HttpClient";
import { useEffect } from "react";

export default function App() {

  const httpClient = new HttpClient();
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    try {
      const todos = await httpClient.get('todo');
      setTodos(todos ?? []);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  async function addTodo(title) {
    try {
      const todo = {
        title: title,
        isCompleted: false
      }
      const newTodo = await httpClient.post('todo', todo);
      fetchTodos();
    } catch (error) {
      console.error(error);
    }
  }

  function toggleTodo(id, compelted) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, compelted }
        }

        return todo;
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  console.log(todos);

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1>ToDo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}