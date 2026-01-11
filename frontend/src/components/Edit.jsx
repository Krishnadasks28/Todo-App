import { X } from "lucide-react";
import { useState } from "react";

function Edit({ setEditOpen, updateTodo, todo }) {
  const [title, setTitle] = useState(todo.title);

  const cancelEdit = () => {
    setTitle("");
    setEditOpen(false);
  };
  return (
    <div className="fixed inset-0 z-50 bg-black/40 items-center flex justify-center">
      <div className="bg-white p-8 rounded-xl w-full md:w-5/7 lg:w-2/7">
        <div className="flex w-full justify-between">
          <div>
            <h1 className="font-semibold text-xl">Edit Todo</h1>
            <p className="mt-1 text-slate-600">
              Make changes to your todo item below.
            </p>
          </div>
          <X
            onClick={() => cancelEdit()}
            className="cursor-pointer hover:bg-slate-200 p-0.5"
          />
        </div>

        <div className="mt-5">
          <h1 className="text-lg">Todo</h1>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="w-full bg-slate-100 border-slate-100 p-3 rounded-xl transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-slate-300"
          />

          <div className="flex justify-end gap-2 mt-8">
            <button
              onClick={() => cancelEdit()}
              className="py-2 px-5 bg-white border-slate-400 border hover:bg-slate-200 cursor-pointer rounded-xl"
            >
              Cancel
            </button>
            <button
              onClick={() => updateTodo(todo.key, title)}
              className="py-2 px-4 bg-black text-white font-medium hover:bg-slate-700 cursor-pointer rounded-xl"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
