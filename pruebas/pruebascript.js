const wrapper = document.querySelector('.carrusel-wrapper');
const productos = document.querySelectorAll('.carrusel-wrapper .producto');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide(i) {
    if(i < 0) index = productos.length - 1;
    else if(i >= productos.length) index = 0;
    else index = i;

    const offset = -index * 100; // mueve el carrusel
    wrapper.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    showSlide(index - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(index + 1);
});

// Inicializa
wrapper.style.display = 'flex';
wrapper.style.transition = 'transform 0.5s ease-in-out';
showSlide(index);
