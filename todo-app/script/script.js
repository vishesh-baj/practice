console.log("TODO APP");

const inputForm = document.querySelector("#inputForm");
const addTodoButton = document.querySelector("#addTodoButton");
const todoCardContainer = document.querySelector("#todoCardContainer");
const todoInput = document.querySelector("#todoInput");
const todoInputDescription = document.querySelector("#todoInputDescription");

const generateRandomId = () => {
  return Math.random() * 10000;
};

let todosArray = [
  {
    id: generateRandomId(),
    title: "Todo Title",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, cum
            repudiandae quae ducimus beatae officia inventore magni distinctio,
            velit sed hic facere maiores ullam non.`,
  },
];

// Function to render todos
const renderTodos = () => {
  todoCardContainer.innerHTML = todosArray
    .map((todo) => {
      return `
             <div
        class="w-full col-span-1 h-96 px-4 py-8 rounded-xl bg-gray-500 shadow-xl"
      >
        <div class="flex flex-col gap-4 justify-between">
          <h2 class="text-2xl font-semibold">${todo.title}</h2>
          <hr />
          <span class="text-white">
            ${todo.description}
          </span>
          <div class="flex gap-4">
            <button class="complete-todo px-4 py-2 bg-teal-400 rounded-xl outline-none" data-id="${todo.id}">
              Complete
            </button>
            <button class="delete-todo px-4 py-2 bg-red-400 rounded-xl outline-none" data-id="${todo.id}">
              Delete
            </button>
          </div>
        </div>
      </div>
    `;
    })
    .join(""); // Convert the array to a string
};

// Initial rendering
renderTodos();

// Event listener for adding a new todo
addTodoButton.addEventListener("click", (e) => {
  e.preventDefault();
  const newTodo = {
    id: generateRandomId(),
    title: todoInput.value,
    description: todoInputDescription.value,
  };
  todosArray.push(newTodo);
  renderTodos();
  todoInput.value = ""; // Clear input fields
  todoInputDescription.value = "";
});

// Event delegation for handling complete and delete actions
todoCardContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("complete-todo")) {
    const todoId = event.target.getAttribute("data-id");
    // Handle complete action here (you can update the todo status or style)
    console.log(`Completed todo with ID: ${todoId}`);
  } else if (event.target.classList.contains("delete-todo")) {
    const todoId = event.target.getAttribute("data-id");
    // Handle delete action here (remove the todo from the array)
    todosArray = todosArray.filter((todo) => todo.id !== parseFloat(todoId));
    renderTodos(); // Update the UI after deletion
  }
});
