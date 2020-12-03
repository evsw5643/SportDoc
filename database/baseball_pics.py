import pandas as pd
import sqlalchemy

engine = sqlalchemy.create_engine("postgresql://ubuntu:password@3.17.77.33/sportdoc")
con = engine.connect()

df = pd.read_csv(r"C:\Users\henry\Downloads\people.csv", low_memory=False)

n = 500
list_df = [df[i:i+n] for i in range(0,df.shape[0],n)]
for pdf in list_df:
    pdf.to_sql("mlb_chadwick", con, if_exists='append')