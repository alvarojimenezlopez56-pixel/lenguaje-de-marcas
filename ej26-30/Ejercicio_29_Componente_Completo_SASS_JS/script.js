// Lógica de Tabs
// 1. Selecciona botones y paneles
// 2. Al hacer click en un botón:
//    - Quita active de todos
//    - Pon active al clickeado
//    - Muestra el panel correspondiente (id en data-attribute)
// 1. Seleccionamos todos los botones y todos los paneles
const botones = document.querySelectorAll('.tab-btn');
const paneles = document.querySelectorAll('.tab-pane');

// 2. Añadimos el evento click a cada botón
botones.forEach(boton => {
    boton.addEventListener('click', () => {

        // --- Lógica del Click ---

        // A. Quitar la clase 'active' de todos los botones
        botones.forEach(btn => btn.classList.remove('active'));

        // B. Quitar la clase 'active' de todos los paneles de contenido
        paneles.forEach(panel => panel.classList.remove('active'));

        // C. Poner 'active' al botón que acabamos de pulsar
        boton.classList.add('active');

        // D. Leer el target (id) del botón y activar el panel correspondiente
        const targetId = boton.dataset.target; // Lee 'data-target'
        const panelCorrespondiente = document.getElementById(targetId);

        if (panelCorrespondiente) {
            panelCorrespondiente.classList.add('active');
        }
    });
});
