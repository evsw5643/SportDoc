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


def do_hockey():
    engine = sqlalchemy.create_engine("postgresql://ubuntu:password@3.17.77.33/sportdoc")
    con = engine.connect()

    def do_year(year):
        try:
            teams = NHLTeams(year)
            frames = teams.dataframes
            frames['year'] = year

            frames.to_sql("nhl_teams", con, if_exists='append')
        except Exception as e:
            traceback.print_exc()
            time.sleep(timeout)
            teams = NHLTeams(year)
            frames = teams.dataframes
            frames['year'] = year

            frames.to_sql("nhl_teams", con, if_exists='append')

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
                pdf['year'] = year
                pdf['team'] = team.name
                pdf['player_name'] = player.name
                pdf.to_sql("nhl_players", con, if_exists='append')
            except Exception as e:
                traceback.print_exc()
                time.sleep(timeout)
                pdf = player.dataframe
                pdf['year'] = year
                pdf['team'] = team.name
                pdf['player_name'] = player.name
                pdf.to_sql("nhl_players", con, if_exists='append')

    def do_games():
        games = NHLBoxscores(datetime(year, 10, 2), datetime(year + 1, 9, 28))
        ngames = []
        for month, games in games.games.items():
            for game in games:
                game["date"] = datetime.strptime(month, "%m-%d-%Y")
                ngames.append(game)

        df = pd.DataFrame(ngames)
        df.to_sql("nhl_games", con, if_exists='append')

    for year in range(2011, 2021):
        try:
            do_year(year)
        except Exception as e:
            traceback.print_exc()
            time.sleep(timeout)
            do_year(year)

    con.close()


def do_basketball():
    engine = sqlalchemy.create_engine("postgresql://ubuntu:password@3.17.77.33/sportdoc")
    con = engine.connect()

    def do_year(year):
        try:
            teams = NBATeams(year)
            frames = teams.dataframes
            frames['year'] = year

            frames.to_sql("nba_teams", con, if_exists='append')
        except Exception as e:
            traceback.print_exc()
            time.sleep(timeout)
            teams = NBATeams(year)
            frames = teams.dataframes
            frames['year'] = year

            frames.to_sql("nba_teams", con, if_exists='append')

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
                pdf['year'] = year
                pdf['team'] = team.name
                pdf['player_name'] = player.name
                pdf['birth_date'] = player.birth_date
                pdf.to_sql("nba_players", con, if_exists='append')
            except Exception as e:
                traceback.print_exc()
                time.sleep(timeout)
                pdf = player.dataframe
                pdf['year'] = year
                pdf['team'] = team.name
                pdf['player_name'] = player.name
                pdf['birth_date'] = player.birth_date
                pdf.to_sql("nba_players", con, if_exists='append')

    def do_games():
        games = NBABoxscores(datetime(year, 9, 1), datetime(year + 1, 7, 1))
        ngames = []
        for month, games in games.games.items():
            for game in games:
                game["date"] = datetime.strptime(month, "%m-%d-%Y")
                ngames.append(game)

        df = pd.DataFrame(ngames)
        df.to_sql("nba_games", con, if_exists='append')

    for year in range(2011, 2021):
        try:
            do_year(year)
        except Exception as e:
            traceback.print_exc()
            time.sleep(timeout)
            do_year(year)

    con.close()


sfields = ['squad_id', 'name', 'season', 'record', 'position', 'points', 'league', 'manager',
           'country', 'gender', 'goals_scored', 'goals_against', 'goal_difference', 'expected_goals',
           'expected_goals_against', 'expected_goal_difference', 'home_record', 'home_games', 'away_record',
           'away_games', 'home_wins', 'home_draws', 'home_losses', 'away_wins', 'away_draws', 'away_losses',
           'home_points', 'away_points']


