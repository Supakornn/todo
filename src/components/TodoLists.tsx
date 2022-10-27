import React from "react";
import { Todo } from "../models/model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoLists: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="flex justify-evenly w-11/12 flex-wrap">
      {todos.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoLists;
