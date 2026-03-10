// Lógica del menú hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Alternar el menú
        nav.classList.toggle('nav-active');

        // Animación de los enlaces (opcional, entrada suave)
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Animación del botón Burger (para que se convierta en una X)
        burger.classList.toggle('toggle');
    });
});
