# ATTENTION! Do not run this file unless you want to reset the database and re grab all the data!
import time
from datetime import datetime

import sqlalchemy  # Package for accessing SQL databases via Python
from sportsreference.mlb.boxscore import Boxscores

games = Boxscores(datetime(2019, 9, 1), datetime(2020, 6, 1))
print(games.games)
