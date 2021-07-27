import logging
import json
import os
from flask import Flask
from models.shop import Starbucks
from models.user import Users
import extensions
from extensions import db
import resources
from werkzeug.middleware.proxy_fix import ProxyFix

logger = logging.getLogger(__name__)


def create_app():
    """
    This function creates the Flask app, Flask-RESTful API, and Flask-SQLAlchemy connection
    :param db_location : Connection string to the  database
    :return Initialized Flask App"""
   
    env_flask_config_name = os.getenv('APP_SETTINGS')

    app = Flask(__name__, instance_relative_config=True)
    app.wsgi_app = ProxyFix(app.wsgi_app)
    app.config.from_object(env_flask_config_name)
    
    # app.config.from_pyfile('flask.cfg') ## Testing purpose

    extensions.init_app(app)
    resources.initiate_app(app)

    populate_db(app)
    seed_db(app)


    return app

def populate_db(app):
    
    logger.info("initializing db")
    app.app_context().push()
    db.create_all()

    shops = open('database/points.json', 'r')
    data = json.load(shops)

    print("Type: ", type(data))
    for obj in data:
        shop = Starbucks(
            obj['lon'],
            obj['lat'],
            obj['sqmt'],
            obj['city'],
            obj['address'],
            obj['color']
        )
    
        db.session.add(shop)
    db.session.commit()
    
def seed_db(app):

    """Seeds the database."""
    app.app_context().push()
    try:
 
        db.session.add(
            Users(username='administrator',
                email='administrator@gmail.com',
                password='verysecurepassword',
                admin= True))
        db.session.commit()
    except Exception as error:
        logger.exception(error)


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True,host='0.0.0.0')
