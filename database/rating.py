# ATTENTION! Do not run this file unless you want to reset the database and re grab all the data!
import time
from datetime import datetime
import pandas as pd

from sportsreference.mlb.boxscore import Boxscores

year = 2019
def do_games():
    games = Boxscores(datetime(year, 9, 1), datetime(year + 1, 7, 1))
    ngames = []
    for month, games in games.games.items():
        for game in games:
            game["month"] = datetime.strptime(month, "%m-%d-%Y")
            ngames.append(game)

    df = pd.DataFrame(ngames)
    print(df.head())

do_games()


# import sqlalchemy  # Package for accessing SQL databases via Python
#
#
# engine = sqlalchemy.create_engine("postgresql://ubuntu:password@3.17.77.33/sportdoc")
# con = engine.connect()
#
# sel = sqlalchemy.select()
# con.execute(sel)
#
# con.close()
