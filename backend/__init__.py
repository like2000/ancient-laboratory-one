from importlib import import_module

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db: SQLAlchemy = SQLAlchemy()


def register_extensions(server: Flask):
    ...


def register_blueprints(server: Flask):
    for module_name in ('angular', 'chronicles', 'files', 'journal'):
        module = import_module(f'backend.{module_name}.routes')
        server.register_blueprint(module.blueprint)
        # server.register_blueprint(module.blueprint, url_prefix=f'/{module_name}')


def create_app():
    server = Flask(__name__)
    server.config['CORS_HEADERS'] = 'Content-Type'  # <= seems to make a difference on loading cards...!?
    # server.config.from_object('config.LocalConfig')
    server.config.from_object('config.Config')

    with server.app_context():
        register_blueprints(server)
        db.init_app(server)
        db.create_all()

        return server
