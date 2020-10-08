# ATTENTION! Do not run this file unless you want to reset the database and re grab all the data!
import time
from datetime import datetime

import sqlalchemy  # Package for accessing SQL databases via Python
from sportsreference.mlb.boxscore import Boxscores
from sportsreference.nba.teams import Teams

import pandas as pd

# Connect to database (Note: The package psychopg2 is required for Postgres to work with SQLAlchemy)
engine = sqlalchemy.create_engine("postgresql://ubuntu:password@3.17.77.33/sportdoc")
con = engine.connect()

# Verify that there are no existing tables
print(engine.table_names())


def do_year(year):
    try:
        teams = Teams(year)
        frames = teams.dataframes
        frames['year'] = year

        frames.to_sql("teams", con, if_exists='append')
    except:
        time.sleep(5 * 60)
        teams = Teams(year)
        frames = teams.dataframes
        frames['year'] = year

        frames.to_sql("teams", con, if_exists='append')

    for team in teams:
        do_players(team)

    try:
        do_games()
    except:
        time.sleep(5 * 60)
        do_games()


def do_players(team):
    for player in team.roster.players:
        try:
            pdf = player.dataframe
            pdf['year'] = year
            pdf['team'] = team.name
            pdf['player_name'] = player.name
            pdf.to_sql("players", con, if_exists='append')
        except:
            time.sleep(5 * 60)
            pdf = player.dataframe
            pdf['year'] = year
            pdf['team'] = team.name
            pdf['player_name'] = player.name
            pdf.to_sql("players", con, if_exists='append')

def do_games():
    games = Boxscores(datetime(year, 1, 1), datetime(year + 1, 1, 1))
    pd.DataFrame(games.games).to_sql("games", con, if_exists='append')


for year in range(2011, 2021):
    try:
        do_year(year)
    except:
        time.sleep(60 * 5)
        do_year(year)

con.close()
