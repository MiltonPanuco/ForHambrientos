document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-receta');
    const listaRecetas = document.getElementById('lista-recetas');
    const filtroInput = document.getElementById('filtro-recetas');

    // Recetas iniciales
    const recetasIniciales = [
        {
            nombre: "Tacos de Frijoles",
            ingredientes: "Tortillas de maíz, frijoles refritos, queso, salsa",
            precio: 30,
            tiempoPreparacion: 15,
            tiempoCoccion: 10,
            instrucciones: "1. Calienta las tortillas. 2. Unta los frijoles. 3. Agrega queso y salsa al gusto."
        },
        {
            nombre: "Sopa de Tortilla",
            ingredientes: "Tortillas, tomate, cebolla, ajo, chile, caldo de pollo, aguacate",
            precio: 45,
            tiempoPreparacion: 20,
            tiempoCoccion: 30,
            instrucciones: "1. Fríe las tortillas. 2. Prepara la base de tomate. 3. Agrega el caldo y cocina. 4. Sirve con tortilla frita y aguacate."
        },
        {
            nombre: "Enchiladas Verdes",
            ingredientes: "Tortillas de maíz, pollo desmenuzado, salsa verde, crema, queso",
            precio: 60,
            tiempoPreparacion: 25,
            tiempoCoccion: 20,
            instrucciones: "1. Calienta las tortillas. 2. Rellena con pollo. 3. Baña con salsa verde. 4. Agrega crema y queso."
        }
    ];

    // Función para crear un elemento de receta
    function crearElementoReceta(receta) {
        const nuevaReceta = document.createElement('li');
        nuevaReceta.className = 'receta-item';
        nuevaReceta.innerHTML = `
            <h3>${receta.nombre}</h3>
            <div class="receta-info">
                <p><strong>Precio:</strong> $${receta.precio.toFixed(2)} MXN</p>
                <p><strong>Preparación:</strong> ${receta.tiempoPreparacion} min</p>
                <p><strong>Cocción:</strong> ${receta.tiempoCoccion} min</p>
                <p><strong>Total:</strong> ${receta.tiempoPreparacion + receta.tiempoCoccion} min</p>
            </div>
            <div class="receta-ingredientes">
                <h4>Ingredientes:</h4>
                <p>${receta.ingredientes}</p>
            </div>
            <div class="receta-instrucciones">
                <h4>Instrucciones:</h4>
                <p>${receta.instrucciones}</p>
            </div>
        `;
        return nuevaReceta;
    }

    // Agregar  recetas iniciales
    recetasIniciales.forEach(receta => {
        listaRecetas.appendChild(crearElementoReceta(receta));
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nuevaReceta = {
            nombre: document.getElementById('nueva-receta').value.trim(),
            ingredientes: document.getElementById('ingredientes-receta').value.trim(),
            precio: parseFloat(document.getElementById('precio-receta').value),
            tiempoPreparacion: parseInt(document.getElementById('tiempo-preparacion').value),
            tiempoCoccion: parseInt(document.getElementById('tiempo-coccion').value),
            instrucciones: document.getElementById('descripcion-receta').value.trim()
        };

        if (nuevaReceta.nombre && nuevaReceta.ingredientes && nuevaReceta.instrucciones) {
            const elementoReceta = crearElementoReceta(nuevaReceta);
            listaRecetas.appendChild(elementoReceta);
            form.reset();

            // Efecto de aparición suave
            elementoReceta.style.opacity = '0';
            setTimeout(() => {
                elementoReceta.style.opacity = '1';
            }, 10);
        }
    });

    filtroInput.addEventListener('input', function() {
        const filtro = this.value.toLowerCase();
        const recetas = listaRecetas.getElementsByClassName('receta-item');

        Array.from(recetas).forEach(receta => {
            const texto = receta.textContent.toLowerCase();
            if (texto.includes(filtro)) {
                receta.style.display = '';
            } else {
                receta.style.display = 'none';
            }
        });
    });

    // Animación suave al cargar la página
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});