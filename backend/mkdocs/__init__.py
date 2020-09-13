import pathlib

from flask import Blueprint

name = pathlib.Path(__file__).parent.name

blueprint = Blueprint(
    name, __name__,
    url_prefix='/' + name,
    template_folder='templates',
    static_folder='static',
)
