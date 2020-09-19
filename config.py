from os import environ, path

# from dotenv import load_dotenv

basedir = path.abspath(path.dirname(__file__))
db_name = "database.db"


# load_dotenv(path.join(basedir, '.env'))


class Config:
    """Set Flask configuration variables from .env file."""
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True

    # General Flask Config
    ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
    UPLOAD_FOLDER = basedir + '/backend/resources'
    SECRET_KEY = environ.get('SECRET_KEY')
    FLASK_ENV = environ.get('FLASK_ENV')
    FLASK_APP = 'wsgi.py'
    FLASK_DEBUG = 1

    # Database
    SQLALCHEMY_DATABASE_URI = environ.get("DATABASE_URL")
    print(SQLALCHEMY_DATABASE_URI)
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True


class LocalConfig(Config):
    DEBUG = True
    TESTING = True
    CSRF_ENABLED = True

    # Database
    SQLALCHEMY_DATABASE_URI = 'sqlite:///resources/' + db_name
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
