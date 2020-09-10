import json
import pathlib
import pandas as pd

from flask import jsonify, request

from backend.chronicles import blueprint

global_data = {}


@blueprint.route('/')
def index():
    return f"Hello from {pathlib.Path(__file__).parent.name}"


@blueprint.route('/add', methods=['GET', 'POST'])
def add():
    data = json.loads(request.data)
    global_data.update({pd.to_datetime('now').strftime('%a %H:%M:%S'): data})
    print(global_data)
    return data


@blueprint.route('/get', methods=['GET'])
def get():
    data = {
        'id': 1,
        'url': '1234.jpg',
        'name': 'card 1',
        'active': False,
        'comment': 'just another test',
        'description': 'some descriptive text now here',
        'date': pd.to_datetime('now').strftime("%d.%m.%Y"),
        'time': pd.to_datetime('now').strftime("%H:%M:%S"),
    }

    return jsonify([data])


@blueprint.route('/delete', methods=['GET', 'POST'])
def delete(data):
    return f"Hello from {pathlib.Path(__file__).parent.name}"
