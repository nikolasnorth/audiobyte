from flask import Blueprint, jsonify, request
from audiobyte.api.errors import INVALID_JSON_REQUEST, MISSING_REQUIRED_JSON
from typing import Optional

auth = Blueprint("auth", __name__, url_prefix="/auth")


@auth.route("/signup", methods=["POST"])
def signup():
  required_fields = {"username", "password"}
  data: Optional[dict] = request.get_json(silent=True)
  if not data:
    code, msg = INVALID_JSON_REQUEST
    return jsonify({"error": msg}), code
  if not required_fields.issubset(data.keys()):
    code, msg = MISSING_REQUIRED_JSON
    return jsonify({"error": msg}), code
  return jsonify({
    "username": data["username"],
    "password": data["password"],
  })


@auth.route("/signin", methods=["POST"])
def signin():
  required_fields = {"username", "password"}
  data: Optional[dict] = request.get_json(silent=True)
  if not data:
    code, msg = INVALID_JSON_REQUEST
    return jsonify({"error": msg}), code
  if not required_fields.issubset(data.keys()):
    code, msg = MISSING_REQUIRED_JSON
    return jsonify({"error": msg}), code
  return jsonify({
    "username": data["username"],
    "password": data["password"],
  })
