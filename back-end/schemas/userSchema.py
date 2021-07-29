from marshmallow import Schema, fields, post_load
import os
import sys
sys.path.append(os.path.realpath('.'))
from models.user import Users


class UserSchema(Schema):
    """ User Marshmallow Schema"""
    user_id = fields.Integer(allow_none=False)
    username = fields.String(allow_none=False)
    email = fields.String(allow_none=False)
    active = fields.Boolean(allow_none=False)
    admin = fields.Boolean(allow_none=False)
    @post_load
    def create_user(self,username,password,email):
        return Users(username=username,password=password,email=email)
