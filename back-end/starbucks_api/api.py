import logging
from flask import Flask
from flask_restful import Api

from database.database import db
from resources.shops_resource import ShopsResource, SHOPS_ENDPOINT
from resources.kMeansCluster import ClusterisedShopsResource, KSHOPS_ENDPOINT


def create_app(db_location):
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

    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = db_location
    db.init_app(app)

    api = Api(app)
    api.add_resource(ShopsResource, SHOPS_ENDPOINT, f"{SHOPS_ENDPOINT}/<id>")
    api.add_resource(ClusterisedShopsResource, SHOPS_ENDPOINT,
                     f"{KSHOPS_ENDPOINT}")
    return app


if __name__ == "__main__":
    app = create_app("postgresql://postgres:postgres@localhost/shops")
    app.run(debug=True)