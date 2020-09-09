from backend.mkdocs import blueprint


@blueprint.route('/')
def index():
    return "Hello from mkdocs!"
