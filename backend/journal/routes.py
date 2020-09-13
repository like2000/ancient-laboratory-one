from backend.journal import blueprint


@blueprint.route('/')
def index():
    return "Hello from Journal!"
