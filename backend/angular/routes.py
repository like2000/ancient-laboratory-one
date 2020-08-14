from flask import render_template, send_from_directory

from backend.angular import blueprint


# @blueprint.route('/')
# @blueprint.route('/home')
# @blueprint.route('/album')
# def index(**kwargs):
#     return make_response(open('/home/kli/workspace/ancient-laboratory-one/backend/angular/static/index.html').read())
# return make_response(open(url_for('angular_blue.static', filename='index.html')).read())

@blueprint.route('/')
def index():
    return render_template('index.html')


@blueprint.route('/<path:path>', methods=['GET', 'POST'])
def static_proxy(path):
    return send_from_directory('angular/static', path)
    # return send_from_directory(url_for('angular_blue.static', filename='*'), path)
