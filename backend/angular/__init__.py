import pathlib

from flask import Blueprint

name = pathlib.Path(__file__).parent.name

blueprint = Blueprint(
    name + '_blue', __name__,
    url_prefix='/' + name,
    static_folder='static',
    template_folder='templates',
)
