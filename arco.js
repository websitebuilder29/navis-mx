// Función para abrir el modal
function openModal(activity) {
    console.log('Abriendo modal:', activity);
    
    const modal = document.getElementById('infoModal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) {
        console.error('No se encontró el modal');
        return;
    }
    
    // Contenido del modal con formato de viñetas y precios resaltados
    const content = {
        snorkel: `
            <div class="modal-body-content">
                <!-- ENCABEZADO CON PRECIO DESTACADO -->
                <div class="modal-header-section">
                    <h2>🏝️ PASEO AL ARCO + SNORKEL</h2>
                    <div class="price-highlight">
                        <span class="price-badge">🔥 MEJOR PRECIO</span>
                        <div class="price-box">
                            <span class="price-currency">$</span>
                            <span class="price-number">600</span>
                            <span class="price-period">MXN / persona</span>
                        </div>
                        <span class="price-note">*Tour compartido</span>
                    </div>
                </div>

                <!-- DESCRIPCIÓN CORTA -->
                <p class="modal-description">
                    🌊 <strong>Experiencia única</strong> por las cristalinas aguas de Los Cabos. 
                    Disfruta los mejores paisajes del Mar de Cortés y el Océano Pacífico.
                </p>

                <!-- DURACIÓN Y HORARIOS -->
                <div class="info-cards">
                    <div class="info-card">
                        <i class="fas fa-clock"></i>
                        <div>
                            <strong>Duración</strong>
                            <span>1 hora de recorrido</span>
                        </div>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-calendar-alt"></i>
                        <div>
                            <strong>Horarios</strong>
                            <span>10:00 am - 5:00 pm</span>
                        </div>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-users"></i>
                        <div>
                            <strong>Capacidad</strong>
                            <span>19 personas máximo</span>
                        </div>
                    </div>
                </div>

                <!-- PRECIOS EN VIÑETAS -->
                <h3>💰 OPCIONES Y PRECIOS</h3>
                <ul class="price-list">
                    <li>
                        <i class="fas fa-user"></i>
                        <span><strong>Por persona</strong> (Tour compartido)</span>
                        <span class="price-tag-modal">$600 MXN</span>
                    </li>
                    <li>
                        <i class="fas fa-users"></i>
                        <span><strong>Grupo de 6 personas</strong> (Tour privado)</span>
                        <span class="price-tag-modal">$4,200 MXN</span>
                    </li>
                    <li>
                        <i class="fas fa-ship"></i>
                        <span><strong>Bajada a Playa del Amor</strong></span>
                        <span class="price-tag-modal green">💰 SIN COSTO</span>
                    </li>
                </ul>

                <!-- LUGARES A VISITAR -->
                <h3>📍 PUNTOS TURÍSTICOS INCLUIDOS</h3>
                <div class="locations-grid">
                    <div class="location-item">
                        <i class="fas fa-anchor"></i>
                        <span>Marina de CSL</span>
                    </div>
                    <div class="location-item">
                        <i class="fas fa-mountain"></i>
                        <span>Roca del Pelícano</span>
                    </div>
                    <div class="location-item">
                        <i class="fas fa-hand-peace"></i>
                        <span>Dedo de Neptuno</span>
                    </div>
                    <div class="location-item">
                        <i class="fas fa-paw"></i>
                        <span>Lobos Marinos</span>
                    </div>
                    <div class="location-item">
                        <i class="fas fa-globe-americas"></i>
                        <span>Fin de la Tierra</span>
                    </div>
                    <div class="location-item">
                        <i class="fas fa-heart"></i>
                        <span>Playa del Amor</span>
                    </div>
                    <div class="location-item">
                        <i class="fas fa-archway"></i>
                        <span>El Arco</span>
                    </div>
                    <div class="location-item">
                        <i class="fas fa-hand-peace"></i>
                        <span>Playa del Divorcio</span>
                    </div>
                </div>

                <!-- LO QUE INCLUYE -->
                <h3>✅ SERVICIOS INCLUIDOS</h3>
                <ul class="features-list">
                    <li><i class="fas fa-check-circle"></i> Equipo de snorkel profesional</li>
                    <li><i class="fas fa-check-circle"></i> Chaleco salvavidas</li>
                    <li><i class="fas fa-check-circle"></i> Guía bilingüe</li>
                    <li><i class="fas fa-check-circle"></i> Visita a los puntos turísticos</li>
                    <li><i class="fas fa-check-circle"></i> Seguro de a bordo</li>
                </ul>

                <!-- TEMPORADA DE BALLENAS -->
                <div class="whale-season">
                    <i class="fas fa-whale"></i>
                    <div>
                        <strong>🐋 TEMPORADA DE BALLENAS</strong>
                        <p>Del 15 de Diciembre al 26 de Abril</p>
                        <small>Avistamiento de Ballena Jorobada y Ballena Gris</small>
                    </div>
                </div>

                <h3>➕ EXTRAS (CON COSTO)</h3>
                <ul class="features-list extras">
                    <li><i class="fas fa-camera"></i> Fotógrafo profesional - $300 MXN</li>
                    <li><i class="fas fa-wine-glass-alt"></i> Barra libre premium - $250 MXN</li>
                    <li><i class="fas fa-utensils"></i> Comida a bordo - $180 MXN</li>
                </ul>

                <!-- BOTÓN DE RESERVA -->
                <a href="https://wa.me/526241196242?text=Hola!%20Me%20interesa%20el%20Paseo%20al%20Arco%20con%20Snorkel%20($600%20MXN)" 
                   class="modal-wa-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> 
                    RESERVAR AHORA - $600 MXN
                    <i class="fas fa-arrow-right"></i>
                </a>
                
                <p class="modal-footer-note">
                    <i class="fas fa-shield-alt"></i> 
                    Pago seguro | Cancelación gratis 24 hrs antes
                </p>
            </div>
        `,
        
        ballenas: `
            <div class="modal-body-content">
                <div class="modal-header-section">
                    <h2>🐋 TOUR DE AVISTAMIENTO DE BALLENAS</h2>
                    <div class="price-highlight">
                        <span class="price-badge">🐋 TEMPORADA ESPECIAL</span>
                        <div class="price-box">
                            <span class="price-currency">$</span>
                            <span class="price-number">1,100</span>
                            <span class="price-period">MXN / persona</span>
                        </div>
                        <span class="price-note">*Temporada Dic 15 - Abr 26</span>
                    </div>
                </div>

                <p class="modal-description">
                    🎥 Vive la emoción de ver ballenas en su hábitat natural. 
                    Recorrido por el Océano Pacífico para grabar los mejores momentos.
                </p>

                <div class="info-cards">
                    <div class="info-card">
                        <i class="fas fa-clock"></i>
                        <div>
                            <strong>Duración</strong>
                            <span>1 hora con 45 minutos</span>
                        </div>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-calendar-alt"></i>
                        <div>
                            <strong>Horarios</strong>
                            <span>10am, 12pm, 2pm, 4pm</span>
                        </div>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-users"></i>
                        <div>
                            <strong>Capacidad</strong>
                            <span>19 personas</span>
                        </div>
                    </div>
                </div>

                <h3>💰 PRECIOS ESPECIALES</h3>
                <ul class="price-list">
                    <li>
                        <i class="fas fa-user"></i>
                        <span><strong>Adultos</strong></span>
                        <span class="price-tag-modal">$1,100 MXN</span>
                    </li>
                    <li>
                        <i class="fas fa-child"></i>
                        <span><strong>Niños (3-10 años)</strong></span>
                        <span class="price-tag-modal">$800 MXN</span>
                    </li>
                    <li>
                        <i class="fas fa-baby"></i>
                        <span><strong>Menores de 3 años</strong></span>
                        <span class="price-tag-modal green">🎁 GRATIS</span>
                    </li>
                    <li>
                        <i class="fas fa-users"></i>
                        <span><strong>Grupo privado (hasta 6)</strong></span>
                        <span class="price-tag-modal">$5,500 MXN</span>
                    </li>
                </ul>

                <h3>🐳 ESPECIES QUE PUEDES VER</h3>
                <div class="species-grid">
                    <span class="species-tag">🐋 Ballena Jorobada</span>
                    <span class="species-tag">⚫ Ballena Gris</span>
                    <span class="species-tag">🔵 Ballena Azul</span>
                    <span class="species-tag">⚫ Orcas</span>
                    <span class="species-tag">🐬 Delfines</span>
                </div>

                <h3>✅ INCLUYE</h3>
                <ul class="features-list">
                    <li><i class="fas fa-check-circle"></i> Guía experto en ballenas</li>
                    <li><i class="fas fa-check-circle"></i> Chaleco salvavidas</li>
                    <li><i class="fas fa-check-circle"></i> Hidratación a bordo</li>
                    <li><i class="fas fa-check-circle"></i> Visita a El Arco</li>
                    <li><i class="fas fa-check-circle"></i> Bajada a Playa del Amor</li>
                    <li><i class="fas fa-check-circle"></i> Seguro de a bordo</li>
                </ul>

                <a href="https://wa.me/526241196242?text=Hola!%20Me%20interesa%20el%20Tour%20de%20Ballenas%20($1,100%20MXN)" 
                   class="modal-wa-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> 
                    RESERVAR TOUR DE BALLENAS
                    <i class="fas fa-whale"></i>
                </a>
            </div>
        `,
        
        paquete_completo: `
            <div class="modal-body-content">
                <div class="modal-header-section">
                    <h2>🌟 PAQUETE COMPLETO</h2>
                    <div class="price-highlight">
                        <span class="price-badge">💎 MÁS VENDIDO</span>
                        <div class="price-box">
                            <span class="price-currency">$</span>
                            <span class="price-number">1,500</span>
                            <span class="price-period">MXN / persona</span>
                        </div>
                        <span class="price-note">*Ahorras $200 MXN</span>
                    </div>
                </div>

                <p class="modal-description">
                    🎯 El paquete más completo: Arco + Snorkel + Ballenas + Comida
                </p>

                <h3>💰 LO QUE INCLUYE POR $1,500 MXN</h3>
                <ul class="price-list">
                    <li>
                        <i class="fas fa-archway"></i>
                        <span>Tour al Arco</span>
                        <span class="price-tag-modal">✓ Incluido</span>
                    </li>
                    <li>
                        <i class="fas fa-water"></i>
                        <span>Snorkel en Playa del Amor</span>
                        <span class="price-tag-modal">✓ Incluido</span>
                    </li>
                    <li>
                        <i class="fas fa-whale"></i>
                        <span>Avistamiento de Ballenas</span>
                        <span class="price-tag-modal">✓ Incluido</span>
                    </li>
                    <li>
                        <i class="fas fa-utensils"></i>
                        <span>Comida y bebidas</span>
                        <span class="price-tag-modal">✓ Incluido</span>
                    </li>
                    <li>
                        <i class="fas fa-camera"></i>
                        <span>Fotos digitales</span>
                        <span class="price-tag-modal">✓ Incluido</span>
                    </li>
                </ul>

                <div class="savings-banner">
                    <i class="fas fa-tags"></i>
                    <span>🔥 AHORRO TOTAL: $200 MXN 🔥</span>
                    <i class="fas fa-tags"></i>
                </div>

                <h3>✅ SERVICIOS PREMIUM</h3>
                <ul class="features-list">
                    <li><i class="fas fa-check-circle"></i> Barra libre todo el tour</li>
                    <li><i class="fas fa-check-circle"></i> Comida caliente a bordo</li>
                    <li><i class="fas fa-check-circle"></i> Fotógrafo profesional</li>
                    <li><i class="fas fa-check-circle"></i> Equipo de snorkel premium</li>
                    <li><i class="fas fa-check-circle"></i> Toallas y bloqueador solar</li>
                    <li><i class="fas fa-check-circle"></i> Transporte redondo hotel-marina</li>
                </ul>

                <a href="https://wa.me/526241196242?text=Hola!%20Me%20interesa%20el%20Paquete%20Completo%20($1,500%20MXN)" 
                   class="modal-wa-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> 
                    RESERVAR PAQUETE COMPLETO
                    <i class="fas fa-gem"></i>
                </a>
            </div>
        `
    };
    
    modalBody.innerHTML = content[activity] || content.snorkel;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Animación de entrada
    modal.classList.add('modal-open');
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        modal.classList.remove('modal-open');
    }
}

// Cerrar modal con clic fuera
window.addEventListener('click', function(event) {
    const modal = document.getElementById('infoModal');
    if (modal && event.target === modal) {
        closeModal();
    }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});