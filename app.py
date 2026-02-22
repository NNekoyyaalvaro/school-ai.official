from flask import Flask, request, jsonify, render_template
import logging
import re

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)

# Lista de palabras prohibidas
PROHIBITED_KEYWORDS = [
    "suicidio", "matar", "autolesión", "depresión", "como ahorcarse",
    "arma", "violencia", "trampas", "examen", "copiar", "sexo"
]

# Palabras clave educativas y sus respuestas
EDUCATIONAL_RESPONSES = {
    "fotosíntesis": "¡Excelente pregunta sobre fotosíntesis! 🌱 Las plantas convierten la luz solar en energía. ¿Sabes qué tres elementos principales necesitan las plantas para realizar la fotosíntesis? (Pista: luz, agua y algo del aire...)",
    
    "ecuación": "Para resolver una ecuación, primero debes identificar los términos. ¿Puedes mostrarme la ecuación específica? Por ejemplo, ¿es algo como '2x + 3 = 7'?",
    
    "célula": "Las células son la unidad básica de la vida. ¿Te gustaría aprender sobre la célula animal, vegetal, o sobre orgánulos específicos como la mitocondria?",
    
    "poema": "Analizar un poema es hermoso 📝 Primero, ¿puedes identificar: 1) El número de estrofas, 2) El tipo de rima, 3) El tema principal? ¡Empieza por ahí!",
    
    "matemáticas": "Las matemáticas son fascinantes. ¿Con qué tema específico necesitas ayuda? ¿Álgebra, geometría, cálculo?",
    
    "historia": "La historia nos enseña de dónde venimos. ¿Sobre qué período histórico o personaje te gustaría aprender?",
    
    "agua": "El agua es esencial para la vida 💧 El ciclo del agua incluye: evaporación, condensación, precipitación. ¿Quieres que profundicemos en alguna de estas etapas?",
    
    "gravedad": "La gravedad es la fuerza que nos mantiene en la Tierra. ¿Sabías que Newton la descubrió al ver caer una manzana? ¿Qué te gustaría saber exactamente?",
    
    "músculos": "El cuerpo humano tiene más de 600 músculos. ¿Te interesa algún grupo muscular en particular?",
    
    "reciclaje": "¡Reciclar es cuidar el planeta! ♻️ ¿Sabes cuáles son los tres colores principales de los contenedores de reciclaje y qué va en cada uno?"
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        pregunta = data.get('message', '').lower().strip()
        
        # Verificar palabras prohibidas
        for palabra in PROHIBITED_KEYWORDS:
            if palabra in pregunta:
                logging.warning(f"Palabra prohibida detectada: {palabra}")
                return jsonify({
                    'response': '🛡️ Lo siento, no puedo responder a esa pregunta. Recuerda que estoy aquí para ayudarte con tus estudios de forma segura y educativa.',
                    'warning': True
                })
        
        # Buscar respuesta educativa
        respuesta_generica = "Esa es una buena pregunta. Para poder guiarte mejor, ¿podrías darme más detalles? Por ejemplo: ¿De qué materia es? ¿Qué es exactamente lo que no entiendes?"
        
        respuesta = respuesta_generica
        for key, value in EDUCATIONAL_RESPONSES.items():
            if key in pregunta:
                respuesta = value
                break
        
        # Si la pregunta es muy corta, pedir más contexto
        if len(pregunta.split()) < 3:
            respuesta = "¿Puedes ser más específico con tu pregunta? Por ejemplo: '¿Cómo se hace una ecuación de segundo grado?' o 'Explica las partes de la célula'"
        
        return jsonify({
            'response': respuesta,
            'warning': False
        })
        
    except Exception as e:
        logging.error(f"Error: {e}")
        return jsonify({
            'response': 'Lo siento, tuve un problema técnico. Por favor, intenta de nuevo.',
            'warning': True
        })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
