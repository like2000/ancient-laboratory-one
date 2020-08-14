from flask import url_for, redirect

from backend.album import blueprint


@blueprint.route('/')
def index():
    return redirect(url_for('angular_blue.index'))
