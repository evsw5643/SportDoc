CREATE TABLE games (
    home text,
    away text,
    date date,
    homepoints int,
    awaypoints int,
)

CREATE TABLE teams (
    year int,
    roster text[],
)

CREATE TABLE players (
    identifier text,
    name text,
    year int,
    points int,
)