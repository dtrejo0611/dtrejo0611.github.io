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
  2: `<h2>Estación Meteorológica Distribuida con Comunicación Serial en FPGA</h2>
      <h4>Tecnologías: VHDL, FPGA Cyclone IV, Protocolo RS232, Sensores Analógicos.</h4>
      <h3><b>¿Qué se realizo?</b></h3>
      <p>Este proyecto aborda la creación de una estación meteorológica capaz de adquirir, 
         procesar y transmitir datos climáticos entre dos nodos independientes. La arquitectura 
         se divide en una Estación Base (adquisición y transmisión) y una Estación Remota (recepción, visualización y alertas), 
         comunicadas mediante una interfaz serial robusta diseñada desde cero en VHDL.</p>
      <h3><b>¿Cómo se hizo?</b></h3>
      <p>El core del proyecto reside en el diseño de hardware digital utilizando VHDL sobre FPGAs Cyclone IV. 
         La lógica de control se basa en Máquinas de Estados Finitos (FSM) sincronizadas para gestionar tres 
         procesos concurrentes: la interfaz con el convertidor analógico-digital (ADC0804), el barrido y escritura 
         en pantallas LCD 1602, y la comunicación serial asíncrona.</p>
      <p>Para la transmisión de datos, se implementó el protocolo RS232 a nivel de registro (RTL), 
         creando módulos transmisores y receptores que operan a 9600 baudios. El sistema integra conversión 
         de datos binarios a BCD/ASCII en tiempo real y lógica combinacional para el control de actuadores 
         (LEDs RGB y Módulo de Audio DFPlayer) en función de los rangos de temperatura recibidos, demostrando una 
         integración exitosa entre lógica programable y periféricos analógicos/digitales externos.</p>
      <h3><b>Resultados</b></h3>
      <p>El sistema logró una transmisión de datos estable y precisa entre las dos estaciones FPGA, visualizando la 
         temperatura en tiempo real en los displays LCD de ambas placas. Se validó la correcta conversión A/D del sensor 
         LM35 y la respuesta inmediata de los actuadores (cambio de color en LED RGB y reproducción de audio) al superar 
         los umbrales de temperatura establecidos. Aunque inicialmente se planteó una comunicación por radiofrecuencia (RF), 
         se optó por una comunicación cableada RS232 para mitigar problemas de ruido electromagnético, logrando así una 
         fiabilidad del 100% en la integridad de los datos.</p>
      <div class = "project-images1">
        <img src="../img/estacionMeteorologica/esquematicoBase.png" alt="Foto 1" />
        <img src="../img/estacionMeteorologica/esquematicoRemoto.png" alt="Foto 2" />
        <img src="../img/estacionMeteorologica/estacionBase.png" alt="Foto 3" />
        <img src="../img/estacionMeteorologica/estacionRemota.png" alt="Foto 4" />
        <img src="../img/estacionMeteorologica/circuitoEstacionBase.png" alt="Foto 5" />
        <img src="../img/estacionMeteorologica/circuitoEstacionRemota.png" alt="Foto 6" />
      </div>
      <div style="margin: 1.5em 0 0 0; text-align:center;">
        <a href="https://github.com/dtrejo0611/weather-station"
           target="_blank"
           class="btn repo-btn"
           rel="noopener noreferrer">
          Ver en GitHub 🚀
        </a>
      </div>`,
  3: `<h2>Sistema de Inspección Visual y Control de Calidad Automatizado por Visión Artificial</h2>
      <h4>Tecnologías: Python, PyQt5, OpenCV, NumPy, Procesamiento Digital de Imágenes.</h4>
      <h3><b>¿Qué se realizó?</b></h3>
      <p>Este proyecto desarrolla una aplicación de inspección visual con interfaz gráfica completa, 
        diseñada para automatizar procesos de control de calidad mediante técnicas avanzadas de visión 
        por computadora. El sistema permite detectar defectos, verificar colores y validar la presencia 
        de componentes en productos mediante análisis de imágenes en tiempo real o modo simulador, 
        proporcionando resultados PASS/FAIL instantáneos con retroalimentación visual interactiva.</p>
      <h3><b>¿Cómo se hizo?</b></h3>
      <p>El núcleo del sistema se basa en una arquitectura modular construida con PyQt5 para la interfaz 
        gráfica y OpenCV para el procesamiento de imágenes. Se implementó un widget personalizado (MyLabel) 
        que permite la selección interactiva de Regiones de Interés (ROIs) mediante interacción click-and-drag, 
        facilitando la configuración no invasiva de zonas de inspección.</p>
      <p>Para la detección de defectos se diseñaron dos motores de análisis complementarios: un detector de 
        color basado en espacios HSV que extrae rangos cromáticos de ROIs de referencia y cuenta píxeles 
        coincidentes mediante máscaras binarias, y un detector de presencia mediante Template Matching con 
        algoritmo de Non-Maximum Suppression (NMS) de Malisiewicz para eliminar detecciones duplicadas. 
        El sistema integra captura en vivo desde cámaras USB con soporte CAP_DSHOW (Windows) y modo simulador 
        para pruebas con imágenes estáticas, permitiendo guardar configuraciones de ROIs, umbrales y conteos 
        esperados para pruebas repetibles.</p>
      <h3><b>Resultados</b></h3>
      <p>El sistema logró una solución completa de inspección visual con capacidad de análisis dual (color y 
        presencia) en una única interfaz intuitiva. Se validó la detección precisa de colores mediante rangos 
        HSV ajustables y el conteo confiable de componentes mediante template matching optimizado con NMS. 
        La retroalimentación visual en tiempo real con overlays verdes para píxeles coincidentes y rectángulos 
        para templates detectados proporciona un diagnóstico inmediato del estado de inspección. El sistema 
        genera reportes automáticos con porcentajes de coincidencia y decisión binaria PASS/FAIL, demostrando 
        una arquitectura escalable y modular lista para integración en líneas de producción industrial con 
        mínima configuración requerida.</p>
      <div class = "project-images1">
        <img src="../img/visionPython/menuPrincipal.png" alt="Foto 1" />
        <img src="../img/visionPython/menuPresencia.png" alt="Foto 2" />
        <img src="../img/visionPython/menuColor.png" alt="Foto 3" />
        <img src="../img/visionPython/menuTest.png" alt="Foto 4" />
      </div>
      <div style="margin: 1.5em 0 0 0; text-align:center;">
        <a href="https://github.com/dtrejo0611/quality-control"
           target="_blank"
           class="btn repo-btn"
           rel="noopener noreferrer">
          Ver en GitHub 🚀
        </a>
      </div>`,
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
