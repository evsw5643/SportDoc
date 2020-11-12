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
timeout = 60

sfields = ['squad_id', 'name', 'season', 'record', 'position', 'points', 'league', 'manager',
           'country', 'gender', 'goals_scored', 'goals_against', 'goal_difference', 'expected_goals',
           'expected_goals_against', 'expected_goal_difference', 'home_record', 'home_games', 'away_record',
           'away_games', 'home_wins', 'home_draws', 'home_losses', 'away_wins', 'away_draws', 'away_losses',
           'home_points', 'away_points']



def do_soccer():
    engine = sqlalchemy.create_engine("postgresql://ubuntu:password@3.17.77.33/sportdoc")
    con = engine.connect()
    # FBTeam.dataframe = property(lambda self: pd.DataFrame([self.__dict__]))

    def do_team(team):
        try:
            df = pd.DataFrame([{field: getattr(team, field) for field in sfields}])
            try:
                df.to_sql("soccer_teams", con, if_exists='append')
            except:
                traceback.print_exc()
        except Exception as e:
            traceback.print_exc()
            time.sleep(timeout)
            df = pd.DataFrame([{field: getattr(team, field) for field in sfields}])
            try:
                df.to_sql("soccer_teams", con, if_exists='append')
            except:
                traceback.print_exc()

        try:
            do_players(team)
        except:
            traceback.print_exc()
            time.sleep(timeout)
            do_players(team)

        try:
            do_games(team)
        except Exception as e:
            traceback.print_exc()
            time.sleep(timeout)
            do_games(team)

    def do_players(team):
        for player in team.roster:
            try:
                pdf = player.dataframe
                if pdf is None:
                    continue
                pdf['team'] = team.name
                pdf['player_name'] = player.name
                try:
                    pdf.to_sql("soccer_players", con, if_exists='append')
                except:
                    traceback.print_exc()
            except Exception as e:
                traceback.print_exc()
                time.sleep(timeout)
                pdf = player.dataframe
                pdf['team'] = team.name
                pdf['player_name'] = player.name
                try:
                    pdf.to_sql("soccer_players", con, if_exists='append')
                except:
                    traceback.print_exc()

    def do_games(team):
        games = team.schedule
        ngames = []
        for game in games:
            ngames.append(game.dataframe)

        df = pd.DataFrame(ngames)
        try:
            df.to_sql("soccer_games", con, if_exists='append')
        except:
            traceback.print_exc()

    for tid in squad_ids.SQUAD_IDS.values():
        try:
            do_team(FBTeam(tid))
        except Exception as e:
            traceback.print_exc()
            time.sleep(timeout)
            do_team(FBTeam(tid))

    con.close()

do_soccer()