function Todo({ todo, onRemoveTodo }) {
  const { id, content } = todo;

  const removeTodo = () => {
    onRemoveTodo(id);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="m-4 mt-8 flex flex-col gap-2 sm:w-4/5 md:w-6/12">
        <div className="flex flex-row justify-between border py-1.5 px-2  border-b-2 border-gray-400 border-y-0 border-x-0  rounded-sm">
          <p className="">{content}</p>
          <p onClick={removeTodo} className=" cursor-pointer text-xl">
            {' '}
            ×{' '}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Todo;
