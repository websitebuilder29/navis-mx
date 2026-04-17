// ========== CONTACTO.JS - FUNCIONALIDADES PARA LA PÁGINA DE CONTACTO ==========

console.log('contacto.js cargado correctamente');

// Efecto de cambio de navbar al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll para los enlaces internos (si los hay)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación de entrada para la tarjeta de contacto (opcional)
document.addEventListener('DOMContentLoaded', function() {
    const contactCard = document.querySelector('.contacto-card-simple');
    if (contactCard) {
        contactCard.style.opacity = '0';
        contactCard.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            contactCard.style.transition = 'all 0.8s ease';
            contactCard.style.opacity = '1';
            contactCard.style.transform = 'translateY(0)';
        }, 200);
    }
});

// Validación simple del formulario (si en el futuro agregas uno)
function validateForm() {
    // Esta función puede ser expandida si agregas un formulario
    console.log('Formulario válido');
    return true;
}

// Copiar teléfono al portapapeles (opcional)
function copyPhone() {
    const phone = "+52 624 119 62 42";
    navigator.clipboard.writeText(phone).then(() => {
        alert("¡Número copiado al portapapeles!");
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}

// Agregar evento al icono de teléfono para copiar (opcional)
document.addEventListener('DOMContentLoaded', function() {
    const phoneItem = document.querySelector('.item-det .fa-phone')?.parentElement;
    if (phoneItem) {
        phoneItem.style.cursor = 'pointer';
        phoneItem.addEventListener('click', copyPhone);
        phoneItem.setAttribute('title', 'Haz clic para copiar el número');
    }
});