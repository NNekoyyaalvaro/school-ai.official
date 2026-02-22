from flask import Flask, render_template
from security import apply_security

app = Flask(__name__, static_folder='static', template_folder='templates')

apply_security(app)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
