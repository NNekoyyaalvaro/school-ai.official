import re
import logging
from typing import Tuple

# Lista de palabras prohibidas (actualizada 2026)
PROHIBITED_KEYWORDS = [
    "suicidio", "matar", "autolesión", "depresión grave",
    "arma", "violencia", "contenido adulto", "sexo",
    "hackear", "trampas", "examen", "copiar"
]

# Patrones de angustia emocional
PATRONES_ANGUSTIA = [
    r"no (quiero|puedo) seguir",
    r"todo es mi culpa",
    r"no tengo esperanza",
    r"quiero (desaparecer|morir)",
    r"me quiero morir"
]

class SecurityFilter:
    """Filtro de seguridad para School AI"""
    
    def __init__(self):
        self.logger = logging.getLogger(__name__)
        
    def verificar_pregunta(self, pregunta: str) -> Tuple[bool, str]:
        """
        Verifica si una pregunta es segura
        Retorna: (es_segura, mensaje)
        """
        pregunta_lower = pregunta.lower()
        
        # Verificar palabras prohibidas
        for palabra in PROHIBITED_KEYWORDS:
            if palabra in pregunta_lower:
                self.logger.warning(f"Palabra prohibida detectada: {palabra}")
                return False, "⚠️ Lo siento, no puedo responder a esa pregunta."
        
        # Verificar patrones de angustia
        for patron in PATRONES_ANGUSTIA:
            if re.search(patron, pregunta_lower):
                self.logger.critical(f"POSIBLE ANGUSTIA: {pregunta}")
                return False, "🆘 He notado que podrías estar pasando por un momento difícil. Por favor, habla con un profesor o adulto de confianza."
        
        return True, ""
    
    def aplicar_pedagogia(self, pregunta: str) -> str:
        """Convierte la pregunta en una guía pedagógica"""
        prompt = f"""Como asistente educativo, debes guiar al estudiante sin dar la respuesta directa.
        
        Pregunta del estudiante: "{pregunta}"
        
        Responde con:
        1. Una pregunta que haga reflexionar
        2. Una pista útil
        3. Un recurso donde pueda buscar (libro, web educativa)
        
        Respuesta guiada:"""
        
        return prompt
