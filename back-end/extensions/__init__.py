from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from .logging import Logging
from logging.config import dictConfig


logging = Logging()

dictConfig({
    'version': 1,
    'formatters': {'default': {
        'format': '[%(asctime)s] %(levelname)s in %(module)s: %(message)s',
    }},
    'handlers': {'wsgi': {
        'class': 'logging.StreamHandler',
        'formatter': 'default'
    }},
    'root': {
        'level': 'DEBUG',
        'handlers': ['wsgi']
    }
})

cross_origin_resource_sharing = CORS()
db = SQLAlchemy()
bcrypt = Bcrypt()


def init_app(app):
    """
    Application extensions initialization.
    """
    for extension in (
            logging,
            cross_origin_resource_sharing,
            db,
            bcrypt
    ):
        extension.init_app(app)

