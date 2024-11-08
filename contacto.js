document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Simulación de envío
        alert('Gracias por tu mensaje. Te contactaremos pronto.');
        form.reset();
        
    });
});