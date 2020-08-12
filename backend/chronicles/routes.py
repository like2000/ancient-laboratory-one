import pathlib

from backend.chronicles import blueprint


@blueprint.route('/')
def index():
    return f"Hello from {pathlib.Path(__file__).parent.name}"


@blueprint.route('/add')
def add():
    return f"Hello from {pathlib.Path(__file__).parent.name}"


@blueprint.route('/get')
def get():
    return f"Hello from {pathlib.Path(__file__).parent.name}"




@blueprint.route('/delete')
def delete():
    return f"Hello from {pathlib.Path(__file__).parent.name}"
