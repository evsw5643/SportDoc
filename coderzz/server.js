const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

const { Pool } = require('pg');

app.use(bodyParser.json());

const pool = new Pool({
    host: '3.17.77.33',
    user: 'ubuntu',
    password: 'password',
    database: 'sportdoc',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});

// Tables: teams, players

//! Basketball
app.get('/basketball/getteam/:team', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT * FROM nba_teams WHERE abbreviation = '${req.params.team}'`, (err, reso) => {
            done();
            if (err) {
                console.log(err.stack);
            } else {
                res.send(reso.rows);
            }
        });
    });
});

app.get('/basketball/getplayer/:player', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT * FROM nba_players WHERE player_id = '${req.params.player}' AND year = 2020`, (err, reso) => {
            done();
            if (err) {
                console.log(err.stack);
            } else {
                res.send(reso.rows);
            }
        });
    });
});

app.get('/basketball/getteams', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT name, abbreviation FROM nba_teams WHERE year=2020`, (err, reso) => {
            done();
            if (err) {
                console.log(err.stack);
            } else {
                res.send(reso.rows);
            }
        });
    });
});

app.get('/basketball/getplayers', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT player_name, player_id, team FROM nba_players WHERE year=2020 and index='Career'`, (err, reso) => {
            done();
            if (err) {
                console.log(err.stack);
            } else {
                res.send(reso.rows);
            }
        });
    });
});

//! Football
app.get('/football/getteam/:team', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT * FROM nfl_teams WHERE abbreviation = '${req.params.team}'`, (err, reso) => {
            done();
            if (err) {
                console.log(err.stack);
            } else {
                res.send(reso.rows);
            }
        });
    });
});

app.get('/football/getplayer/:player', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT * FROM nfl_players WHERE player_id = '${req.params.player}' AND year = 2020`, (err, reso) => {
            done();
            if (err) {
                console.log(err.stack);
            } else {
                res.send(reso.rows);
            }
        });
    });
});

app.get('/football/getteams', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT name, abbreviation FROM nfl_teams WHERE year=2011`, (err, reso) => {
            done();
            if (err) {
                console.log(err.stack);
            } else {
                res.send(reso.rows);
            }
        });
    });
});

app.get('/football/getplayers', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT player_name, player_id, team FROM nfl_players WHERE year=2011 and index='Career'`, (err, reso) => {
            done();
            if (err) {
                console.log(err.stack);
            } else {
                res.send(reso.rows);
            }
        });
    });
});

//! Hockey
app.get('/hockey/getteam/:team', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT * FROM nhl_teams WHERE abbreviation = '${req.params.team}'`, (err, reso) => {
            done();
            if (err) {
                console.log(err.stack);
            } else {
                res.send(reso.rows);
            }
        });
    });
});

app.get('/hockey/getplayer/:player', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT * FROM nhl_players WHERE player_id = '${req.params.player}' AND year = 2020`, (err, reso) => {
            done();
            if (err) {
                console.log(err.stack);
            } else {
                res.send(reso.rows);
            }
        });
    });
});

app.get('/hockey/getteams', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT name, abbreviation FROM nhl_teams WHERE year=2017`, (err, reso) => {
            done();
            if (err) {
                console.log(err.stack);
            } else {
                res.send(reso.rows);
            }
        });
    });
});

app.get('/hockey/getplayers', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT player_name, player_id, team FROM nhl_players WHERE year=2017 and index='Career'`, (err, reso) => {
            done();
            if (err) {
                console.log(err.stack);
            } else {
                res.send(reso.rows);
            }
        });
    });
});

//! Soccer
app.get('/soccer/getteam/:team', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT * FROM soccer_teams WHERE abbreviation = '${req.params.team}'`, (err, reso) => {
            done();
            if (err) {
                console.log(err.stack);
            } else {
                res.send(reso.rows);
            }
        });
    });
});

app.get('/soccer/getplayer/:player', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT * FROM soccer_players WHERE player_id = '${req.params.player}' AND year = 2020`, (err, reso) => {
            done();
            if (err) {
                console.log(err.stack);
            } else {
                res.send(reso.rows);
            }
        });
    });
});

app.get('/soccer/getteams', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT name, abbreviation FROM soccer_teams WHERE year=2020`, (err, reso) => {
            done();
            if (err) {
                console.log(err.stack);
            } else {
                res.send(reso.rows);
            }
        });
    });
});

app.get('/soccer/getplayers', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT player_name, player_id, team FROM soccer_players WHERE year=2020 and index='Career'`, (err, reso) => {
            done();
            if (err) {
                console.log(err.stack);
            } else {
                res.send(reso.rows);
            }
        });
    });
});

//! Baseball
app.get('/baseball/getteam/:team', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT * FROM mlb_teams WHERE abbreviation = '${req.params.team}'`, (err, reso) => {
            done();
            if (err) {
                console.log(err.stack);
            } else {
                res.send(reso.rows);
            }
        });
    });
});

app.get('/baseball/getplayer/:player', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT * FROM mlb_players WHERE player_id = '${req.params.player}' AND year = 2020`, (err, reso) => {
            done();
            if (err) {
                console.log(err.stack);
            } else {
                res.send(reso.rows);
            }
        });
    });
});

app.get('/baseball/getteams', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT name, abbreviation FROM mlb_teams WHERE year=2020`, (err, reso) => {
            done();
            if (err) {
                console.log(err.stack);
            } else {
                res.send(reso.rows);
            }
        });
    });
});

app.get('/baseball/getplayers', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT player_name, player_id, team FROM mlb_players WHERE year=2020 and index='Career'`, (err, reso) => {
            done();
            if (err) {
                console.log(err.stack);
            } else {
                res.send(reso.rows);
            }
        });
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
