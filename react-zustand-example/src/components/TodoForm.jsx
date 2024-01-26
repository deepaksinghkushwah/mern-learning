import React from "react";
import { useState } from "react";
import useTodoStore from "../store/todoStore";
const TodoForm = () => {
  const [title, setTitle] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const handleAddTodo = () => {
    if(title !== ""){
        addTodo(title);
        setTitle("");
    } else {
        alert("You must provide title");
    }
    
  };
  return (
    <div>
     
      <table className="border-2 w-full">
        <tbody>
          <tr>
            <td>
              <label htmlFor="todo">Todo</label>
            </td>
            <td>
              <input
                placeholder="Todo Text"
                value={title}
                type="text"
                className="border-red-500 border-2"
                name="todo"
                id="todo"
                onChange={(e) => setTitle(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <button
                type="button"
                onClick={handleAddTodo}
                className="btn btn-primary"
              >
                Add Todo
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TodoForm;
