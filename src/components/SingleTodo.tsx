import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../models/model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import TodoLists from "./TodoLists";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo)));
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="flex rounded-md p-6 mt-4 bg-slate-400 w-4/12"
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="flex-1 p-1 border-none text-2xl focus:outline-none"
        />
      ) : todo.done ? (
        <span className="flex-1 p-1 border-none text-2xl focus:outline-none">{todo.todo}</span>
      ) : (
        <span className="flex-1 p-1 border-none text-2xl focus:outline-none">{todo.todo}</span>
      )}
      <div className="flex">
        <span className="ml-3 text-3xl cursor-pointer">
          <AiFillEdit
            onClick={() => {
              if (!edit && !todo.done) {
                setEdit(!edit);
              }
            }}
          />
        </span>
        <span className="ml-3 text-3xl cursor-pointer">
          <AiFillDelete onClick={() => handleDelete(todo.id)} />
        </span>
        <span className="ml-3 text-3xl cursor-pointer" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
