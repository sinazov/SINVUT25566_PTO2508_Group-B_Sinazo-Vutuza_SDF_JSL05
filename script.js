// ===============================
// Initial Task Data
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
  }
];

// ===============================
// DOM ELEMENTS
// ===============================
const columns = document.querySelectorAll(".column");

const modal = document.getElementById("task-modal");
const closeModalBtn = document.getElementById("close-modal-btn");

const titleInput = document.getElementById("task-title");
const descInput = document.getElementById("task-desc");
const statusSelect = document.getElementById("task-status");

// ===============================
// CLEAR HARDCODED CARDS
// ===============================

function clearExistingCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.remove());
}

// ===============================
// CREATE TASK CARD
// ===============================

/**
 * @param {Object} task - Task object from initialTasks
 * @returns {HTMLElement} Task card element
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
// CREATE TASK CARD
// ===============================

/**
 * Creates a DOM element representing a task card.
 * @param {Object} task - Task object from initialTasks
 * @returns {HTMLElement} Task card element
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
// RENDER TASKS
// ===============================

/**
 * Inserts tasks into their correct columns
 * depending on their status.
 */
function renderTasks() {
  const todoColumn = columns[0];
  const doingColumn = columns[1];
  const doneColumn = columns[2];

  initialTasks.forEach((task) => {
    const card = createTaskCard(task);

    if (task.status === "todo") {
      todoColumn.appendChild(card);
    }

    if (task.status === "doing") {
      doingColumn.appendChild(card);
    }

    if (task.status === "done") {
      doneColumn.appendChild(card);
    }
  });
}