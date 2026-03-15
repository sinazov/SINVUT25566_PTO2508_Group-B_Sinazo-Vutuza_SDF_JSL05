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

