from backend.database import blueprint


@blueprint.route('/')
def index():
    return "Route to database."
