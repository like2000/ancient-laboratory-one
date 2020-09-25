import pandas as pd
from flask import jsonify

from backend.journal import blueprint


@blueprint.route('/')
def index():
    return "Hello from Journal!"


@blueprint.route('/month', methods=['GET'])
def month():
    year = pd.to_datetime('today').year
    month = pd.to_datetime('today').month
    tr = pd.date_range(f"{year}-{month}", f"{year}-{month + 1}", closed='left')

    df = pd.DataFrame()
    df['day'] = list(map(lambda t: t.day, tr))
    df['week'] = list(map(lambda t: t.week, tr))
    df['weekday'] = list(map(lambda t: t.dayofweek, tr))

    da = pd.pivot(df, 'week', 'weekday')
    da.fillna('', inplace=True)
    # da = da.astype('object')

    header = ["Week", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    index = da.index.values
    data = []
    for i, ix in enumerate(index):
        row = dict()
        for j, k in enumerate(header):
            if j == 0:
                row.update({k: int(ix)})
            else:
                row.update({k: da.iloc[i, j - 1]})
        data.append(row)

    return jsonify({
        'header': header,
        'data': data,
    })

# if __name__ == '__main__':
#     month()
