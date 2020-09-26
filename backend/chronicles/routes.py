import json
import locale
import pathlib
import numpy as np
import pandas as pd

from flask import jsonify, request

from backend import db
from backend.chronicles import blueprint
from backend.chronicles.models import Chronicles

locale.setlocale(locale.LC_ALL, 'de_CH')


@blueprint.route('/')
def index():
    return f"Hello from {pathlib.Path(__file__).parent.name}"


@blueprint.route('/add', methods=['GET', 'POST'])
def add():
    ts: pd.Timestamp = pd.to_datetime('now')

    data = json.loads(request.data)

    data['id'] = ts.value // 1000000000
    data['active'] = False
    data['type'] = 'Sleep'

    data['stop'] = ts + pd.to_timedelta('2 hours')
    data['start'] = ts
    data['total'] = data['stop'] - data['start']
    data['quality'] = 5

    element = Chronicles(
        id=data['id'],
        active=data['active'],
        type=data['type'],
        stop=data['stop'].strftime('%H:%M:%S'),
        start=data['start'].strftime('%H:%M:%S'),
        total=np.round(data['total'].seconds / 3600).astype(int).item(),
        quality=data['quality'],
        day=ts.strftime('%d'),
        year=ts.strftime('%Y'),
        month=ts.strftime('%B'),
        weekday=ts.strftime('%A'),
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
