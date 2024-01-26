import React from "react";
import {BsTrash} from "react-icons/bs";
import useTodoStore from "../store/todoStore";
const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const markTodoDone = useTodoStore(state => state.markTodoDone);
  const removeTodo = useTodoStore(state => state.removeTodo);
  return (
    <div className="px-3">
      <h1 className="text-2xl font-bold">Todos</h1>
      {todos?.map((todo) => (
        <div className="flex justify-start items-center" key={todo.id}>
          <div className="w-auto">
            <input type="checkbox" name="markDone" onClick={(e) => markTodoDone(todo.id, e.target.checked)} id="" />
          </div>
          <div className="px-3"><BsTrash title="Remove Todo" className="cursor-pointer" onClick={() => removeTodo(todo.id)}/></div>
          <div className={`px-1 w-full ${todo.markDone === true ? 'line-through text-red-700' : ''}`}>{todo.title}</div>
          
        </div>
      ))}
    </div>
  );
};

export default TodoList;
