import pathlib

from backend.chronicles import blueprint


@blueprint.route('/')
def index():
    return f"Hello from {pathlib.Path(__file__).parent.name}"
