from flask import url_for, redirect
from flask_cors import CORS

from backend import create_app

app = create_app()
CORS(app)


@app.route('/')
def index():
    return redirect(url_for('angular_blue.index'))


@app.route('/<path:path>')
def angular_routes(path):
    return redirect(url_for('angular_blue.index'))


if __name__ == '__main__':
    app.run(debug=True)
