const footerContent = `
    <div class="container mx-auto px-4">

        <div class="flex flex-wrap justify-between items-center">

            <div class="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 class="text-2xl font-bold mb-2" style="font-family: 'Playfair Display', serif;">ForHambrientos</h3>
                <p class="text-sm hover-only">Email:<a href="#"> forhambrientos.company@gmail.com</a></p>
            </div>
            
            <div class="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 class="text-xl font-bold mb-2" style="font-family: 'Playfair Display', serif;">Enlaces rápidos</h3>
                <ul class="text-sm hover-only ">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="recetas.html">Recetas</a></li>
                    <li><a href="agregar-recetas.html">Agregar Recetas</a></li>
                    <li><a href="contacto.html">Contáctanos</a></li>
                </ul>
            </div>

            <div class="w-full md:w-1/3">
                <img src="imagen/logo-forhambrientos.png" alt="Logo ForHambrientos" class="mx-auto h-24 md:h-32 lg:h-40">
            </div>

        </div>

        <hr class="border-orange-700 my-6">

        <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-sm">&copy; 2024 ForHambrientos. Todos los derechos reservados.</p>
            <div class="mt-4 md:mt-0">
                <a href="terminos-y-condiciones.html" class="text-sm hover:underline mr-4">Términos y Condiciones</a>
                <a href="aviso-de-privacidad.html" class="text-sm hover:underline">Aviso de Privacidad</a>
            </div>
        </div>

    </div>
`;

document.getElementById('dynamic-footer').innerHTML = footerContent;
