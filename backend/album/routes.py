import pathlib

from backend.album import blueprint


@blueprint.route('/')
def index():
    return f"Hello from {pathlib.Path(__file__).parent.name}"
