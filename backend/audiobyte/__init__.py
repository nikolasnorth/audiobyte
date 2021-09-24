from flask import Flask


def create_app():
  app = Flask(__name__)

  from audiobyte.api.v1 import v1
  app.register_blueprint(v1)

  return app
