from flask import Flask, request, jsonify, render_template_string
from langchain_community.llms import Ollama
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
import logging
from security import SecurityFilter

# Configuración
app = Flask(__name__)
logging.basicConfig(level=logging.INFO)
security = SecurityFilter()

# Cargar modelo local
try:
    llm = Ollama(model="llama3.2", temperature=0.3)
    logging.info("✅ Modelo cargado correctamente")
except Exception as e:
    logging.error(f"❌ Error cargando modelo: {e}")
    llm = None

# Plantilla HTML (interfaz de usuario)
HTML_TEMPLATE = '''
<!DOCTYPE html>
<html>
<head>
    <title>School AI - Asistente Educativo Seguro</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
        }
        .header {
            background: #4a90e2;
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        .header p {
            font-size: 1.1em;
            opacity: 0.9;
        }
        .chat-container {
            height: 400px;
            overflow-y: auto;
            padding: 20px;
            background: #f5f7fa;
        }
        .message {
            margin: 15px 0;
            padding: 12px 18px;
            border-radius: 15px;
            max-width: 70%;
            word-wrap: break-word;
            animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .user-message {
            background: #4a90e2;
            color: white;
            margin-left: auto;
            border-bottom-right-radius: 5px;
        }
        .ai-message {
            background: white;
            color: #333;
            margin-right: auto;
            border-bottom-left-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .warning-message {
            background: #ff6b6b;
            color: white;
            text-align: center;
            margin: 10px auto;
            max-width: 90%;
        }
        .input-area {
            padding: 20px;
            background: white;
            border-top: 2px solid #eee;
            display: flex;
            gap: 10px;
        }
        .input-area input {
            flex: 1;
            padding: 15px;
            border: 2px solid #e0e0e0;
            border-radius: 30px;
            font-size: 1em;
            transition: border-color 0.3s;
        }
        .input-area input:focus {
            outline: none;
            border-color: #4a90e2;
        }
        .input-area button {
            padding: 15px 30px;
            background: #4a90e2;
            color: white;
            border: none;
            border-radius: 30px;
            font-size: 1em;
            cursor: pointer;
            transition: background 0.3s;
        }
        .input-area button:hover {
            background: #357abd;
        }
        .footer {
            background: #f8f9fa;
            padding: 15px;
            text-align: center;
            color: #666;
            font-size: 0.9em;
            border-top: 1px solid #eee;
        }
        .badge {
            display: inline-block;
            padding: 5px 10px;
            background: #28a745;
            color: white;
            border-radius: 20px;
            font-size: 0.8em;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏫 School AI</h1>
            <p>Asistente educativo inteligente y seguro</p>
            <span class="badge">✅ Modo Escuela Activado</span>
        </div>
        
        <div id="chatbox" class="chat-container">
            <div class="message ai-message">
                🤖 ¡Hola! Soy School AI, tu asistente de estudios. Estoy aquí para guiarte en tu aprendizaje. ¿En qué materia necesitas ayuda hoy?
            </div>
        </div>
        
        <div class="input-area">
            <input type="text" id="userInput" placeholder="Escribe tu pregunta..." onkeypress="if(event.key==='Enter') sendMessage()">
            <button onclick="sendMessage()">Enviar</button>
        </div>
        
        <div class="footer">
            ⚡ Este asistente está supervisado y diseñado para uso educativo
        </div>
    </div>

    <script>
        async function sendMessage() {
            const input = document.getElementById('userInput');
            const message = input.value.trim();
            if (!message) return;
            
            // Mostrar mensaje del usuario
            const chatbox = document.getElementById('chatbox');
            chatbox.innerHTML += `<div class="message user-message">👤 ${message}</div>`;
            input.value = '';
            chatbox.scrollTop = chatbox.scrollHeight;
            
            // Mostrar "escribiendo..."
            chatbox.innerHTML += `<div class="message ai-message" id="typing">🤖 School AI está escribiendo...</div>`;
            
            try {
                const response = await fetch('/chat', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({message: message})
                });
                
                const data = await response.json();
                
                // Remover "escribiendo..."
                document.getElementById('typing')?.remove();
                
                // Mostrar respuesta
                const messageClass = data.warning ? 'warning-message' : 'ai-message';
                chatbox.innerHTML += `<div class="message ${messageClass}">🤖 ${data.response}</div>`;
                chatbox.scrollTop = chatbox.scrollHeight;
                
            } catch (error) {
                document.getElementById('typing')?.remove();
                chatbox.innerHTML += `<div class="message warning-message">❌ Error de conexión. Intenta de nuevo.</div>`;
            }
        }
    </script>
</body>
</html>
'''

@app.route('/')
def home():
    return render_template_string(HTML_TEMPLATE)

@app.route('/chat', methods=['POST'])
def chat():
    """Endpoint principal del chat"""
    data = request.json
    pregunta = data.get('message', '')
    
    # PASO 1: Verificar seguridad
    es_segura, mensaje = security.verificar_pregunta(pregunta)
    if not es_segura:
        return jsonify({'response': mensaje, 'warning': True})
    
    # PASO 2: Aplicar pedagogía
    prompt_pedagogico = security.aplicar_pedagogia(pregunta)
    
    # PASO 3: Obtener respuesta del modelo
    if llm:
        try:
            respuesta = llm.invoke(prompt_pedagogico)
        except:
            respuesta = "Lo siento, tengo problemas técnicos. Por favor, intenta más tarde."
    else:
        respuesta = "El modelo no está disponible. Contacta al administrador."
    
    # PASO 4: Formatear respuesta final
    respuesta_final = f"{respuesta}\n\n---\n*📚 School AI - Aprendiendo juntos*"
    
    return jsonify({'response': respuesta_final, 'warning': False})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
