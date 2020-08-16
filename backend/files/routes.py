import pathlib
from flask import request
from werkzeug.utils import secure_filename

from backend.files import blueprint


@blueprint.route('/')
def index():
    return "Hello from files"


@blueprint.route('/upload', methods=['GET', 'POST'])
def upload():
    print(f"Received in flask: {request.files}")

    if 'file' not in request.files:
        print('No file in request')
        return ""

    file = request.files['file']
    if file.filename == '':
        print('No selected file')
        return ""
    if file:  # and allowed_file(file.filename):
        print("hello")
        filename = secure_filename(file.filename)
        file.save(filename)
        return ""

    return ""
