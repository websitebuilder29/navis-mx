// ========== CARRUSEL PRINCIPAL ==========
const track = document.getElementById('track');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

if (track && nextBtn && prevBtn) {
    let index = 0;
    const itemsVisible = () => window.innerWidth < 768 ? 1 : 3;

    function updateCarousel() {
        const itemWidth = track.children[0].offsetWidth + 20; 
        track.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    function nextSlide() {
        const maxIndex = track.children.length - itemsVisible();
        index = (index < maxIndex) ? index + 1 : 0;
        updateCarousel();
    }

    function prevSlide() {
        if (index > 0) {
            index--;
        } else {
            index = track.children.length - itemsVisible();
        }
        updateCarousel();
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
    });

    let autoPlay = setInterval(nextSlide, 3000);

    function resetTimer() {
        clearInterval(autoPlay);
        autoPlay = setInterval(nextSlide, 3000);
    }

    window.addEventListener('resize', () => {
        index = 0;
        updateCarousel();
    });
}

// ========== FUNCIONES PARA MODALES ==========
console.log('scriptindex.js cargado correctamente');

// Función para abrir el modal
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
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    } else {
        console.error('No se encontró contenido para:', activity);
        modalBody.innerHTML = '<p style="padding: 20px; text-align: center;">Información no disponible</p>';
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
    }
}

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', function(event) {
    const modal = document.getElementById('infoModal');
    if (modal && event.target === modal) {
        closeModal();
    }
});

// Cerrar modal con tecla Escape
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

// ========== CONTROL DE VIDEOS ==========
document.addEventListener('DOMContentLoaded', function() {
    const videoCards = document.querySelectorAll('.video-card-vertical');
    
    videoCards.forEach(card => {
        const video = card.querySelector('video');
        const container = card.querySelector('.video-container-vertical');
        
        if (video && container) {
            // Pausar/reproducir al hacer clic en el video
            container.addEventListener('click', function(e) {
                e.preventDefault();
                if (video.paused) {
                    video.play();
                    container.classList.remove('paused');
                } else {
                    video.pause();
                    container.classList.add('paused');
                }
            });
            
            // Mostrar indicador de pausa
            video.addEventListener('pause', function() {
                container.classList.add('paused');
            });
            
            video.addEventListener('play', function() {
                container.classList.remove('paused');
            });
        }
    });
});

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada, modales listos');
    
    // Asegurar que el modal esté oculto al cargar
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.style.display = 'none';
    }
});