from flask import url_for, redirect
from flask_cors import CORS, cross_origin

from backend import create_app

app = create_app()
CORS(app)


@app.route('/')
@cross_origin()
def index():
    return redirect(url_for('angular.index'))


@app.route('/<path:path>')
@cross_origin()
def angular_routes(path):
    return redirect(url_for('angular.index'))


if __name__ == '__main__':
    app.run(debug=True)
