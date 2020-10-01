from sportsreference.nba.teams import Teams

import sqlalchemy  # Package for accessing SQL databases via Python

# Connect to database (Note: The package psychopg2 is required for Postgres to work with SQLAlchemy)
engine = sqlalchemy.create_engine("postgresql://ubuntu:password@3.17.77.33/sportdoc")
con = engine.connect()

# Verify that there are no existing tables
print(engine.table_names())

players = None

allframes = None
for year in range(1965, 2021):
    teams = Teams(2020)
    frames = teams.dataframes
    frames['year'] = year
    if allframes is None:
        allframes = frames
    else:
        allframes = allframes.append(frames)

    for team in teams:
        for player in team.roster.players:
            pdf = player.dataframe
            pdf['year'] = year
            pdf['team'] = team.name
            pdf['player_name'] = player.name
            if players is None:
                players = pdf
            else:
                players.append(pdf)

allframes.to_sql("teams", con)
players.to_sql("players", con)
con.close()
