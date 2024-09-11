"use client"

import { Fragment, useState } from "react"
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import FilterTodo from "./components/FilterTodo";
import {Todo} from "./components/types"

export default function Home() {

const [todoList, setTodoList] = useState<Todo[]>([
  {
    id: 1,
    text: "Learn React",
    completed: true,
  },
  {
    id: 2,
    text: "Learn TypeScript",
    completed: false,
  },
  {
    id: 3,
    text: "Learn Node.js",
    completed: false,
  },
  {
    id: 4,
    text: "Learn Express.js",
    completed: false,
  },
]);
const [filter, setFilter] = useState("all");
const [todo, setTodo] = useState("");

// 我原本以为是直接传setstate方法，但这样会导致传的东西很多
const addTodo = (txt: string) => {
  const newTodo = {
    id: Date.now(),
    text: txt,
    completed: false,
  }
  setTodoList([...todoList, newTodo]);
}

const deleteTodo = (id: number) => {
  setTodoList(todoList.filter((todo) => todo.id !== id));
}

const toggleTodo = (id: number) => {
  setTodoList(
    todoList.map((todo) => {
      if (todo.id === id) {
          todo.completed= !todo.completed
      }
      return todo;
    })
  );
};

const getFilteredTodos = () => {
  switch (filter) {
    case "completed":
      return todoList.filter(todo => todo.completed);
    case "uncompleted":
      return todoList.filter(todo => !todo.completed);
      default:
        return todoList
  }
};




  return (
    <Fragment>
      <h1>TodoList</h1>
      <AddTodo addTodo={addTodo}/>
      <TodoList todoList={getFilteredTodos()} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
      <FilterTodo setFilter={setFilter}  />
    </Fragment>
  );
}
