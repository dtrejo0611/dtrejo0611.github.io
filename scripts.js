// Dark/Light theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
let darkMode = false;

themeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  body.classList.toggle('dark', darkMode);
  themeToggle.textContent = darkMode ? '☀️' : '🌙';
  localStorage.setItem('darkMode', darkMode ? 'true' : 'false');
});

// Mantener preferencia del usuario incluso al recargar
window.addEventListener('DOMContentLoaded', () => {
  darkMode = localStorage.getItem('darkMode') === 'true';
  body.classList.toggle('dark', darkMode);
  themeToggle.textContent = darkMode ? '☀️' : '🌙';
});