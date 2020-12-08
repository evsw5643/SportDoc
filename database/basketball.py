# ATTENTION! Do not run this file unless you want to reset the database and re grab all the data!
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


def do_basketball():
    engine = sqlalchemy.create_engine("postgresql://ubuntu:password@3.17.77.33/sportdoc")
    con = engine.connect()

    def do_year(year):
        # engine = sqlalchemy.create_engine("postgresql://ubuntu:password@3.17.77.33/sportdoc")
        # con = engine.connect()
        try:
            teams = NBATeams(year=year)
            frames = teams.dataframes
            frames['year'] = year
            try:
                frames.to_sql("nba_teams", con, if_exists='append')
            except:
                traceback.print_exc()
        except Exception as e:
            traceback.print_exc()
            time.sleep(timeout)
            teams = NBATeams(year=year)
            frames = teams.dataframes
            frames['year'] = year

            try:
                frames.to_sql("nba_teams", con, if_exists='append')
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
                player._season = player._season or []
                pdf = player.dataframe
                pdf['year'] = year
                pdf['team'] = team.name
                pdf['player_name'] = player.name
                pdf['birth_date'] = player.birth_date
                try:
                    pdf.to_sql("nba_players", con, if_exists='append')
                except:
                    traceback.print_exc()
            except Exception as e:
                traceback.print_exc()
                time.sleep(timeout)
                pdf = player.dataframe
                pdf['year'] = year
                pdf['team'] = team.name
                pdf['player_name'] = player.name
                pdf['birth_date'] = player.birth_date
                try:
                    pdf.to_sql("nba_players", con, if_exists='append')
                except:
                    traceback.print_exc()

    def do_games():
        games = NBABoxscores(datetime(year, 9, 1), datetime(year + 1, 7, 1))
        ngames = []
        for month, games in games.games.items():
            for game in games:
                game["date"] = datetime.strptime(month, "%m-%d-%Y")
                ngames.append(game)

        df = pd.DataFrame(ngames)
        try:
            df.to_sql("nba_games", con, if_exists='append')
        except:
            traceback.print_exc()

    for year in range(2020, 2021):
        try:
            do_year(year)
        except Exception as e:
            traceback.print_exc()
            time.sleep(timeout)
            do_year(year)

    con.close()


do_basketball()
