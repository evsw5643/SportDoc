import React, { useState, useEffect } from 'react';
import "./team_info.css"
import Blank from '../blank.png'
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TeamCharts from '../../Components/Charts/TeamCharts.js';

// var elo = {}
function Team(props) {

  const [elo, setelo] = useState({})
  const [loading, setloading] = useState(true);
  const [team, setteam] = useState([])
  const [sport, setsport] = useState("")

  useEffect(() => {
    setloading(true)
    setsport(props.sport)
    api(props.team, props.sport)
  }, [props.sport, props.team])

  function api(apiTeam, apiSport) {
    fetch(`/${apiSport}/getteam/${apiTeam}`)
      .then(res => res.json())
      .then(
        (result) => {
          setteam(result)
          getEloScores(2019, 2019)
        },
        (error) => {
          console.log(error)
          setloading(false)
        }
      )
  }

  const Elo = (function () {
    function getRatingDelta(myRating, opponentRating, myGameResult) {
      if ([0, 0.5, 1].indexOf(myGameResult) === -1) {
        return null;
      }

      var myChanceToWin = 1 / (1 + Math.pow(10, (opponentRating - myRating) / 400));

      return Math.round(100 * (myGameResult - myChanceToWin));
    }

    function getNewRating(myRating, opponentRating, myGameResult) {
      return myRating + getRatingDelta(myRating, opponentRating, myGameResult);
    }

    function getWinChance(myRating, opponentRating) {
      return 1 / (1 + Math.pow(10, (opponentRating - myRating) / 400))
    }

    return {
      getRatingDelta: getRatingDelta,
      getNewRating: getNewRating,
      getWinChance: getWinChance // Elo.getWinChance
    };
  })();

  function get(object, key, default_value) {
    var result = object[key];
    return (typeof result !== "undefined") ? result : default_value;
  }

  function getEloScores(fromyear, toyear) {
    var url = `/basketball/getgames/${fromyear}/${toyear}`

    let scores = {}
    fetch(url)
      .then(res => res.json())
      .then(function (data) {
        for (let i = 0; i < data.length; i++) {
          let t1 = data[i].home_abbr, t2 = data[i].away_abbr
          let s1 = data[i].home_score, s2 = data[i].away_score

          let r1 = 0, r2 = 1;
          if (s1 === s2) {
            r1 = 0.5
            r2 = 0.5
          } else if (s1 > s2) {
            r1 = 1
            r2 = 0
          }

          let e1 = get(scores, t1, 1000)
          let e2 = get(scores, t2, 1000)

          scores[t1] = Elo.getNewRating(e1, e2, r1)
          scores[t2] = Elo.getNewRating(e2, e1, r2)

        }

        setelo(scores)
        setloading(false)
      })
    // elo = scores;

  }

  function linkGen(type, sport, id) {
    if (type === "player") {
      switch (sport) {
        case "basketball":
          return (`https://www.basketball-reference.com/req/202010061/images/players/${id}.jpg`)
        case "football":
          return (`https://www.pro-football-reference.com/req/20180910/images/headshots/${id}_2019.jpg`)
        case "baseball":
          return (`https://www.baseball-reference.com/req/202007270/images/headshots/c/c755fefc_sabr.jpg`)
        case "hockey":
          return (`https://www.hockey-reference.com/req/202008181/images/headshots/${id}-2017.jpg`)
        default:
          return (Blank)
      }
    } else if (type === "team") {
      switch (sport) {
        case "basketball":
          return (`https://d2p3bygnnzw9w3.cloudfront.net/req/202010091/tlogo/bbr/${id}-2020.png`)
        case "football":
          return (Blank)
        case "baseball":
          return (Blank)
        case "hockey":
          return (Blank)
        default:
          return (Blank)
      }
    }
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center" style={{ marginTop: '5px' }}>
        <div className="spinner-border text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  } else if (!loading) {
    // var replacer = function(k, v) { if (v === undefined || k === "__proto__") { return null; } return v; };
    // var jsonString = JSON.stringify(elo, replacer);
    // console.log(jsonString)
    // console.log(elo);
    // console.log(elo["DEN"])

    if (team[0].sportname == "basketball") {
      return (
        <div className="hpage">
          <div className="card team_stat_card">
            <h2 className="card-title team_stat_title"> {team[0].name} </h2>
            <div className="card-body team_stat_body">
              <img className="card-img-top team_stat_img"
                src={linkGen("team", sport, team[0].abbreviation)}
                alt="Headshot" />
            </div>
            <div className="card team_stat_stats">
              <div className="card-body team_stat_body">
                <div className="card-text team_stat_text">
                  <div> ELO: {get(elo, team[0].abbreviation, 1000)} </div>
                  <div>  Points: {team[team.length - 1].points} </div>
                  <br />
                  <div>  Assists: {team[team.length - 1].assists} </div>
                  <br />
                  <div>  Rebounds: {team[team.length - 1].total_rebounds} </div>
                  <br />
                  <div>  Blocks: {team[team.length - 1].blocks} </div>
                  <br />
                </div>
              </div>
            </div>
            <div className="card team_stat_graph">
              <div id="teamGraph">
                <TeamCharts SeasonStats={team} />
              </div>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="hpage">
          <div className="card team_stat_card">
            <h2 className="card-title team_stat_title"> {team[0].name} </h2>
            <div className="card-body team_stat_body">
              <img className="card-img-top team_stat_img"
                src={linkGen("team", sport, team[0].abbreviation)}
                alt="Team logo" />
              <div className="card-text team_stat_text">

                <br />
                <div> Career Points: {team[team.length - 1].points} </div>
                <br />
                <div> Career Assists: {team[team.length - 1].assists} </div>
                <br />
                <div> Career Rebounds: {team[team.length - 1].total_rebounds} </div>
                <br />
                <div> Career Blocks: {team[team.length - 1].blocks} </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      )
    }


  }
}

export default Team;