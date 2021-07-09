from marshmallow import Schema, fields, post_load
import os
import sys
sys.path.append(os.path.realpath('.'))
from models.shop import Starbucks


class ShopSchema(Schema):
    """ Shop Marshmallow Schema"""
    shop_id = fields.Integer(allow_none=False)
    lon = fields.Integer(allow_none=False)
    lat = fields.Integer(allow_none=False)
    sqmt = fields.Integer(allow_none=False)
    city = fields.String(allow_none=False)
    address = fields.String(allow_none=False)
    color = fields.String(allow_none=False)
    @post_load
    def make_shop(self,data,**kwargs):
        return Starbucks(**data)
