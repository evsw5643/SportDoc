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

app.get('basketball/getplayer/:player', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT * FROM nba_players WHERE player_id = '${req.params.player}' AND index = 'Career'`, (err, reso) => {
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
