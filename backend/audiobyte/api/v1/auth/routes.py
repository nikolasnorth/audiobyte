from flask import Blueprint, jsonify

auth = Blueprint("auth", __name__, url_prefix="/auth")


@auth.route("/")
def get_auth():
  return jsonify({"message": "hello from /auth"})


@auth.route("/signup")
def signup():
  return jsonify({"message": "hello from /auth/signup"})


@auth.route("/signin")
def signin():
  return jsonify({"message": "hello from /auth/signin"})
