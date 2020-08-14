from flask import url_for, redirect

from backend.database import blueprint


@blueprint.route('/')
def index():
    return redirect(url_for('angular_blue.index'))
