// ========== TERRESTRES.JS - SOLO ACTIVIDADES INDIVIDUALES ==========

console.log('terrestres.js cargado correctamente');

function openModal(activity) {
    const modal = document.getElementById('infoModal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) return;
    
    const content = {
        // CAMELLOS - Descripción larga con viñetas verticales
        camellos: `
            <div class="modal-body-content">
                <h2>🐪 PASEO EN CAMELLOS</h2>
                <div class="modal-price">DESDE $75 USD</div>
                
                <p class="modal-description">¿Cuál es el tour más único que puedes hacer en todo México? ¿Qué tal un paseo en camello por la playa en Los Cabos? La aventura comienza con el transporte gratuito de ida y vuelta.</p>
                
                <p>Tu guía te llevará a un corto recorrido en safari por el desierto de B.C.S. hasta que llegues a nuestro santuario de camellos.</p>
                
                <p>¡Termina tu experiencia con una degustación de tequila de cortesía y disfruta de la experiencia mexicana! Después de tu degustación de tequila, disfruta de un delicioso bufet/quesadillas de queso y aguas frescas.</p>
                
                <p>No olvides adquirir las fotos del recuerdo con nuestros fotógrafos profesionales.</p>
                
                <h3>⏰ HORARIOS:</h3>
                <div class="info-box">
                    <p><strong>Verano:</strong> 9 am - 4 pm (intervalos cada hora)</p>
                    <p><strong>Invierno:</strong> 9 am - 3 pm (intervalos cada hora)</p>
                </div>
                
                <h3>✨ INCLUYE:</h3>
                <ul class="vertical-list">
                    <li><i class="fas fa-bus"></i> Transporte redondo desde tu hotel</li>
                    <li><i class="fas fa-safari"></i> Recorrido en safari por el desierto</li>
                    <li><i class="fas fa-camel"></i> Paseo en camello por la playa</li>
                    <li><i class="fas fa-wine-bottle"></i> Degustación de tequila de cortesía</li>
                    <li><i class="fas fa-cheese"></i> Buffet de quesadillas y aguas frescas</li>
                    <li><i class="fas fa-camera"></i> Fotógrafos profesionales disponibles</li>
                    <li><i class="fas fa-child"></i> Apto para toda la familia (edad mínima 4 años)</li>
                </ul>
                
                <a href="https://wa.me/526241196242?text=Hola!%20Me%20interesa%20reservar%20el%20tour%20de%20Camellos" class="modal-wa-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> Reservar ahora
                </a>
            </div>
        `,
        
        // CABALLOS - Descripción larga con viñetas verticales
        caballos: `
            <div class="modal-body-content">
                <h2>🐴 PASEO A CABALLO</h2>
                <div class="modal-price">DESDE $70 USD</div>
                
                <p class="modal-description">Descubre la belleza del desierto y la playa a caballo. Un paseo tranquilo y pintoresco por los paisajes más impresionantes de Los Cabos.</p>
                
                <p>Esta experiencia única te permitirá conectar con la naturaleza mientras recorres senderos que combinan el árido desierto de Baja California Sur con las cristalinas aguas del Mar de Cortés.</p>
                
                <p>Nuestros caballos son dóciles y están entrenados para personas de todos los niveles, desde principiantes hasta jinetes experimentados. Un guía experto te acompañará durante todo el recorrido.</p>
                
                <h3>📋 INFORMACIÓN DEL TOUR:</h3>
                <div class="info-box">
                    <p><strong>Duración total:</strong> 2.5 horas</p>
                    <p><strong>Edad mínima:</strong> 6 años</p>
                    <p><strong>Peso máximo:</strong> 100 kg por persona</p>
                    <p><strong>Nivel de experiencia:</strong> Principiantes y expertos</p>
                </div>
                
                <div class="info-box">
                    <p><strong>RECORRIDO:</strong></p>
                    <p>🏜️ Desierto / Montaña</p>
                    <p>🏖️ Playa / Arroyo</p>
                </div>
                
                <h3>✨ INCLUYE:</h3>
                <ul class="vertical-list">
                    <li><i class="fas fa-horse"></i> Paseo a caballo de 1 hora</li>
                    <li><i class="fas fa-user-tie"></i> Guía experto bilingüe</li>
                    <li><i class="fas fa-hat-cowboy"></i> Equipo de equitación completo</li>
                    <li><i class="fas fa-bottle-water"></i> Agua embotellada</li>
                    <li><i class="fas fa-camera"></i> Fotos panorámicas en puntos clave</li>
                    <li><i class="fas fa-bus"></i> Transporte redondo desde tu hotel</li>
                    <li><i class="fas fa-shield-alt"></i> Seguro de responsabilidad civil</li>
                </ul>
                
                <a href="https://wa.me/526241196242?text=Hola!%20Me%20interesa%20reservar%20el%20tour%20de%20Caballos" class="modal-wa-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> Reservar ahora
                </a>
            </div>
        `,
        
        // ATVS / RACERS - Descripción larga con viñetas verticales
        atvs: `
            <div class="modal-body-content">
                <h2>🏎️ ATVS / RACERS (RZR)</h2>
                <div class="modal-price">DESDE $120 USD</div>
                
                <p class="modal-description">Siente la adrenalina de manejar un RZR o un ATV por las dunas y senderos del desierto. Una aventura de alta velocidad que no olvidarás.</p>
                
                <p>Prepárate para una experiencia llena de emoción mientras atraviesas el impresionante desierto de Baja California Sur. Nuestros vehículos todo terreno están diseñados para brindarte la máxima seguridad sin sacrificar la diversión.</p>
                
                <p>Conducirás por dunas de arena, senderos rocosos y caminos desérticos mientras disfrutas de vistas panorámicas del Océano Pacífico.</p>
                
                <h3>📋 OPCIONES DE VEHÍCULOS:</h3>
                <div class="options-grid">
                    <div class="option-card">
                        <div class="option-icon">🏍️</div>
                        <div class="option-text">
                            <strong>ATV Individual</strong>
                            <span>$120 USD</span>
                        </div>
                    </div>
                    <div class="option-card">
                        <div class="option-icon">🏍️👤</div>
                        <div class="option-text">
                            <strong>ATV Doble</strong>
                            <span>$170 USD</span>
                        </div>
                    </div>
                    <div class="option-card">
                        <div class="option-icon">🚙</div>
                        <div class="option-text">
                            <strong>RZR (2 plazas)</strong>
                            <span>$220 USD</span>
                        </div>
                    </div>
                    <div class="option-card">
                        <div class="option-icon">🚙👥</div>
                        <div class="option-text">
                            <strong>RZR (4 plazas)</strong>
                            <span>$280 USD</span>
                        </div>
                    </div>
                </div>
                
                <h3>✨ INCLUYE:</h3>
                <ul class="vertical-list">
                    <li><i class="fas fa-car"></i> Vehículo todo terreno de tu elección</li>
                    <li><i class="fas fa-helmet-safety"></i> Casco, goggles y bandana de protección</li>
                    <li><i class="fas fa-user-tie"></i> Guía líder de aventura</li>
                    <li><i class="fas fa-bottle-water"></i> Agua y snacks energéticos</li>
                    <li><i class="fas fa-camera"></i> Fotos en puntos estratégicos</li>
                    <li><i class="fas fa-bus"></i> Transporte redondo desde tu hotel</li>
                    <li><i class="fas fa-id-card"></i> Requisito: Licencia de conducir vigente</li>
                </ul>
                
                <div class="info-box">
                    <p><strong>Duración:</strong> 2 horas de recorrido (4 horas total con transporte)</p>
                    <p><strong>Edad mínima conductor:</strong> 16 años</p>
                    <p><strong>Acompañantes:</strong> Menores pueden ir como pasajeros</p>
                </div>
                
                <a href="https://wa.me/526241196242?text=Hola!%20Me%20interesa%20reservar%20un%20tour%20de%20ATVs%20o%20Racers" class="modal-wa-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> Reservar ahora
                </a>
            </div>
        `,
        
        // SKY BIKES - Descripción larga con viñetas verticales
        skybikes: `
            <div class="modal-body-content">
                <h2>🚲 SKY BIKES</h2>
                <div class="modal-price">DESDE $65 USD</div>
                
                <p class="modal-description">Atrévete a pedalear en el cielo. Nuestro circuito de bicicletas por los cables te dará una vista panorámica de todo Cabo San Lucas.</p>
                
                <p>Imagina estar suspendido a 100 metros sobre el nivel del suelo, pedaleando tranquilamente mientras contemplas una vista de 360 grados del Arco de Cabo San Lucas, el Océano Pacífico y el Mar de Cortés.</p>
                
                <p>Nuestro circuito aéreo de 300 metros te permitirá sentir la adrenalina de manera segura, con arneses dobles y cascos certificados.</p>
                
                <h3>📋 ESPECIFICACIONES:</h3>
                <div class="info-box">
                    <p><strong>Altura:</strong> 100 metros sobre el nivel del suelo</p>
                    <p><strong>Longitud del recorrido:</strong> 300 metros</p>
                    <p><strong>Duración del paseo:</strong> 10-15 minutos</p>
                    <p><strong>Peso máximo:</strong> 120 kg</p>
                    <p><strong>Edad mínima:</strong> 6 años (acompañados por adulto)</p>
                </div>
                
                <h3>✨ INCLUYE:</h3>
                <ul class="vertical-list">
                    <li><i class="fas fa-bicycle"></i> Bicicleta aérea de última generación</li>
                    <li><i class="fas fa-helmet-safety"></i> Arnés doble y casco certificado</li>
                    <li><i class="fas fa-user-tie"></i> Instructores certificados en altura</li>
                    <li><i class="fas fa-mountain-city"></i> Vista panorámica 360° de Los Cabos</li>
                    <li><i class="fas fa-camera"></i> Fotos profesionales de tu experiencia</li>
                    <li><i class="fas fa-bus"></i> Transporte redondo desde tu hotel</li>
                    <li><i class="fas fa-certificate"></i> Certificado de valentía</li>
                </ul>
                
                <a href="https://wa.me/526241196242?text=Hola!%20Me%20interesa%20reservar%20Sky%20Bikes" class="modal-wa-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> Reservar ahora
                </a>
            </div>
        `,
        
        // SANDBOARDING - Descripción larga con viñetas verticales
        sandboarding: `
            <div class="modal-body-content">
                <h2>🏂 SANDBOARDING</h2>
                <div class="modal-price">DESDE $80 USD por persona</div>
                
                <p class="modal-description">Deslízate por las enormes dunas de arena en una tabla de sandboard. Diversión garantizada para chicos y grandes en el desierto de La Paz Baja California. Salidas unicamente de La Paz. Incluye sesion de fotos, videos con dron y 2 horas de tour.</p>
                
                <p>El sandboarding es una actividad única que combina la emoción del snowboard con el calor del desierto. Nuestras dunas alcanzan alturas de hasta 30 metros, ofreciéndote descensos emocionantes y seguros.</p>
                
                <p>No necesitas experiencia previa, nuestro instructor certificado te enseñará las técnicas básicas para que puedas disfrutar al máximo.</p>
                
                <div class="info-box-highlight">
                    <p><strong>📍 UBICACIÓN IMPORTANTE:</strong></p>
                    <p>Salidas únicamente desde La Paz, Baja California Sur (no desde Cabo San Lucas)</p>
                    <p>Transporte incluido desde tu hotel en La Paz</p>
                </div>
                
                <h3>✨ INCLUYE:</h3>
                <ul class="vertical-list">
                    <li><i class="fas fa-snowboard"></i> Tabla de sandboard profesional</li>
                    <li><i class="fas fa-helmet-safety"></i> Casco y protectores de rodillas y codos</li>
                    <li><i class="fas fa-user-tie"></i> Instructor certificado</li>
                    <li><i class="fas fa-bottle-water"></i> Agua y bebidas durante el tour</li>
                    <li><i class="fas fa-camera"></i> Sesión de fotos profesional incluida</li>
                    <li><i class="fas fa-video"></i> Video con dron profesional incluido</li>
                    <li><i class="fas fa-bus"></i> Transporte redondo desde tu hotel en La Paz</li>
                    <li><i class="fas fa-chalkboard-user"></i> Clase básica de sandboarding (15 minutos)</li>
                </ul>
                
                <h3>📋 DETALLES DEL TOUR:</h3>
                <div class="info-box">
                    <p><strong>Duración total:</strong> 2 horas de tour activo</p>
                    <p><strong>Altura de dunas:</strong> Hasta 30 metros</p>
                    <p><strong>Edad mínima:</strong> 5 años (menores acompañados)</p>
                    <p><strong>Niveles:</strong> Principiante, intermedio y experto</p>
                </div>
                
                <a href="https://wa.me/526241196242?text=Hola!%20Me%20interesa%20reservar%20Sandboarding" class="modal-wa-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> Reservar ahora
                </a>
            </div>
        `
    };
    
    modalBody.innerHTML = content[activity] || '<p>Información no disponible</p>';
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
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
    if (modal && event.target === modal) closeModal();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') closeModal();
});