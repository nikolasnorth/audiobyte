from audiobyte import create_app
from audiobyte.api.errors import INVALID_JSON_REQUEST, MISSING_REQUIRED_JSON

url = "/api/v1/auth"


def test_index():
  app = create_app()
  with app.test_client() as client:
    res = client.get(f"{url}/")
    assert res.status_code == 200


def test_signup_without_json_mimetype():
  app = create_app()
  with app.test_client() as client:
    res = client.post(f"{url}/signup")
    data = res.get_json()
    err_code, err_msg = INVALID_JSON_REQUEST
    assert res.status_code == err_code
    assert data and data["error"] == err_msg


def test_signup_without_required_field():
  app = create_app()
  with app.test_client() as client:
    res = client.post(f"{url}/signup", json={
      "password": "abc123"
    })
    data = res.get_json()
    err_code, err_msg = MISSING_REQUIRED_JSON
    assert res.status_code == err_code
    assert data and data["error"] == err_msg


def test_signin_without_json_mimetype():
  app = create_app()
  with app.test_client() as client:
    res = client.post(f"{url}/signin")
    data = res.get_json()
    err_code, err_msg = INVALID_JSON_REQUEST
    assert res.status_code == err_code
    assert data and data["error"] == err_msg


def test_signin_without_required_field():
  app = create_app()
  with app.test_client() as client:
    res = client.post(f"{url}/signup", json={
      "password": "abc123"
    })
    data = res.get_json()
    err_code, err_msg = MISSING_REQUIRED_JSON
    assert res.status_code == err_code
    assert data and data["error"] == err_msg
