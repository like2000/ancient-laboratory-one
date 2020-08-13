import pathlib

from flask import jsonify

from backend.chronicles import blueprint


@blueprint.route('/')
def index():
    return f"Hello from {pathlib.Path(__file__).parent.name}"


@blueprint.route('/add', methods=['GET', 'POST'])
def add(data):
    print(data)
    return f"Hello from {pathlib.Path(__file__).parent.name}"


@blueprint.route('/get', methods=['GET'])
def get():
    data = {
        'id': 1,
        'name': 'card 1',
        'comment': 'just a test',
        'description': 'some descriptive text now here'
    }
    print(data)
    return jsonify(data)


@blueprint.route('/delete', methods=['GET', 'POST'])
def delete(data):
    return f"Hello from {pathlib.Path(__file__).parent.name}"
