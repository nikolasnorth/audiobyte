from audiobyte import create_app

v1: str = "/api/v1"


def test_get_index():
  app = create_app()
  with app.test_client() as client:
    res = client.get(f"{v1}/")
    assert res.status_code == 200
