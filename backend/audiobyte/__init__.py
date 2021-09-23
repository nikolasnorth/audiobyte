from flask import Flask


def create_app():
  app = Flask(__name__)

  from audiobyte.api.v1.routes import api as v1_api
  app.register_blueprint(v1_api)

  return app
