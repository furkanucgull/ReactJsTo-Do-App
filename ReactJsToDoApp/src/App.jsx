import { useState } from 'react';
import './App.css';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = todoId => {
    setTodos([...todos.filter(todo => todo.id !== todoId)]);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="border-2 border-gray-300 rounded-lg w-full sm:w-96 lg:w-3/4 xl:w-2/4 px-4 py-12">
          <TodoCreate onCreateTodo={createTodo} />
          <TodoList todos={todos} onRemoveTodo={removeTodo} />
        </div>
      </div>
    </>
  );
}

export default App;
