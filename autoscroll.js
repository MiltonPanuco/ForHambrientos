scrollToTopOnReload();
function scrollToTopOnReload() {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
}

const button = document.getElementById('scrollToTop');

        window.onscroll = function() {
            button.classList.toggle('show', window.scrollY > 100);
            button.classList.toggle('hide', window.scrollY <= 100);
        };

        button.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });