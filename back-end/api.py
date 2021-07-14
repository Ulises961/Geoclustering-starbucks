import logging
from flask_restful import Api
import json

from models.shop import Starbucks 
from database import db, app
from resources.shops_resource import ShopsResource, SHOPS_ENDPOINT
from resources.kMeansCluster import ClusterisedShopsResource, KSHOPS_ENDPOINT

logger = logging.getLogger(__name__)


def create_app():
    """
    This function creates the Flask app, Flask-RESTful API, and Flask-SQLAlchemy connection
    :param db_location : Connection string to the  database
    :return Initialized Flask App"""

    logging.basicConfig(
        level=logging.DEBUG,
        format="%(asctime)s %(name)-12s %(levelname)-8s %(message)s",
        datefmt="%d-%m %H:%M",
        handlers=[
            logging.FileHandler("shops_api.log"),
            logging.StreamHandler()
        ],
    )
    

    populate_db()
     
    db.init_app(app)

    api = Api(app)
    api.add_resource(ShopsResource, SHOPS_ENDPOINT, f"{SHOPS_ENDPOINT}/<id>")
    api.add_resource(ClusterisedShopsResource, SHOPS_ENDPOINT,
                     f"{KSHOPS_ENDPOINT}")
    return app

def populate_db():

    logger.info("initializing db")

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


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True,host='0.0.0.0')
    logger.info(ShopsResource.get())