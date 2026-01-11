import { Check, Pencil, Trash2 } from "lucide-react";

function Completed({ todos, deleteTodo, toggleTodoCompletion }) {
  return (
    <>
      {todos &&
        todos
          .filter((t) => t.completed)
          .map((todo) => (
            <div
              className="w-full rounded-xl bg-white p-6 shadow-md hover:shadow-lg my-1"
              key={todo.key}
              onClick={() => toggleTodoCompletion(todo.key)}
            >
              <div className="cursor-pointer flex gap-3">
                <Check className="bg-black text-white rounded-md" />
                <del className="w-full text-xl font-medium text-gray-400">
                  {todo.title}
                </del>

                <div className="flex gap-3">
                  <button disabled className="cursor-not-allowed">
                    <Pencil className="text-slate-400" />
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

export default Completed;
