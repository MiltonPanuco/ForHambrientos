const footerContent = `
<div style="padding: 20px;">
        <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 250px; margin-bottom: 10px;">
                <h3 style="font-family: 'Playfair Display', serif; font-size: 1.5rem; color: #ffffff;">ForHambrientos</h3>
                <p style="color: #ffffff;">Email: <a href="mailto:Forhambrientos.company@gmail.com" style="color: #ffffff;">Forhambrientos.company@gmail.com</a></p>
            </div>
            <div style="flex: 1; min-width: 250px; margin-bottom: 10px;">
                <h3 style="font-family: 'Playfair Display', serif; font-size: 1.25rem; color: #ffffff;">Enlaces rápidos</h3>
                <ul style="list-style-type: none; padding: 0;">
                    <li><a href="index.html" style="color: #ffffff;">Inicio</a></li>
                    <li><a href="recetas.html" style="color: #ffffff;">Recetas</a></li>
                    <li><a href="agregar-recetas.html" style="color: #ffffff;">Agregar Recetas</a></li>
                    <li><a href="contacto.html" style="color: #ffffff;">Contáctanos</a></li>
                </ul>
            </div>
            <div style="flex: 1; min-width: 250px;">
                <img src="imagen/logo-forhambrientos.png" alt="Logo ForHambrientos" style="height: 100px;">
            </div>
        </div>
        <hr style="border: 1px solid #ffffff; margin: 20px 0;">
        <p style="color: #ffffff;">&copy; 2024 ForHambrientos. Todos los derechos reservados.</p>
        <div style="margin-top: 10px;">
            <a href="terminos-y-condiciones.html" style="color: #ffffff; margin-right: 15px;">Términos y Condiciones</a>
            <a href="aviso-de-privacidad.html" style="color: #ffffff;">Aviso de Privacidad</a>
        </div>
    </div>
    <style>
       

        .footer-container{
        background-color: #f16529;
        color: white;
        text-align: center;
        padding: 20px;
        width: 100%;
        font-size: 14px;
        }

        .footer-container a {
        color:#ffffff;
        text-decoration:none;
        }

        .footer-container a:hover {
        text-decoration:underline;
        }


        .footer-container div {
        max-width: 1200px;
        margin: auto;
        }   
    </style>

`;

document.getElementById('dynamic-footer').innerHTML = footerContent;