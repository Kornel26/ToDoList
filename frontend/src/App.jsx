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
      const todos = await httpClient.Get('todo');
      setTodos(todos ?? []);
      console.log(todos);
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
      const newTodo = await httpClient.Post('todo', todo);
      fetchTodos();
    } catch (error) {
      console.error(error);
    }
  }

  async function toggleTodo(id, compelted) {
    const todo = todos.find(todo => todo.id === id);
    if (!todo) return;
    todo.isCompleted = compelted;
    try {
      const newTodo = await httpClient.Put('todo', todo);
      fetchTodos();
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteTodo(id) {
    try {
      const todo = {
        id: id,
        title: "",
        isCompleted: false
      }
      await httpClient.Delete('todo', todo);
      fetchTodos();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1>ToDo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}