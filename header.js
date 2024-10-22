const headerContent = `
    <nav>
        <!-- Logotipo -->
        <div class="logo">
            <img src="imagen/logo-forhambrientos.png" alt="ForHambrientos Logo">
            <span class="logo-text">ForHambrientos</span>
        </div>

        <!-- Enlaces -->
        <ul class="nav-links">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="recetas.html">Recetas</a></li>
            <li><a href="agregar-recetas.html">Agregar Receta</a></li>
            <li><a href="contacto.html">Contáctanos</a></li>
        </ul>

        <!-- Menú hamburguesa (Pantallas pequeñas / Pantallas medianas) -->
        <div class="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
`;

function loadHeader() {
    document.getElementById('dynamic-header').innerHTML = headerContent;
}

document.addEventListener('DOMContentLoaded', loadHeader);
