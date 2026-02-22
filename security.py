from flask import request, abort


def apply_security(app):
    @app.before_request
    def check_headers():
        # Placeholder security filter: bloquea peticiones con cabecera X-Blocked
        if request.headers.get('X-Blocked'):
            abort(403)
