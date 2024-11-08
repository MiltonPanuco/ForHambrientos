const headerContent = `
    <header id="header" class="header">
        <nav class="nav-container">
            
            <div class="logo">
                <img src="imagen/logo-forhambrientos.png" alt="ForHambrientos Logo">
                <span class="logo-text">ForHambrientos</span>
            </div>
            
            <ul class="nav-links" id="navLinks">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="recetas.html">Recetas</a></li>
                <li><a href="agregar-recetas.html">Agregar Receta</a></li>
                <li><a href="contacto.html">Contáctanos</a></li>
            </ul>
            
            <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

        </nav>
    </header>
`;

function loadHeader() {
    document.getElementById('dynamic-header').innerHTML = headerContent;
}

document.addEventListener('DOMContentLoaded', loadHeader);


document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Manejar el efecto "sticky"
    function handleSticky() {
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', handleSticky);

    // Llamada inicial para manejar el estado "sticky"
    handleSticky();

    navLinks.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            toggleMenu();
        }
    });
});