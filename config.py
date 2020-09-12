from os import environ, path

# from dotenv import load_dotenv

basedir = path.abspath(path.dirname(__file__))
db_name = "database.db"


# load_dotenv(path.join(basedir, '.env'))


class Config:
    """Set Flask configuration variables from .env file."""

    # General Flask Config
    ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
    UPLOAD_FOLDER = basedir + '/backend/resources'
    SECRET_KEY = environ.get('SECRET_KEY')
    FLASK_ENV = environ.get('FLASK_ENV')
    FLASK_APP = 'wsgi.py'
    FLASK_DEBUG = 1

    # Database
    SQLALCHEMY_DATABASE_URI = environ.get("SQLALCHEMY_DATABASE_URI") or 'sqlite:///' + path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True


class LocalConfig:
    # General Flask Config
    ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
    UPLOAD_FOLDER = basedir + '/backend/resources'
    SECRET_KEY = environ.get('SECRET_KEY')
    FLASK_ENV = environ.get('FLASK_ENV')
    FLASK_APP = 'wsgi.py'
    FLASK_DEBUG = 1

    # Database
    SQLALCHEMY_DATABASE_URI = 'sqlite:///resources/' + db_name
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
