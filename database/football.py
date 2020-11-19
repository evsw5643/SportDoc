# ATTENTION! Do not run this file unless you want to reset the database and re grab all the data!
import threading
import time
import traceback
from datetime import datetime

import pandas as pd
import sqlalchemy  # Package for accessing SQL databases via Python
from sportsreference.fb import squad_ids
from sportsreference.fb.team import Team as FBTeam
from sportsreference.mlb.boxscore import Boxscores as MLBBoxscores
from sportsreference.mlb.teams import Teams as MLBTeams
from sportsreference.nba.boxscore import Boxscores as NBABoxscores
from sportsreference.nba.teams import Teams as NBATeams
from sportsreference.nfl.boxscore import Boxscores as NFLBoxscores
from sportsreference.nfl.teams import Teams as NFLTeams
from sportsreference.nhl.boxscore import Boxscores as NHLBoxscores
from sportsreference.nhl.teams import Teams as NHLTeams

# Connect to database (Note: The package psychopg2 is required for Postgres to work with SQLAlchemy)
# engine = sqlalchemy.create_engine("postgresql://ubuntu:password@3.17.77.33/sportdoc")
# con = engine.connect()

# Verify that there are no existing tables
# print(engine.table_names())
timeout = 30


def do_football():
    engine = sqlalchemy.create_engine("postgresql://ubuntu:password@3.17.77.33/sportdoc")
    con = engine.connect()

    def do_year(year):
        # engine = sqlalchemy.create_engine("postgresql://ubuntu:password@3.17.77.33/sportdoc")
        # con = engine.connect()
        try:
            teams = NFLTeams(year=year)
            frames = teams.dataframes
            frames['year'] = year

            try:
                frames.to_sql("nfl_teams", con, if_exists='append')
            except:
                traceback.print_exc()
        except Exception as e:
            traceback.print_exc()
            time.sleep(timeout)
            teams = NFLTeams(year=year)
            frames = teams.dataframes
            frames['year'] = year

            try:
                frames.to_sql("nfl_teams", con, if_exists='append')
            except:
                traceback.print_exc()

        for team in teams:
            do_players(team)

        try:
            do_games()
        except Exception as e:
            traceback.print_exc()
            time.sleep(timeout)
            do_games()

    def do_players(team):
        for player in team.roster.players:
            try:
                pdf = player.dataframe
                if pdf is None:
                    continue
                pdf['year'] = year
                pdf['team'] = team.name
                pdf['player_name'] = player.name
                try:
                    pdf.to_sql("nfl_players", con, if_exists='append')
                except:
                    traceback.print_exc()
            except Exception as e:
                traceback.print_exc()
                time.sleep(timeout)
                pdf = player.dataframe
                pdf['year'] = year
                pdf['team'] = team.name
                pdf['player_name'] = player.name
                try:
                    pdf.to_sql("nfl_players", con, if_exists='append')
                except:
                    traceback.print_exc()

    def do_games():
        games = NFLBoxscores(week=1, year=year, end_week=17)
        ngames = []
        for week, games in games.games.items():
            for game in games:
                game["date"] = datetime.strptime(game['boxscore'][:-4], "%Y%m%d")
                ngames.append(game)

        df = pd.DataFrame(ngames)
        try:
            df.to_sql("nfl_games", con, if_exists='append')
        except:
            traceback.print_exc()

    for year in range(2000, 2021):
        #do_games()
        wraprun(do_year, year)
        # threading.Thread(target=wraprun, args=(do_year, year)).start()

    con.close()


def wraprun(func, *args, **kwargs):
    try:
        func(*args, **kwargs)
    except:
        traceback.print_exc()
        time.sleep(timeout)
        try:
            func(*args, **kwargs)
        except:
            pass


do_football()