def do_soccer():
    engine = sqlalchemy.create_engine("postgresql://ubuntu:password@3.17.77.33/sportdoc")
    con = engine.connect()
    FBTeam.dataframe = property(lambda self: pd.DataFrame([self.__dict__]))

    def do_team(team):
        try:
            df = pd.DataFrame([{field: getattr(team, field) for field in sfields}])
            df.to_sql("soccer_teams", con, if_exists='append')
        except Exception as e:
            traceback.print_exc()
            time.sleep(timeout)
            df = pd.DataFrame([{field: getattr(team, field) for field in sfields}])
            df.to_sql("soccer_teams", con, if_exists='append')

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
                pdf.to_sql("soccer_players", con, if_exists='append')
            except Exception as e:
                traceback.print_exc()
                time.sleep(timeout)
                pdf = player.dataframe
                pdf['team'] = team.name
                pdf['player_name'] = player.name
                pdf.to_sql("soccer_players", con, if_exists='append')

    def do_games(team):
        games = team.schedule
        ngames = []
        for game in games:
            ngames.append(game.dataframe)

        df = pd.DataFrame(ngames)
        df.to_sql("soccer_games", con, if_exists='append')

    for tid in squad_ids.SQUAD_IDS.values():
        try:
            do_team(FBTeam(tid))
        except Exception as e:
            traceback.print_exc()
            time.sleep(timeout)
            do_team(FBTeam(tid))

    con.close()


def do_football():
    engine = sqlalchemy.create_engine("postgresql://ubuntu:password@3.17.77.33/sportdoc")
    con = engine.connect()

    def do_year(year):
        try:
            teams = NFLTeams(year)
            frames = teams.dataframes
            frames['year'] = year

            frames.to_sql("nfl_teams", con, if_exists='append')
        except Exception as e:
            traceback.print_exc()
            time.sleep(timeout)
            teams = NFLTeams(year)
            frames = teams.dataframes
            frames['year'] = year

            frames.to_sql("nfl_teams", con, if_exists='append')

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
                pdf.to_sql("nfl_players", con, if_exists='append')
            except Exception as e:
                traceback.print_exc()
                time.sleep(timeout)
                pdf = player.dataframe
                pdf['year'] = year
                pdf['team'] = team.name
                pdf['player_name'] = player.name
                pdf.to_sql("nfl_players", con, if_exists='append')

    def do_games():
        games = NFLBoxscores(datetime(year, 9, 1), datetime(year + 1, 2, 1))
        ngames = []
        for month, games in games.games.items():
            for game in games:
                game["date"] = datetime.strptime(month, "%m-%d-%Y")
                ngames.append(game)

        df = pd.DataFrame(ngames)
        df.to_sql("nfl_games", con, if_exists='append')

    for year in range(2011, 2021):
        try:
            do_year(year)
        except Exception as e:
            traceback.print_exc()
            time.sleep(timeout)
            do_year(year)

    con.close()


def do_baseball():
    engine = sqlalchemy.create_engine("postgresql://ubuntu:password@3.17.77.33/sportdoc")
    con = engine.connect()

    def do_year(year):
        try:
            teams = MLBTeams(year)
            frames = teams.dataframes
            frames['year'] = year

            frames.to_sql("mlb_teams", con, if_exists='append')
        except Exception as e:
            traceback.print_exc()
            time.sleep(timeout)
            teams = MLBTeams(year)
            frames = teams.dataframes
            frames['year'] = year

            frames.to_sql("mlb_teams", con, if_exists='append')

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
                pdf['year'] = year
                pdf['team'] = team.name
                pdf['player_name'] = player.name
                pdf.to_sql("mlb_players", con, if_exists='append')
            except Exception as e:
                traceback.print_exc()
                time.sleep(timeout)
                pdf = player.dataframe
                pdf['year'] = year
                pdf['team'] = team.name
                pdf['player_name'] = player.name
                pdf.to_sql("mlb_players", con, if_exists='append')

    def do_games():
        games = MLBBoxscores(datetime(year, 9, 1), datetime(year + 1, 2, 1))
        ngames = []
        for month, games in games.games.items():
            for game in games:
                game["date"] = datetime.strptime(month, "%m-%d-%Y")
                ngames.append(game)

        df = pd.DataFrame(ngames)
        df.to_sql("mlb_games", con, if_exists='append')

    for year in range(2011, 2021):
        try:
            do_year(year)
        except Exception as e:
            traceback.print_exc()
            time.sleep(timeout)
            do_year(year)

    con.close()


from threading import Thread

t1 = Thread(target=do_basketball)
t2 = Thread(target=do_hockey)
t3 = Thread(target=do_football)
t4 = Thread(target=do_baseball)
t5 = Thread(target=do_soccer)

t1.start()
t2.start()
t3.start()
t4.start()
t5.start()

t1.join()
t2.join()
t3.join()
t4.join()
t5.join()
