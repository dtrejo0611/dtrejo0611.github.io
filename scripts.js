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
  1: `<h2>Sistema de Clasificación y Control de Calidad Automatizado por Visión Artificial </h2>
      <h4>Tecnologías: MATLAB, Arduino, PDI, Visión por Computadora.</h4>
      <h3><b>¿Qué se realizo?</b></h3>
      <p>Se desarrollo un sistema mecatrónico en matlab con integracion de hardware arduino integral que combina software de visión 
         artificial con hardware de control para la inspección automatizada de productos. El objetivo principal fue crear un entorno robusto para separar objetos 
         en buen estado de objetos en mal estado basándose en su forma, integridad y color.</p>
      <h3><b>¿Cómo se hizo?</b></h3>
      <p>El sistema se desarrolló en MATLAB implementando un pipeline de visión artificial dentro de un entorno de iluminación controlada 
         para asegurar una segmentación robusta. La lógica de reconocimiento combina el espacio de color HSV para la clasificación cromática 
         y los Momentos Invariantes de Hu para identificar la geometría del objeto independientemente de su rotación o escala. Para el control 
         de calidad, se aplicó un algoritmo de detección de bordes (Canny) que genera una "firma" del contorno, cuya correlación estadística 
         con modelos ideales permite detectar defectos estructurales con alta precisión.</p>
      <p>La automatización del proceso se logró integrando comunicación serial con Arduino para accionar los mecanismos de separación física 
         de los productos según su estado ("Bueno" o "Malo"). Adicionalmente, el software gestiona la trazabilidad industrial exportando 
         automáticamente métricas de confiabilidad, lotes y tiempos de producción a una base de datos en Excel en tiempo real.</p>
      <h3><b>Resultados</b></h3>
      <p>El sistema validó su funcionalidad mediante pruebas exitosas en las que clasificó correctamente objetos geométricos, 
        discriminando entre piezas en "Buen estado" y defectuosas (rotas) basándose en su integridad estructural y color. 
        La solución demostró robustez ante cambios de orientación gracias a la combinación de momentos invariantes y firmas, 
        visualizando los resultados en una interfaz gráfica en tiempo real y generando automáticamente reportes de trazabilidad en 
        Excel con datos de lotes, fechas y porcentajes de confiabilidad.</p>
      <div class = "project-images1">
        <img src="../img/visionMatlab/entorno.png" alt="Foto 1" />
        <img src="../img/visionMatlab/entorno1.png" alt="Foto 2" />
        <img src="../img/visionMatlab/resultadoBueno.png" alt="Foto 3" />
        <img src="../img/visionMatlab/resultadoMalo.png" alt="Foto 4" />
        <img src="../img/visionMatlab/excel.png" alt="Foto 5" class="wide" />
      </div>
      <div style="margin: 1.5em 0 0 0; text-align:center;">
        <a href="https://github.com/dtrejo0611/classification-system"
           target="_blank"
           class="btn repo-btn"
           rel="noopener noreferrer">
          Ver en GitHub 🚀
        </a>
      </div>`,
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