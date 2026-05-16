function activarPestaña(idPanel, boton) {
    const container = document.getElementById('mainContainer');
    const paneles = document.querySelectorAll('.content-panel-overlay');
    const botones = document.querySelectorAll('.nav-tab');
    const arrow = document.getElementById('backArrow');

    // Limpiar clases activas
    botones.forEach(b => b.classList.remove('active'));
    paneles.forEach(p => p.classList.remove('show'));

    // Activar panel seleccionado
    boton.classList.add('active');
    const panel = document.getElementById(idPanel);
    panel.classList.add('show');
    
    // Ocultar el Hero
    container.classList.add('hide-hero');
    
    // Mostrar flecha de regreso y resetear scroll
    arrow.style.display = 'flex'; 
    panel.scrollTop = 0;
}

function regresarAlInicio() {
    const container = document.getElementById('mainContainer');
    const paneles = document.querySelectorAll('.content-panel-overlay');
    const botones = document.querySelectorAll('.nav-tab');
    const arrow = document.getElementById('backArrow');

    // Quitar visibilidad de paneles
    paneles.forEach(p => p.classList.remove('show'));
    botones.forEach(b => b.classList.remove('active'));
    
    // Restaurar el Hero y ocultar flecha
    container.classList.remove('hide-hero');
    arrow.style.display = 'none'; 
}