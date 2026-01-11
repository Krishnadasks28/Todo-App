export const getTodos = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

export const addTodo = (title) => {
  const todos = getTodos();

  const newTodo = {
    key: Math.random(),
    id: Date.now(),
    title,
    completed: false,
  };
  todos.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todos));
  return todos;
};

export const removeTodo = (key) => {
  const todos = getTodos();

  const newTodos = todos.filter((t) => t.key != key);
  localStorage.setItem("todos", JSON.stringify(newTodos));
  return newTodos;
};

export const toggleTodo = (key) => {
  const allTodos = getTodos();
  allTodos.filter((t) => t.key == key).map((t) => (t.completed = !t.completed));
  localStorage.setItem("todos", JSON.stringify(allTodos));
  return allTodos;
};

export const editTodo = (key, title) => {
  const allTodos = getTodos();
  allTodos
    .filter((t) => t.key == key)
    .map((t) => {
      t.title = title;
      t.date = Date.now();
    });

  localStorage.setItem("todos", JSON.stringify(allTodos));
  return allTodos;
};
