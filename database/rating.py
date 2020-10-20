# ATTENTION! Do not run this file unless you want to reset the database and re grab all the data!
import time
from datetime import datetime
import pandas as pd
import trueskill

from sportsreference.mlb.boxscore import Boxscores

def do_games(year):
    games = Boxscores(datetime(year, 9, 1), datetime(year + 1, 7, 1))
    ngames = []
    for month, games in games.games.items():
        for game in games:
            game["month"] = datetime.strptime(month, "%m-%d-%Y")
            ngames.append(game)

    df = pd.DataFrame(ngames)
    return df

df = do_games(2019)
# for year in range(2011, 2021):
#     df.append(do_games(year))

teams = set(df["away_name"]) | set(df["home_name"])

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
