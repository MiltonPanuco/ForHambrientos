document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const submitBtn = document.getElementById('submitBtn');
    const bioTextarea = document.getElementById('bio');
    const charCount = document.getElementById('charCount');

    // Actualizar el contador de caracteres
    bioTextarea.addEventListener('input', function () {
        charCount.textContent = this.value.length;
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (form.checkValidity()) {
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            // Simular envío del formulario
            setTimeout(() => {
                alert('La receta se envio con éxito!');
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                form.reset();
                charCount.textContent = '0';
            }, 2000);
        } else {
            form.reportValidity();
        }
    });
});