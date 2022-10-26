import React from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";

const App: React.FC = () => {
  return (
    <div className="App w-screen h-screen flex flex-col bg-amber-700 items-center">
      <span className="head uppercase text-5xl text-white text-center z-0">Todo :</span>
      <InputFeild />
    </div>
  );
};

export default App;
