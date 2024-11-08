const footerContent = `
    <footer class="footer">

        <div class="footer-container">

            <div class="footer-section">
                <h2 class="footer-title">ForHambrientos</h2>
                <p class="footer-contact">Email: <a href="mailto:Forhambrientos.company@gmail.com">forhambrientos.company@gmail.com</a></p>
            </div>

            <nav class="footer-section">
                <h3 class="footer-subtitle">Enlaces rápidos</h3>
                <ul class="footer-nav-list">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="recetas.html">Recetas</a></li>
                    <li><a href="agregar-recetas.html">Agregar Recetas</a></li>
                    <li><a href="contacto.html">Contáctanos</a></li>
                </ul>
            </nav>

            <div class="footer-section">
                <img src="imagen/logo-forhambrientos.png" alt="Logo ForHambrientos" class="footer-logo">
            </div>
        </div>

        <div class="footer-bottom">
            <p class="footer-copyright">&copy; 2024 ForHambrientos. Todos los derechos reservados.</p>
            <div class="footer-legal">
            <a href="terminos-y-condiciones.html">Términos y Condiciones</a>
            <a href="aviso-de-privacidad.html">Aviso de Privacidad</a>
            </div>
        </div>

    </footer>
`;

document.getElementById('dynamic-footer').innerHTML = footerContent;