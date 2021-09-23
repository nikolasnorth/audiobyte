from flask import Blueprint, jsonify

api = Blueprint("v1", __name__, url_prefix="/api/v1")


@api.route("/")
def get_index():
  return jsonify({"message": "hello world"})
