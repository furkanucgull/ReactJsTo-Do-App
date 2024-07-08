import { FaEdit, FaCheck } from 'react-icons/fa';
import { CiCircleRemove } from 'react-icons/ci';
import { useState } from 'react';

function Todo({ todo, onRemoveTodo, onUpdateToDo }) {
  const { id, content } = todo;
  const [editable, setEditAble] = useState(false);
  const [newTodo, setNewToDo] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  };

  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo,
    };
    onUpdateToDo(request);
    setEditAble(false);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="m-4 mt-8 flex flex-col gap-2 sm:w-4/5 md:w-6/12">
        <div className="flex flex-row justify-between border py-1.5 px-2  border-b-2 border-gray-400 border-y-0 border-x-0  rounded-sm">
          <p className=" mr-5 max-w-fit text-wrap overflow-hidden">
            {editable ? (
              <input
                value={newTodo}
                onChange={e => setNewToDo(e.target.value)}
                className="border-b-2 outline-none bg-transparent border-gray-300 max-w-full  text-ellipsis"
                type="text"
                style={{
                  whiteSpace: 'nowrap',
                }}
              />
            ) : (
              content
            )}
          </p>
          <div className="flex flex-row gap-3">
            <p onClick={removeTodo} className=" cursor-pointer text-xl text-red-500 ">
              <CiCircleRemove />
            </p>
            {editable ? (
              <FaCheck onClick={updateTodo} className="cursor-pointer text-xl text-green-500" />
            ) : (
              <FaEdit className="cursor-pointer text-xl" onClick={() => setEditAble(true)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
