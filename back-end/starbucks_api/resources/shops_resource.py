import logging

from flask import request
from flask_restful import Resource, abort
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm.exc import NoResultFound
import os
import sys
sys.path.append(os.path.realpath('.'))
from database.database import db
from models.shop import Starbucks
from schemas.shopSchema import ShopSchema


SHOPS_ENDPOINT = "/api/shops"
logger = logging.getLogger(__name__)


class ShopsResource(Resource):
    def get(self, id=None):
        """
        ShopsResource GET method. Retrieves all shops found in the shops database, 
        unless the id path parameter is provided. If this id
        is provided then the shop with the associated shop_id is retrieved.

        :param id: Shop ID to retrieve, this path parameter is optional
        :return: Shop, 200 HTTP status code
        """
        if not id:
            city = request.args.get("city")
            logger.info(
                f"Retrieving all shops, optionally filtered by city={city}"
            )

            return self._get_all_shops(city), 200

        logger.info(f"Retrieving shop by id {id}")

        try:
            return self._get_shop_by_id(id), 200
        except NoResultFound:
            abort(404, message="Shop not found")

    def _get_shop_by_id(self, shop_id):
        shop = Starbucks.query.filter_by(shop_id=shop_id).first()
        shop_json = ShopSchema().dump(shop)

        if not shop_json:
            raise NoResultFound()

        logger.info(f"Shop retrieved from database {shop_json}")
        return shop_json

    def _get_all_shops(self, city):
        if city:
            shops = Starbucks.query.filter_by(city=city).all()
        else:
            shops = Starbucks.query.all()

        shop_json = [ShopSchema().dump(shop) for shop in shops]

        logger.info("Shops successfully retrieved.")
        return shop_json

    def post(self):
        """
        ShopsResource POST method. Adds a new Shop to the database.

        :return: Shop.shop_id, 201 HTTP status code.
        """
        shop = ShopSchema().load(request.get_json())

        try:
            db.session.add(shop)
            db.session.commit()
        except IntegrityError as e:
            logger.warning(
                f"Integrity Error, this shop is already in the database. Error: {e}"
            )

            abort(500, message="Unexpected Error!")
        else:
            return shop.shop_id, 201

