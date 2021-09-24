from audiobyte.api.v1.auth.routes import auth
from flask import Blueprint

api = Blueprint("v1", __name__, url_prefix="/api/v1")
api.register_blueprint(auth)
