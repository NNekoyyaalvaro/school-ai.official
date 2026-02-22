<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>School AI - Asistente Educativo Inteligente</title>
    
    <!-- Meta tags para SEO y redes sociales -->
    <meta name="description" content="School AI: Asistente educativo seguro e inteligente para colegios. Aprendizaje guiado con protección para menores.">
    <meta name="keywords" content="IA educativa, colegio inteligente, aprendizaje asistido, tutor AI, educación segura">
    <meta name="author" content="School AI Team">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://school-ai.onrender.com">
    <meta property="og:title" content="School AI - Asistente Educativo">
    <meta property="og:description" content="IA educativa segura para colegios. Aprende con guía profesional.">
    <meta property="og:image" content="https://school-ai.onrender.com/static/img/og-image.jpg">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://school-ai.onrender.com">
    <meta property="twitter:title" content="School AI - Asistente Educativo">
    <meta property="twitter:description" content="IA educativa segura para colegios">
    <meta property="twitter:image" content="https://school-ai.onrender.com/static/img/og-image.jpg">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" sizes="32x32" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏫</text></svg>">
    <link rel="apple-touch-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏫</text></svg>">
    
    <!-- Google Fonts - Inter y Cal Sans para tipografía profesional -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
    
    <!-- Font Awesome para iconos (CDN gratuito) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <!-- Nuestro CSS personalizado -->
    <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}">
    
    <style>
        /* Estilos adicionales específicos de la página */
        .hero-section {
            text-align: center;
            padding: 3rem 2rem;
            background: linear-gradient(135deg, var(--primary-soft), var(--secondary-soft));
            border-radius: var(--radius-2xl) var(--radius-2xl) 0 0;
        }
        
        .hero-title {
            font-size: clamp(2.5rem, 6vw, 4rem);
            margin-bottom: 1rem;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .hero-subtitle {
            font-size: clamp(1rem, 3vw, 1.25rem);
            color: var(--gray-600);
            max-width: 600px;
            margin: 0 auto 2rem;
        }
        
        .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .btn {
            padding: 0.875rem 2rem;
            border-radius: var(--radius-full);
            font-weight: 600;
            text-decoration: none;
            transition: all var(--transition-base);
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            color: white;
            box-shadow: var(--shadow-md);
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }
        
        .btn-secondary {
            background: white;
            color: var(--primary);
            border: 2px solid var(--primary);
        }
        
        .btn-secondary:hover {
            background: var(--primary-soft);
            transform: translateY(-2px);
        }
        
        .chat-section {
            padding: 2rem;
            background: white;
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 2rem;
            color: var(--gray-800);
            position: relative;
            padding-bottom: 1rem;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(to right, var(--primary), var(--secondary));
            border-radius: var(--radius-full);
        }
        
        .features-section {
            background: var(--gray-50);
            padding: 4rem 2rem;
        }
        
        .testimonials-section {
            padding: 4rem 2rem;
            background: linear-gradient(135deg, var(--primary-soft), var(--secondary-soft));
        }
        
        .stats-section {
            padding: 3rem 2rem;
            background: white;
        }
        
        .faq-section {
            padding: 4rem 2rem;
            background: var(--gray-50);
        }
        
        .faq-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .faq-item {
            background: white;
            padding: 1.5rem;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-md);
            transition: all var(--transition-base);
        }
        
        .faq-item:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-lg);
        }
        
        .faq-question {
            font-weight: 600;
            color: var(--gray-800);
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .faq-question i {
            color: var(--primary);
            font-size: 1.2rem;
        }
        
        .faq-answer {
            color: var(--gray-600);
            line-height: 1.6;
            padding-left: 2rem;
        }
        
        .contact-section {
            padding: 4rem 2rem;
            text-align: center;
            background: white;
        }
        
        .contact-form {
            max-width: 500px;
            margin: 2rem auto 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .form-group {
            text-align: left;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--gray-700);
            font-weight: 500;
        }
        
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 0.875rem;
            border: 2px solid var(--gray-200);
            border-radius: var(--radius-md);
            font-family: var(--font-sans);
            transition: all var(--transition-fast);
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 4px var(--primary-glow);
        }
        
        .form-group textarea {
            min-height: 120px;
            resize: vertical;
        }
        
        .submit-btn {
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: var(--radius-full);
            font-weight: 600;
            cursor: pointer;
            transition: all var(--transition-base);
            font-size: 1rem;
        }
        
        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }
        
        .footer-links {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 2rem;
            padding: 2rem;
            background: var(--gray-800);
            color: white;
        }
        
        .footer-column h4 {
            color: white;
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }
        
        .footer-column ul {
            list-style: none;
            padding: 0;
        }
        
        .footer-column ul li {
            margin-bottom: 0.5rem;
        }
        
        .footer-column ul li a {
            color: var(--gray-400);
            text-decoration: none;
            transition: color var(--transition-fast);
        }
        
        .footer-column ul li a:hover {
            color: white;
        }
        
        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .social-links a {
            color: var(--gray-400);
            font-size: 1.5rem;
            transition: all var(--transition-fast);
        }
        
        .social-links a:hover {
            color: white;
            transform: translateY(-3px);
        }
        
        .copyright {
            text-align: center;
            padding: 1.5rem;
            background: var(--gray-900);
            color: var(--gray-500);
            font-size: 0.875rem;
        }
        
        /* Modo oscuro para la página */
        @media (prefers-color-scheme: dark) {
            .hero-section {
                background: linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(16, 185, 129, 0.2));
            }
            
            .hero-subtitle {
                color: var(--gray-400);
            }
            
            .btn-secondary {
                background: var(--gray-800);
                border-color: var(--primary);
                color: var(--primary-light);
            }
            
            .faq-item,
            .contact-form input,
            .contact-form textarea {
                background: var(--gray-800);
                color: var(--gray-200);
                border-color: var(--gray-700);
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- HERO SECTION - Presentación principal -->
        <section class="hero-section glass-card">
            <div class="badge">
                <i class="fas fa-shield-alt"></i>
                Modo Escuela Seguro
            </div>
            <h1 class="hero-title">
                <i class="fas fa-robot"></i> School AI
            </h1>
            <p class="hero-subtitle">
                El asistente educativo inteligente que guía, no da respuestas directas. 
                Diseñado específicamente para proteger y potenciar el aprendizaje de los estudiantes.
            </p>
            <div class="cta-buttons">
                <a href="#chat" class="btn btn-primary">
                    <i class="fas fa-comment"></i> Probar ahora
                </a>
                <a href="#features" class="btn btn-secondary">
                    <i class="fas fa-info-circle"></i> Cómo funciona
                </a>
            </div>
        </section>

        <!-- CHAT SECTION - El asistente interactivo -->
        <section id="chat" class="chat-section glass-card">
            <h2 class="section-title">
                <i class="fas fa-comments"></i> Asistente Educativo
            </h2>
            
            <!-- Contenedor del chat -->
            <div id="chatbox" class="chat-container">
                <!-- Mensaje de bienvenida -->
                <div class="message ai-message">
                    <strong>🤖 School AI:</strong> ¡Hola! Soy tu asistente de estudios. 
                    Estoy aquí para guiarte, no para darte las respuestas directas. 
                    ¿En qué materia necesitas ayuda hoy? (Matemáticas, Ciencias, Lenguaje, etc.)
                </div>
            </div>
            
            <!-- Área de input -->
            <div class="input-area">
                <div class="input-wrapper">
                    <i class="fas fa-pencil-alt input-icon"></i>
                    <input 
                        type="text" 
                        id="userInput" 
                        placeholder="Escribe tu pregunta educativa..."
                        aria-label="Mensaje para School AI"
                        autocomplete="off"
                    >
                </div>
                <button class="send-button" onclick="sendMessage()">
                    <i class="fas fa-paper-plane"></i>
                    <span>Enviar</span>
                </button>
            </div>
            
            <!-- Sugerencias rápidas -->
            <div style="padding: 1rem 2rem; display: flex; gap: 0.5rem; flex-wrap: wrap; border-top: 1px solid var(--gray-200);">
                <span style="color: var(--gray-500); font-size: 0.9rem; width: 100%; margin-bottom: 0.5rem;">
                    <i class="fas fa-lightbulb"></i> Preguntas sugeridas:
                </span>
                <button class="suggestion-chip" onclick="useSuggestion('¿Cómo se hace una ecuación de segundo grado?')">
                    📐 Ecuaciones
                </button>
                <button class="suggestion-chip" onclick="useSuggestion('¿Qué es la fotosíntesis?')">
                    🌱 Fotosíntesis
                </button>
                <button class="suggestion-chip" onclick="useSuggestion('Explica las partes de una célula')">
                    🔬 Célula
                </button>
                <button class="suggestion-chip" onclick="useSuggestion('¿Cómo analizar un poema?')">
                    📝 Poesía
                </button>
            </div>
        </section>

        <!-- FEATURES SECTION - Características -->
        <section id="features" class="features-section glass-card">
            <h2 class="section-title">
                <i class="fas fa-star"></i> ¿Por qué School AI?
            </h2>
            <div class="features">
                <div class="feature-card">
                    <div class="feature-icon">🛡️</div>
                    <h3>Seguridad Total</h3>
                    <p>Filtros avanzados que bloquean contenido inapropiado y detectan señales de angustia en estudiantes.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎓</div>
                    <h3>Guía Pedagógica</h3>
                    <p>No damos respuestas directas. Fomentamos el pensamiento crítico y el aprendizaje autónomo.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📚</div>
                    <h3>Multi-materia</h3>
                    <p>Matemáticas, Ciencias, Lenguaje, Historia y más. Adaptado al currículo escolar.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">⚡</div>
                    <h3>Respuesta Rápida</h3>
                    <p>Modelo optimizado para dar respuestas educativas en segundos, 24/7 disponible.</p>
                </div>
            </div>
        </section>

        <!-- STATS SECTION -->
        <section class="stats-section glass-card">
            <div class="stats">
                <div class="stat-item">
                    <div class="stat-number">10K+</div>
                    <div class="stat-label">Estudiantes</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">50+</div>
                    <div class="stat-label">Colegios</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Seguro</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">24/7</div>
                    <div class="stat-label">Disponible</div>
                </div>
            </div>
        </section>

        <!-- TESTIMONIALS SECTION -->
        <section class="testimonials-section glass-card">
            <h2 class="section-title" style="color: white;">
                <i class="fas fa-quote-right"></i> Lo que dicen los educadores
            </h2>
            <div class="testimonials">
                <div class="testimonial-card">
                    <p class="testimonial-text">
                        "School AI ha transformado cómo mis estudiantes resuelven dudas. 
                        En lugar de darles la respuesta, los guía para que ellos mismos 
                        lleguen a la solución. Es exactamente lo que necesitábamos."
                    </p>
                    <div class="testimonial-author">
                        María González, Profesora de Matemáticas
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ SECTION -->
        <section class="faq-section glass-card">
            <h2 class="section-title">
                <i class="fas fa-question-circle"></i> Preguntas Frecuentes
            </h2>
            <div class="faq-grid">
                <div class="faq-item">
                    <div class="faq-question">
                        <i class="fas fa-shield"></i>
                        ¿Es realmente seguro para menores?
                    </div>
                    <div class="faq-answer">
                        Sí. Implementamos filtros de palabras prohibidas, detección de angustia 
                        y supervisión pedagógica. Cada respuesta está diseñada para ser educativa y apropiada.
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">
                        <i class="fas fa-graduation-cap"></i>
                        ¿Qué edades pueden usarlo?
                    </div>
                    <div class="faq-answer">
                        School AI está optimizado para estudiantes de 8 a 18 años, 
                        con contenido adaptado a diferentes niveles educativos.
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">
                        <i class="fas fa-globe"></i>
                        ¿Es gratuito?
                    </div>
                    <div class="faq-answer">
                        Sí, completamente gratuito para uso educativo. Creemos en el acceso universal 
                        a herramientas de aprendizaje de calidad.
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">
                        <i class="fas fa-database"></i>
                        ¿Qué pasa con los datos de los estudiantes?
                    </div>
                    <div class="faq-answer">
                        No almacenamos información personal. Las conversaciones son anónimas 
                        y no se guardan registros identificables.
                    </div>
                </div>
            </div>
        </section>

        <!-- CONTACT SECTION -->
        <section class="contact-section glass-card">
            <h2 class="section-title">
                <i class="fas fa-envelope"></i> Contacta con nosotros
            </h2>
            <p style="color: var(--gray-600); max-width: 600px; margin: 0 auto;">
                ¿Eres un colegio interesado en implementar School AI? ¿Tienes sugerencias? 
                Escríbenos y te responderemos a la mayor brevedad.
            </p>
            
            <form class="contact-form" id="contactForm" onsubmit="handleContact(event)">
                <div class="form-group">
                    <label for="name">Nombre completo</label>
                    <input type="text" id="name" name="name" required placeholder="Tu nombre">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required placeholder="tu@email.com">
                </div>
                <div class="form-group">
                    <label for="message">Mensaje</label>
                    <textarea id="message" name="message" required placeholder="¿En qué podemos ayudarte?"></textarea>
                </div>
                <button type="submit" class="submit-btn">
                    <i class="fas fa-paper-plane"></i> Enviar mensaje
                </button>
            </form>
        </section>

        <!-- FOOTER LINKS -->
        <div class="footer-links">
            <div class="footer-column">
                <h4>School AI</h4>
                <ul>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Sobre nosotros</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Cómo funciona</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Seguridad</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Blog</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Recursos</h4>
                <ul>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Guía para profesores</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Para padres</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Política de privacidad</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Términos de uso</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Ayuda</h4>
                <ul>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> FAQ</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Soporte técnico</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Reportar problema</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Sugerencias</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Síguenos</h4>
                <div class="social-links">
                    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                    <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
                </div>
                <p style="margin-top: 1rem; color: var(--gray-500);">
                    <i class="fas fa-envelope"></i> info@school-ai.com
                </p>
            </div>
        </div>
        
        <!-- COPYRIGHT -->
        <div class="copyright">
            <p>© 2026 School AI - Asistente Educativo Inteligente. Todos los derechos reservados.</p>
            <p style="margin-top: 0.5rem; font-size: 0.8rem;">
                Diseñado con <i class="fas fa-heart" style="color: #ef4444;"></i> para la educación
            </p>
        </div>
    </div>

    <!-- JavaScript para la funcionalidad del chat -->
    <script>
        // Función para enviar mensajes
        async function sendMessage() {
            const input = document.getElementById('userInput');
            const message = input.value.trim();
            if (!message) return;
            
            const chatbox = document.getElementById('chatbox');
            
            // Mostrar mensaje del usuario
            chatbox.innerHTML += `<div class="message user-message">👤 ${escapeHtml(message)}</div>`;
            input.value = '';
            chatbox.scrollTop = chatbox.scrollHeight;
            
            // Mostrar indicador de escritura
            const typingId = 'typing-' + Date.now();
            chatbox.innerHTML += `
                <div class="message ai-message typing-indicator" id="${typingId}">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span style="margin-left: 0.5rem;">School AI está pensando...</span>
                </div>
            `;
            chatbox.scrollTop = chatbox.scrollHeight;
            
            try {
                // Llamada al backend
                const response = await fetch('/chat', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({message: message})
                });
                
                const data = await response.json();
                
                // Remover indicador de escritura
                document.getElementById(typingId)?.remove();
                
                // Mostrar respuesta
                const messageClass = data.warning ? 'warning-message' : 'ai-message';
                chatbox.innerHTML += `<div class="message ${messageClass}">🤖 School AI: ${escapeHtml(data.response)}</div>`;
                chatbox.scrollTop = chatbox.scrollHeight;
                
            } catch (error) {
                document.getElementById(typingId)?.remove();
                chatbox.innerHTML += `<div class="message warning-message">❌ Error de conexión. Por favor, intenta de nuevo.</div>`;
                console.error('Error:', error);
            }
        }
        
        // Función para escapar HTML (seguridad)
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }
        
        // Función para usar sugerencias
        function useSuggestion(text) {
            document.getElementById('userInput').value = text;
            sendMessage();
        }
        
        // Enviar con Enter
        document.getElementById('userInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        // Manejar formulario de contacto
        function handleContact(event) {
            event.preventDefault();
            alert('¡Gracias por contactarnos! Te responderemos a la mayor brevedad posible.');
            document.getElementById('contactForm').reset();
        }
        
        // Efecto de bienvenida
        window.addEventListener('load', function() {
            console.log('School AI - Versión 1.0.0 - Listo para aprender 🚀');
        });
    </script>

    <!-- Estilo para los chips de sugerencias -->
    <style>
        .suggestion-chip {
            background: var(--gray-100);
            border: 2px solid var(--gray-200);
            border-radius: var(--radius-full);
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
            color: var(--gray-700);
            cursor: pointer;
            transition: all var(--transition-fast);
            display: inline-flex;
            align-items: center;
            gap: 0.3rem;
        }
        
        .suggestion-chip:hover {
            background: var(--primary-soft);
            border-color: var(--primary);
            color: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }
        
        @media (prefers-color-scheme: dark) {
            .suggestion-chip {
                background: var(--gray-800);
                border-color: var(--gray-700);
                color: var(--gray-300);
            }
            
            .suggestion-chip:hover {
                background: rgba(37, 99, 235, 0.2);
                border-color: var(--primary);
                color: var(--primary-light);
            }
        }
    </style>
</body>
</html>
