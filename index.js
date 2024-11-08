document.addEventListener('DOMContentLoaded', function () {
    const carrusel = document.querySelector('.carrusel');
    const items = document.querySelectorAll('.carrusel-item');

    items.forEach(item => {
        const clone = item.cloneNode(true);
        carrusel.appendChild(clone);
    });

    const itemWidth = items[0].offsetWidth;
    const gap = 20;
    const totalWidth = items.length * (itemWidth + gap) * 2;
    carrusel.style.width = `${totalWidth}px`;

    carrusel.addEventListener('mouseenter', () => {
        carrusel.style.animationPlayState = 'paused';
    });

    carrusel.addEventListener('mouseleave', () => {
        carrusel.style.animationPlayState = 'running';
    });

    carrusel.addEventListener('touchstart', () => {
        carrusel.style.animationPlayState = 'paused';
    });

    carrusel.addEventListener('touchend', () => {
        setTimeout(() => {
            carrusel.style.animationPlayState = 'running';
        }, 2000);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const navButtons = document.querySelectorAll('.slider-nav-button');
    let currentIndex = 0;
    const intervalTime = 5000; 

    function goToSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
        updateNavButtons();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    }

    function updateNavButtons() {
        navButtons.forEach((button, index) => {
            button.classList.toggle('active', index === currentIndex);
        });
    }

    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => goToSlide(index));
    });

    let slideInterval = setInterval(nextSlide, intervalTime);

    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, intervalTime);
    });

    updateNavButtons();

    window.addEventListener('resize', () => {
        goToSlide(currentIndex);
    });
});