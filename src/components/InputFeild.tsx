import React from "react";

const InputFeild = () => {
  return (
    <form className="input_form flex w-11/12 relative items-center m-5">
      <input
        type="input"
        placeholder="Enter a task"
        className="input w-full rounded-3xl py-6 px-8 text-2xl border-none duration-150 shadow-inner focus:shadow-md outline-none"
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
