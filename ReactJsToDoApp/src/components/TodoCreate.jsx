import { useState } from "react";

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const createTodo = () => {
    if (!newTodo) {
      alert("Enter a valid Todo");
      return;
    }

    const request = {
      id: Math.floor(Math.random() * 9999),
      content: newTodo,
    };
    onCreateTodo(request);
    setNewTodo("");
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <input
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
            className="w-full m-2 border-b-2 outline-none bg-transparent border-gray-300 py-1.5 placeholder-pl-3 placeholder-font-mono placeholder-italic placeholder-text-wrap"
            type="text"
            placeholder="Enter ToDo.."
          />
        </div>
        <div className="button-div mb-6 py-4">
          <button
            onClick={createTodo}
            className="hover:shadow-[12px_12px_2px_1px_rgba(0, 0, 255, .2)] rounded-lg border-2 bg-slate-500 px-4 py-2 font-serif text-white shadow-md hover:scale-105 hover:bg-blue-700 hover:shadow-yellow-300 mt-3"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoCreate;
