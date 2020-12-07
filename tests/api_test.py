import requests


def test_games():
    resp = requests.get("http://3.17.77.33:3000/basketball/getgames/2016/2017").json()
    print(resp)


test_games()
