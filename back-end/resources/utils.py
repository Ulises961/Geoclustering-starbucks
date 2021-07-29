import logging
from functools import wraps
from flask import request, jsonify
from models.user import Users

log = logging.getLogger(__name__)


def authenticate(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        response_object = {
            'status': 'fail',
            'message': 'Provide a valid auth token.'
        }
        auth_header = request.headers.get("Authorization")
        if not auth_header:
            return jsonify(response_object), 403

        auth_token = auth_header.split(" ")[1]
        resp = Users.decode_auth_token(auth_token)
        if isinstance(resp, str):
            response_object['message'] = resp
            return jsonify(response_object), 401

        user = Users.query.filter_by(user_id=resp).first()
        if not user or not user.active:
            return jsonify(response_object), 401
        return f(user, *args, **kwargs)

    return decorated_function


def authenticate_restful(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        response_object = {
            'status': 'fail',
            'message': 'Provide a valid auth token.'
        }
        auth_header = request.headers.get("Authorization")
        log.debug(auth_header)
        if not auth_header:
            return response_object, 403
        auth_token = auth_header.split(" ")[1]
        resp = Users.decode_auth_token(auth_token)
        log.debug(resp)
        if isinstance(resp, str):
            response_object['message'] = resp
            return response_object, 401
        user = Users.query.filter_by(user_id=resp).first()
        if not user or not user.active:
            return response_object, 401
        return f(*args, **kwargs)

    return decorated_function
