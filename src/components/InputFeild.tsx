import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, addTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input_form flex w-11/12 relative items-center m-5"
      onSubmit={(e) => {
        addTodo(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="input w-full rounded-3xl py-6 px-8 text-2xl border-none duration-150 shadow-inner focus:shadow-xl outline-none"
      />
      <button
        className="submit absolute w-14 h-14 m-3 rounded-3xl right-0 border-none bg-amber-500 text-white text-sm duration-150 shadow-xl hover:bg-amber-600 active:scale-75 active:shadow-md "
        type="submit"
      >
        submit
      </button>
    </form>
  );
};

export default InputFeild;
