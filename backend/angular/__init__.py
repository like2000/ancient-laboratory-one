import pathlib

from flask import Blueprint

name = pathlib.Path(__file__).parent.name

blueprint = Blueprint(
    name + '_blue', __name__,
    static_url_path='',
    static_folder='static',
    template_folder='static',
)
