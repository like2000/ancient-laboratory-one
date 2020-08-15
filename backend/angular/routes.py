from flask import render_template, send_from_directory, make_response, url_for

from backend.angular import blueprint


@blueprint.route('/')
def index():
    return render_template('index.html')
    # return make_response(open('index.html').read())


@blueprint.route('/<path:path>', methods=['GET', 'POST'])
def static_proxy(path):
    return send_from_directory('angular/static', path)
    # return make_response(open(url_for('angular_blue.index', filename=path)).read())
