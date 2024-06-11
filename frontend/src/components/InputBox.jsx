import React, { useState } from "react";
import axios from "axios";

const InputBox = () => {
  const [task, setTask] = useState("");

  function handleChange(event) {
    setTask(event.target.value);
  }
  function handleClick() {
    axios
      .post("http://localhost:3001/task", { task })
      .then((res) => console.log(res.data));
  }
  return (
    <div className="flex justify-center">
      <input
        value={task}
        onChange={handleChange}
        className="h-10 w-1/2 p-5 flex border border-black"
      ></input>
      <button
        className="border border-black mx-6 px-6"
        type="submit"
        onClick={handleClick}
      >
        Submit to-do
      </button>
    </div>
  );
};

export default InputBox;