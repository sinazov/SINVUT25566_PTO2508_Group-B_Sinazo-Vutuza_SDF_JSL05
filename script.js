// ===============================
// Initial Task Data (fallback)
// ===============================
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Never give up 🏆",
    description: "You're almost there",
    status: "doing",
  },
  {
    id: 4,
    title: "Learn Data Structures 📚",
    description: "Study algorithms and problem solving",
    status: "todo",
  },
  {
    id: 5,
    title: "Build Portfolio 🛠️",
    description: "Create projects to showcase your skills",
    status: "done",
  },
];

// ===============================
// TASK STATE (SOURCE OF TRUTH)
// ===============================
const STORAGE_KEY = "kanbanTasks";

// Load from localStorage or fallback to initialTasks
let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || initialTasks;

// ===============================
// DOM ELEMENTS
// ===============================
const todoColumn = document.getElementById("todo-column");
const doingColumn = document.getElementById("doing-column");
const doneColumn = document.getElementById("done-column");

const modal = document.getElementById("task-modal");
const closeModalBtn = document.getElementById("close-modal-btn");

const titleInput = document.getElementById("task-title");
const descInput = document.getElementById("task-desc");
const statusSelect = document.getElementById("task-status");

const taskForm = document.getElementById("task-form");
const addTaskBtn = document.getElementById("add-task-btn");
// ===============================
// UTILITY FUNCTIONS
// ===============================

/**
 * Saves the current tasks state to localStorage.
 */
function saveTasksToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

/**
 * Clears all existing task cards from the board.
 */
function clearExistingCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.remove());
}

/**
 * Resets the modal form inputs to default/empty values.
 */
function resetModalForm() {
  titleInput.value = "";
  descInput.value = "";
  statusSelect.value = "todo";
}

/**
 * Creates a DOM element representing a task card.
 * @param {Object} task - Task object from tasks array.
 * @returns {HTMLElement} Task card element.
 */
function createTaskCard(task) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = task.title;

  card.addEventListener("click", () => {
    openTaskModal(task);
  });

  return card;
}

// ===============================
// RENDERING
// ===============================

/**
 * Renders all tasks onto their respective columns.
 * Clears existing cards first.
 */
function renderTasks() {
  clearExistingCards();

  tasks.forEach((task) => {
    const card = createTaskCard(task);

    if (task.status === "todo") {
      todoColumn.appendChild(card);
    } else if (task.status === "doing") {
      doingColumn.appendChild(card);
    } else if (task.status === "done") {
      doneColumn.appendChild(card);
    }
  });
}
// ===============================
// MODAL MANAGEMENT
// ===============================

function openTaskModal(task) {
  titleInput.value = task.title;
  descInput.value = task.description;
  statusSelect.value = task.status;

  modal.showModal();
}

function closeModal() {
  modal.close();
  resetModalForm();
}

// ===============================
// EVENT LISTENERS
// ===============================

// Close modal button
closeModalBtn.addEventListener("click", closeModal);

// Add Task button opens empty modal form
addTaskBtn.addEventListener("click", () => {
  resetModalForm();
  modal.showModal();
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value.trim();
  const description = descInput.value.trim();
  const status = statusSelect.value;

  if (!title) {
    alert("Please enter a task title.");
    return;
  }

  const newTask = {
    id: Date.now(), 
    title,
    description,
    status,
  };

  tasks.push(newTask);
  saveTasksToStorage();
  renderTasks();

  modal.close();
  resetModalForm();
});

// ===============================
// INITIALIZATION
// ===============================

/**
 * Initialize app by rendering tasks loaded from localStorage.
 */
function init() {
  renderTasks();
}

document.addEventListener("DOMContentLoaded", init);

