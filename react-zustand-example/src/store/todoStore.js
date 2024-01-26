import { create } from "zustand";
import {persist} from 'zustand/middleware';
import { v4 as uuidv4 } from "uuid";
const todoStore =(set, get) => ({
  todos: [],
  addTodo: (title) => {
    const newTodo = {
      title,
      id: uuidv4(),
      markDone: false,
    };
    set((state) => ({
      todos: [...state.todos, newTodo],
    }));
  },
  markTodoDone: (id, checked) => {
    let newTodos;
    if (checked === true) {
      newTodos = get().todos.map((todo) => {
        return todo.id === id ? { ...todo, markDone: true } : {...todo};
      });
    } else {
      newTodos = get().todos.map((todo) => {
        return todo.id === id ? { ...todo, markDone: false } : {...todo};
      });
    }

    set((state) => ({
      todos: newTodos,
    }));
  },
  removeTodo: (id) => {
    const newTodos = get().todos.filter((todo) => todo.id !== id);
    set(state => ({
      todos: newTodos
    }))
  },
});
const useTodoStore = create(persist(todoStore, {name: 'todoStore'}));
export default useTodoStore;
