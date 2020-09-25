import json
import pathlib
import numpy as np
import pandas as pd

from flask import jsonify, request

from backend import db
from backend.chronicles import blueprint
from backend.chronicles.models import Chronicles


@blueprint.route('/')
def index():
    return f"Hello from {pathlib.Path(__file__).parent.name}"


@blueprint.route('/add', methods=['GET', 'POST'])
def add():
    data = json.loads(request.data)
    data['id'] = pd.to_datetime('now').value // 1000000000
    data['type'] = 'Sleep'
    data['stop'] = pd.to_datetime('now') + pd.to_timedelta('2 hours')
    data['start'] = pd.to_datetime('now')
    data['total'] = data['stop'] - data['start']
    # data['date'] = pd.to_datetime('now').strftime('%d.%m.%Y')
    # data['time'] = pd.to_datetime('now').strftime('%H:%M:%S')

    element = Chronicles(
        id=data['id'],
        active=data['active'],
        type=data['type'],
        stop=data['stop'].strftime('%H:%M:%S'),
        start=data['start'].strftime('%H:%M:%S'),
        total=np.round(data['total'].seconds / 3600).astype(int).item(),
        quality=data['quality'],
    )
    # element = Chronicles(
    #     id=data['id'],
    #     url=data['url'],
    #     name=data['name'],
    #     active=data['active'],
    #     comment=data['comment'],
    #     description=data['description'],
    #     date=data['date'],
    #     time=data['time'],
    # )

    db.session.add(element)
    db.session.commit()
    print(f"New element added: {element}")

    chronicles = Chronicles.query.all()

    return jsonify([c.serialize() for c in chronicles])  # jsonify(chronicles)


@blueprint.route('/get', methods=['GET'])
def get():
    chronicles = Chronicles.query.all()
    print(chronicles)

    return jsonify([c.serialize() for c in chronicles])  # jsonify(chronicles)


@blueprint.route('/delete', methods=['GET', 'POST'])
def delete(i):
    element = Chronicles.query.get(i)
    db.session.delete(element)
    db.session.commit()
    return f"Element {i} deleted from database."
