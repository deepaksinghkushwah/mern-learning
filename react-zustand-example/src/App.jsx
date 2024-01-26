import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App container w-1/2 mx-auto mt-6 border-2 border-blue-800 rounded-lg p-3">
      <div className="flex">
        <div className="w-[300px]">
          <TodoForm />
        </div>
        <div className="w-full">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
