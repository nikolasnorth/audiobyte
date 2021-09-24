from audiobyte.api.v1.auth.routes import auth
from flask import Blueprint

v1 = Blueprint("v1", __name__, url_prefix="/api/v1")
v1.register_blueprint(auth)
