from backend.journal import blueprint

import pandas as pd


@blueprint.route('/')
def index():
    return "Hello from Journal!"


@blueprint.route('/month')
def month():
    year = pd.to_datetime('today').year
    month = pd.to_datetime('today').month
    tr = pd.date_range(f"{year}-{month}", f"{year}-{month + 1}", closed='left')

    df = pd.DataFrame()
    df['day'] = list(map(lambda t: t.day, tr))
    df['week'] = list(map(lambda t: t.week, tr))
    df['weekday'] = list(map(lambda t: t.dayofweek, tr))

    da = pd.pivot(df, 'week', 'weekday')

    return da.to_json()


if __name__ == '__main__':
    month()
