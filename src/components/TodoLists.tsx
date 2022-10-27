import React from "react";
import { Todo } from "../models/model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<string>>;
}

const TodoLists: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="flex justify-evenly w-11/12 flex-wrap">
      {todos.map((todo) => (
        <li>{todo.todo}</li>
      ))}
    </div>
  );
};

export default TodoLists;
