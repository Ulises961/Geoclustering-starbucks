import logging
from flask import Blueprint, request
from flask_restful import Resource, Api
import os
import sys
sys.path.append(os.path.realpath('.'))
from .utils import authenticate_restful
from schemas.userSchema import UserSchema

log = logging.getLogger(__name__)

users_blueprint = Blueprint('users', __name__)
api = Api(users_blueprint)


class Users(Resource):

    method_decorators = {'get': [authenticate_restful]}

    def get(self, user, token: str, user_id=None):
        """Get single user details"""
        response_object = {'status': 'fail', 'message': 'User does not exist'}
        log.debug(token)
        log.debug(user)
        try:
            if not user:
                return response_object, 404
            
            elif not user_id:
                users= Users.query.all()
                users = [UserSchema().dump(user) for user in users]
                response_object = {'status': 'success', 'data': user}
                return response_object, 200
            else:
                user= Users.query.filter_by(user_id=user_id).first()
                user = UserSchema().dump(user)
                response_object = {'status': 'success', 'data': user}
                return response_object, 200
        except ValueError:
            return response_object, 404
        except Exception as e:
            response_object[
                'message'] = "There's an error while fetch user detail"
            log.error(e)
            return response_object, 500

api.add_resource(Users, '/api/v1/users/<token>')
