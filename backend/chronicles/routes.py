import json
import pathlib
import pandas as pd

from flask import jsonify, request

from backend import db
from backend.chronicles import blueprint
from backend.chronicles.models import Chronicles

global_data = []


@blueprint.route('/')
def index():
    return f"Hello from {pathlib.Path(__file__).parent.name}"


@blueprint.route('/add', methods=['GET', 'POST'])
def add():
    data = json.loads(request.data)
    data['id'] = pd.to_datetime('now').value
    data['date'] = pd.to_datetime('now').strftime('%d.%m.%Y')
    data['time'] = pd.to_datetime('now').strftime('%H:%M:%S')

    global_data.append(data)

    return jsonify(global_data)


@blueprint.route('/get', methods=['GET'])
def get():
    # data = {
    #     'id': 1,
    #     'url': '1234.jpg',
    #     'name': 'card 1',
    #     'active': False,
    #     'comment': 'just another test',
    #     'description': 'some descriptive text now here',
    #     'date': pd.to_datetime('now').strftime("%d.%m.%Y"),
    #     'time': pd.to_datetime('now').strftime("%H:%M:%S"),
    # }

    # global_data.append(data)

    return jsonify(global_data)


@blueprint.route('/delete', methods=['GET', 'POST'])
def delete(i):
    element = Chronicles.query.get(i)
    db.session.delete(element)
    db.session.commit()
    return f"Element {i} deleted from database."
