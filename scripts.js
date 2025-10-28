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

// Descripciones ampliadas (puedes personalizar)
const projectDescriptions = {
  1: `<h4>Proyecto 1</h4><p>Descripción ampliada de Proyecto 1. Aquí puedes poner todos los detalles, imágenes, links, etc.</p>`,
  2: `<h4>Proyecto 2</h4><p>Descripción ampliada de Proyecto 2. Agrega lo que necesites.</p>`,
  3: `<h4>Proyecto 3</h4><p>Descripción ampliada de Proyecto 3. Aquí puedes poner todos los detalles, imágenes, links, etc.</p>`,
  4: `<h4>Proyecto 4</h4><p>Descripción ampliada de Proyecto 4. Agrega lo que necesites.</p>`
};

document.querySelectorAll('.open-modal-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const id = btn.getAttribute('data-project');
    document.getElementById('modal-project-content').innerHTML = projectDescriptions[id] || 'Proyecto no encontrado';
    document.getElementById('project-modal').style.display = 'flex';
  });
});

// Cerrar modal
document.querySelector('.close-modal').addEventListener('click', function() {
  document.getElementById('project-modal').style.display = 'none';
});
document.getElementById('project-modal').addEventListener('click', function(e) {
  if (e.target === this) this.style.display = 'none';
});