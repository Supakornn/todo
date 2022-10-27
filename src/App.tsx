import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import { Todo } from "./models/model";
import TodoLists from "./components/TodoLists";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, done: false }]);
      setTodo("");
    }
    console.log(todos);
  };

  return (
    <div className="App w-screen h-screen flex flex-col bg-amber-700 items-center">
      <span className="head uppercase text-5xl text-white text-center z-0">Todo :</span>
      <InputFeild todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoLists todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
