"use client";
import React, { useState } from "react";
// two way binding
// we are telling user and also to the react
const page = () => {
  const [task, setTask] = useState("");
  const [desc, setTdesc] = useState("");
  const [wholeTask, setTwholeTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setTwholeTask([...wholeTask, { task, desc }]);
    setTask("");
    setTdesc("");
  };

  const deleteHandler = (idx) => {
    let copyTask = [...wholeTask];
    copyTask.splice(idx, 1);
    setTwholeTask(copyTask);
  };
  let renderTask = <h2 className="text-2xl font-bold">No Task Available</h2>;

  if (wholeTask.length >= 1) {
    renderTask = wholeTask.map((t, idx) => {
      return (
        <li key={idx} className="flex items-center justify-between ">
          <div className="flex justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-bold">{t.task}</h5>
            <h5 className="text-m font-semibold">{t.desc}</h5>
          </div>
          <span
            onClick={() => {
              deleteHandler(idx);
            }}
            class="material-symbols-outlined text-red-500 px-4 py-2 mb-5 cursor-pointer"
          >
            delete
          </span>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="animate__animated animate__rubberBand bg-fuchsia-800 text-white p-4 text-2xl text-center">
        Amanulla's ToDo List
      </h1>
      <form className="flex justify-between mb-20" onSubmit={submitHandler}>
        <input
          className="animate__animated animate__fadeInLeftBig text-xl border-gray-500 border-2 m-4 px-4 py-2 h-12 w-1/5 rounded-md"
          placeholder="Enter Task Here"
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <input
          className="animate__animated animate__fadeInRightBig text-xl border-gray-500 border-2 m-4 px-4 py-2 h-12 w-2/5 rounded-md"
          placeholder="Enter Description Here"
          type="text"
          value={desc}
          onChange={(e) => {
            setTdesc(e.target.value);
          }}
        />
        <button className="animate__animated animate__bounce animate__repeat-3 bg-fuchsia-800 text-white m-4 px-4 py-3 font-bold rounded-xl ">
          Add Task
        </button>
      </form>
      <hr className="bg-fuchsia-800" />
      <div className="p-4 bg-gray-400 text-black">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
