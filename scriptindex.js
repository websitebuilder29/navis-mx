// ========== CARRUSEL PRINCIPAL ==========
const track = document.getElementById('track');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

if (track && nextBtn && prevBtn) {
    let index = 0;
    let autoPlayInterval;
    let resizeTimeout;
    
    const itemsVisible = () => window.innerWidth < 768 ? 1 : 3;

    function updateCarousel() {
        if (track.children.length === 0) return;
        const itemWidth = track.children[0].offsetWidth + 20; 
        track.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    function nextSlide() {
        const maxIndex = track.children.length - itemsVisible();
        index = (index < maxIndex) ? index + 1 : 0;
        updateCarousel();
    }

    function prevSlide() {
        const maxIndex = track.children.length - itemsVisible();
        if (index > 0) {
            index--;
        } else {
            index = maxIndex;
        }
        updateCarousel();
    }

    function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextSlide, 3000);
    }

    function resetTimer() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
    });

    startAutoPlay();

    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            index = 0;
            updateCarousel();
        }, 250);
    });
    
    setTimeout(updateCarousel, 100);
}

// ========== FUNCIONES PARA MODALES ==========
console.log('scriptindex.js cargado correctamente');

function openModal(activity) {
    console.log('Abriendo modal:', activity);
    
    const modal = document.getElementById('infoModal');
    const modalBody = document.getElementById('modal-body');
    const contentSource = document.getElementById(`modal-${activity}`);
    
    if (!modal || !modalBody) {
        console.error('No se encontró el modal');
        return;
    }
    
    if (contentSource) {
        modalBody.innerHTML = contentSource.innerHTML;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
        console.error('No se encontró contenido para:', activity);
        modalBody.innerHTML = '<p style="padding: 20px; text-align: center;">Información no disponible</p>';
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

window.addEventListener('click', function(event) {
    const modal = document.getElementById('infoModal');
    if (modal && event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// ========== EFECTO DE SCROLL NAVBAR ==========
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ========== CONTROL DE VIDEOS MEJORADO ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada, inicializando videos...');
    
    const videoCards = document.querySelectorAll('.video-card-vertical');
    
    videoCards.forEach((card, i) => {
        const video = card.querySelector('video');
        const container = card.querySelector('.video-container-vertical');
        
        if (video && container) {
            // Crear overlay de pausa/reproducción
            const overlay = document.createElement('div');
            overlay.className = 'video-overlay';
            overlay.innerHTML = '<i class="fas fa-play"></i>';
            overlay.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.3s ease;
                cursor: pointer;
                z-index: 10;
                pointer-events: none;
            `;
            container.style.position = 'relative';
            container.appendChild(overlay);
            
            container.addEventListener('mouseenter', () => {
                overlay.style.opacity = '1';
            });
            
            container.addEventListener('mouseleave', () => {
                overlay.style.opacity = '0';
            });
            
            container.addEventListener('click', function(e) {
                e.preventDefault();
                if (video.paused) {
                    video.play();
                    overlay.innerHTML = '<i class="fas fa-pause"></i>';
                } else {
                    video.pause();
                    overlay.innerHTML = '<i class="fas fa-play"></i>';
                }
            });
            
            video.addEventListener('error', function(e) {
                console.error(`Error cargando video ${i + 1}:`, e);
                container.style.background = 'linear-gradient(135deg, #666, #333)';
                const errorMsg = document.createElement('div');
                errorMsg.style.cssText = `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: white;
                    text-align: center;
                    z-index: 5;
                `;
                errorMsg.innerHTML = '<i class="fas fa-exclamation-triangle"></i><br>Video no disponible';
                container.appendChild(errorMsg);
            });
            
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log('Autoplay prevented:', error);
                    overlay.style.opacity = '1';
                    overlay.innerHTML = '<i class="fas fa-play"></i>';
                });
            }
            
            video.addEventListener('play', () => {
                overlay.innerHTML = '<i class="fas fa-pause"></i>';
                setTimeout(() => {
                    if (container.matches(':hover')) {
                        overlay.style.opacity = '1';
                    } else {
                        overlay.style.opacity = '0';
                    }
                }, 1000);
            });
            
            video.addEventListener('pause', () => {
                overlay.innerHTML = '<i class="fas fa-play"></i>';
                overlay.style.opacity = '1';
            });
        }
    });
    
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.style.display = 'none';
    }
});