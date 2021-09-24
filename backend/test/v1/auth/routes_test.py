from audiobyte import create_app

url = "/api/v1/auth"


def test_index():
  app = create_app()
  with app.test_client() as client:
    res = client.get(f"{url}/")
    assert res.status_code == 200


def test_signup():
  app = create_app()
  with app.test_client() as client:
    res = client.get(f"{url}/signup")
    assert res.status_code == 200


def test_signin():
  app = create_app()
  with app.test_client() as client:
    res = client.get(f"{url}/signin")
    assert res.status_code == 200
