function Todo() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="border-2 border-gray-300 rounded-lg w-full sm:w-96 lg:w-3/4 xl:w-2/4 px-4 py-12">
        <div className="flex flex-col items-center justify-center">
          <div className="">
            <input
              className="w-full m-2 border-b-2 outline-none bg-transparent border-gray-300 py-1.5 placeholder-pl-3 placeholder-font-mono placeholder-italic placeholder-text-wrap"
              type="text"
              placeholder="Enter ToDo.."
            />
          </div>
          <div className="button-div mb-6 py-4">
            <button className="hover:shadow-[12px_12px_2px_1px_rgba(0, 0, 255, .2)] rounded-lg border-2 bg-slate-500 px-4 py-2 font-serif text-white shadow-md hover:scale-105 hover:bg-blue-700 hover:shadow-yellow-300 mt-3">
              Create
            </button>
          </div>
          <div className="m-4 mt-8 flex flex-col gap-2 sm:w-4/5 md:w-6/12">
            <div className="flex flex-row justify-between border py-1.5 px-2  border-b-2 border-gray-400 border-y-0 border-x-0  rounded-sm">
              <p className=" ">React Eğitimi</p>
              <p className=""> × </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
