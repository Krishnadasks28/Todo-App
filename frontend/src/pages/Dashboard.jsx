import { Plus } from "lucide-react";
import Task from "../components/Task";
import Completed from "../components/Completed";
import Edit from "../components/Edit";
import { useState } from "react";
import {
  addTodo,
  editTodo,
  getTodos,
  removeTodo,
  toggleTodo,
} from "../Services/localStorage";

function Dashboard() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(getTodos());

  const addNewTodo = (todo) => {
    if (!todo.trim()) return;
    const updatedTodos = addTodo(todo);
    setTodos(updatedTodos);
    setNewTodo("");
  };

  const deleteTodo = (key) => {
    const updateTodos = removeTodo(key);
    setTodos(updateTodos);
  };

  const toggleTodoCompletion = (key) => {
    const updatedTodos = toggleTodo(key);
    setTodos(updatedTodos);
  };

  const [editingTodo, setEditingTodo] = useState(null);
  const updateTodo = (key, value) => {
    const updatedTodos = editTodo(key, value);
    setTodos(updatedTodos);
    setEditOpen(false);
  };

  const activeTodos = todos ? todos.filter((t) => !t.completed) : [];

  const [isEditOpen, setEditOpen] = useState(false);
  return (
    <div className="flex justify-center h-screen w-full ">
      <div className="w-full p-8 sm:p-0 md:w-4/5 lg:w-2/5 flex flex-col justify-start relative top-8 sm:top-36 ">
        {/* title area */}
        <div>
          <h1 className="text-3xl sm:text-6xl font-bold">My Todos</h1>
          <h6 className=" text-slate-500 mt-1 text-sm sm:text-xl">
            Keep track of your daily tasks.
          </h6>
        </div>
        {/* input area */}
        <div className=" bg-white w-full p-2 sm:p-7 rounded-md sm:rounded-2xl mt-8 shadow-lg">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addNewTodo(newTodo);
            }}
          >
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="What needs to be done?"
                className="w-full bg-slate-100 border-slate-100 p-1 sm:p-3 rounded-md sm:rounded-xl transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-slate-300"
                onChange={(e) => setNewTodo(e.target.value)}
                value={newTodo}
              />
              <button
                onClick={() => addNewTodo(newTodo)}
                className="shrink-0 cursor-pointer font-semibold hover:font-extrabold focus:outline-none  transition-shadow duration-300 focus:ring-4 focus:ring-blue-300 bg-blue-500 hover:bg-blue-700 text-white px-1 py-1 sm:px-4 rounded-lg"
              >
                <Plus className="h-5 w-5 sm:mr-2 inline" />
                <span className="hidden ml-2 sm:inline">Add</span>
              </button>
            </div>
          </form>
        </div>

        {/* active area */}
        <h1 className="mt-8 mb-3 text-slate-500 font-semibold uppercase">
          Active({activeTodos.length})
        </h1>
        <Task
          todos={todos}
          setEditOpen={setEditOpen}
          deleteTodo={deleteTodo}
          toggleTodoCompletion={toggleTodoCompletion}
          setEditngTodo={setEditingTodo}
        />

        {/* completed task */}
        <h1 className="mt-8 mb-3 text-slate-500 font-semibold uppercase">
          Completed({todos.length - activeTodos.length})
        </h1>

        <Completed
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodoCompletion={toggleTodoCompletion}
        />
      </div>

      {isEditOpen && (
        <Edit
          setEditOpen={setEditOpen}
          updateTodo={updateTodo}
          todo={editingTodo}
        />
      )}
    </div>
  );
}

export default Dashboard;
