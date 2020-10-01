# ATTENTION! Do not run this file unless you want to reset the database and re grab all the data!

from sportsreference.nba.teams import Teams

import sqlalchemy  # Package for accessing SQL databases via Python

# Connect to database (Note: The package psychopg2 is required for Postgres to work with SQLAlchemy)
engine = sqlalchemy.create_engine("postgresql://ubuntu:password@3.17.77.33/sportdoc")
con = engine.connect()

# Verify that there are no existing tables
print(engine.table_names())

for year in range(1965, 2021):
    teams = Teams(year)
    frames = teams.dataframes
    frames['year'] = year

    frames.to_sql("teams", con, if_exists='append')

    for team in teams:
        for player in team.roster.players:
            pdf = player.dataframe
            pdf['year'] = year
            pdf['team'] = team.name
            pdf['player_name'] = player.name
            pdf.to_sql("players", con, if_exists='append')


con.close()
