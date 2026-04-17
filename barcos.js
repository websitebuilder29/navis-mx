// ========== BARCOS.JS - CARRUSEL CON AUTO-PLAY ==========

console.log('barcos.js cargado correctamente');

document.addEventListener('DOMContentLoaded', function() {
    const carouselContainers = document.querySelectorAll('.barco-carousel-container');
    
    carouselContainers.forEach((container, index) => {
        if (!container.id) {
            container.id = `barco-carousel-${index}`;
        }
        initCarousel(container.id);
    });
});

function initCarousel(carouselId) {
    const carouselContainer = document.getElementById(carouselId);
    if (!carouselContainer) return;
    
    const track = carouselContainer.querySelector('.barco-carousel-track');
    const slides = carouselContainer.querySelectorAll('.barco-carousel-slide');
    const prevBtn = carouselContainer.querySelector('.barco-prev');
    const nextBtn = carouselContainer.querySelector('.barco-next');
    const dotsContainer = carouselContainer.querySelector('.barco-dots-container');
    
    if (!track || slides.length === 0) return;
    
    let currentIndex = 0;
    const slideCount = slides.length;
    let autoPlayInterval;
    const autoPlayDelay = 1500; // 1.5 segundos
    
    // Crear dots
    dotsContainer.innerHTML = '';
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('button');
        dot.classList.add('barco-dot');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', `Imagen ${i + 1}`);
        dot.addEventListener('click', () => {
            goToSlide(i);
            resetAutoPlay();
        });
        dotsContainer.appendChild(dot);
    }
    
    const dots = dotsContainer.querySelectorAll('.barco-dot');
    
    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    function goToSlide(index) {
        if (index < 0) {
            currentIndex = slideCount - 1;
        } else if (index >= slideCount) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        updateCarousel();
    }
    
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }
    
    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            goToSlide(currentIndex - 1);
            resetAutoPlay();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            goToSlide(currentIndex + 1);
            resetAutoPlay();
        });
    }
    
    // Pausar auto-play en hover
    carouselContainer.addEventListener('mouseenter', stopAutoPlay);
    carouselContainer.addEventListener('mouseleave', startAutoPlay);
    
    // Touch events para móviles
    let touchStartX = 0;
    carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carouselContainer.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                goToSlide(currentIndex + 1);
            } else {
                goToSlide(currentIndex - 1);
            }
            resetAutoPlay();
        }
    }, { passive: true });
    
    startAutoPlay();
    updateCarousel();
}