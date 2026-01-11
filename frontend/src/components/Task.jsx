import { Pencil, Square, Trash2 } from "lucide-react";

function Task({
  setEditOpen,
  todos,
  deleteTodo,
  toggleTodoCompletion,
  setEditngTodo,
}) {
  return (
    <>
      {todos &&
        todos
          .filter((todo) => !todo.completed)
          .map((todo) => (
            <div
              className="w-full rounded-xl bg-white p-6 shadow-md hover:shadow-lg my-1"
              key={todo.key}
              onClick={() => toggleTodoCompletion(todo.key)}
            >
              <div className="cursor-pointer flex gap-3">
                <Square className="bg-slate-200 rounded-md" stroke="none" />
                <h1 className="w-full text-xl font-medium text-gray-700">
                  {todo.title}
                </h1>

                <div className="flex gap-3">
                  <button
                    className="hover:bg-blue-100 p-2 rounded-lg hover:text-blue-600 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditngTodo(todo);
                      setEditOpen(true);
                    }}
                  >
                    <Pencil />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteTodo(todo.key);
                    }}
                    className="hover:bg-red-100 p-2 rounded-lg hover:text-red-600 cursor-pointer"
                  >
                    <Trash2 />
                  </button>
                </div>
              </div>
            </div>
          ))}
    </>
  );
}

export default Task;
