import pandas as pd
import sqlalchemy

engine = sqlalchemy.create_engine("postgresql://ubuntu:password@3.17.77.33/sportdoc")
con = engine.connect()

players = pd.read_csv(r"C:\Users\henry\Downloads\people.csv")
players.to_sql("mlb_chadwick", con, if_exists='append')