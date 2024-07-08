import Todo from './Todo';

function TodoList({ todos, onRemoveTodo, onUpdateToDo }) {
  return (
    <div>
      <div>
        {todos &&
          todos.map(todo => <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateToDo={onUpdateToDo} />)}
      </div>
    </div>
  );
}

export default TodoList;
