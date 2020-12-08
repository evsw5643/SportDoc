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
  const [career, setcareer] = useState(0);
  const [teamSize, setteamsize] = useState(0)
  const [statname1, setstatname1] = useState("")
  const [statname2, setstatname2] = useState("")
  const [statname3, setstatname3] = useState("")
  const [statname4, setstatname4] = useState("")
  const [stat1, setstat1] = useState(0)
  const [stat2, setstat2] = useState(0)
  const [stat3, setstat3] = useState(0)
  const [stat4, setstat4] = useState(0)
  let teamAbbr = ""
  useEffect(() => {
    setloading(true)
    setsport(props.sport)
    api(props.team, props.sport)
  }, [props.sport, props.team, props.team2])
  function api(apiTeam, apiSport) {
    fetch(`/${apiSport}/getteam/${apiTeam}`)
      .then(res => res.json())
      .then(
        (result) => {
          setteam(result)
          setteamsize(result.length)
          perSport(apiSport, result, teamSize)
          console.log("TEAM SIZE: " + teamSize)
          getEloScores(2014, 2019)
        },
        (error) => {
          console.log(error)
          setloading(false)
        }
      )
  }
  function perSport(spo, team, teamSize) {
    //console.log(team)
    for (let i = 0; i < team.length; i++) {
      if (team[i].year === "2018") {
        console.log(team[i])
      }
    }
    let currentYearIndex = team.length - 1
    switch (spo) {
      case "basketball":
        let basketball_losses = parseInt(team[currentYearIndex].games_played) - parseInt(team[currentYearIndex].wins)
        setstatname1("Points")
        setstatname2("Assists")
        setstatname3("Offensive Rebounds")
        setstatname4("Field Goals")
        setstat1(team[currentYearIndex].points)
        setstat2(team[currentYearIndex].assists)
        setstat3(team[currentYearIndex].offensive_rebounds)
        setstat4(team[currentYearIndex].points)
        teamAbbr = team[currentYearIndex].abbreviation
        break
      case "baseball":
        let baseball_wins = parseInt(team[currentYearIndex].home_wins) + parseInt(team[currentYearIndex].away_wins)
        let baseball_losses = parseInt(team[currentYearIndex].home_losses) + parseInt(team[currentYearIndex].away_losses)
        let baseball_games_played = baseball_wins + baseball_losses
        setstatname1("Wins")
        setstatname2("Losses")
        setstatname3("Games Played")
        setstatname4("Home Runs")
        setstat1(baseball_wins)
        setstat2(baseball_losses)
        setstat3(baseball_games_played)
        setstat4(team[currentYearIndex].hits)
        teamAbbr = team[currentYearIndex].abbreviation
        break
      case "football":
        setstatname1("Wins")
        setstatname2("Losses")
        setstatname3("Games Played")
        setstatname4("Touchdowns")
        setstat1(team[currentYearIndex].wins)
        setstat2(team[currentYearIndex].losses)
        setstat3(team[currentYearIndex].games_played)
        setstat4(team[currentYearIndex].rush_touchdowns)
        teamAbbr = team[currentYearIndex].abbreviation.toLowerCase()
        break
      case "hockey":
        let hockey_wins = parseInt(team[currentYearIndex].games_played) - parseInt(team[currentYearIndex].losses)
        setstatname1("Wins")
        setstatname2("Losses")
        setstatname3("Games Played")
        setstatname4("Goals")
        setstat1(hockey_wins)
        setstat2(team[currentYearIndex].losses)
        setstat3(team[currentYearIndex].games_played)
        setstat4(team[currentYearIndex].goals_for)
        teamAbbr = team[currentYearIndex].abbreviation
        break
    }
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
    var url = `/${props.sport}/getgames/${fromyear}/${toyear}`

    let scores = {}
    fetch(url)
      .then(res => res.json())
      .then(function (data) {
        for (let i = 0; i < data.length; i++) {
          let t1 = data[i].home_abbr.toUpperCase(), t2 = data[i].away_abbr.toUpperCase()
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
    // if (type === "player") {
    //   switch (sport) {
    //     case "basketball":
    //       return (`https://www.basketball-reference.com/req/202010061/images/players/${id}.jpg`)
    //       break
    //     case "football":
    //       return (`https://www.pro-football-reference.com/req/20180910/images/headshots/${id}_${year}.jpg`)
    //       break
    //     case "baseball":
    //       return (`https://www.baseball-reference.com/req/202007270/images/headshots/c/${player[0].chadwick_id}_mlbam.jpg`)
    //       break
    //     case "hockey":
    //       if (player[player.length - 2].index == "2019-20") {
    //         return (`https://www.hockey-reference.com/req/202008181/images/headshots/${id}-2020.jpg`)
    //       }
    //       else {
    //         return (`https://www.hockey-reference.com/req/202008181/images/headshots/${id}-2017.jpg`)
    //       }
    //   }
    // }
    // else if (type === "team") {
    switch (sport) {
      case "basketball":
        return (`https://d2p3bygnnzw9w3.cloudfront.net/req/202010091/tlogo/bbr/${id}-2020.png`)
      case "football":
        return (`https://d2p3bygnnzw9w3.cloudfront.net/req/202012013/tlogo/pfr/${id.toLowerCase()}-2020.png`)
      case "baseball":
        return (`https://d2p3bygnnzw9w3.cloudfront.net/req/202012013/tlogo/br/${id}-2020.png`)
      case "hockey":
        return (`https://d2p3bygnnzw9w3.cloudfront.net/req/202011201/tlogo/hr/${id}.png`)
      default:
        return (Blank)
    }
    // }
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
    // console.log("ELO")
    // console.log(elo)
    let winChanceVar = 0
    console.log("TEAM 2:")
    console.log(props.team2)
    if(props.team2 != undefined){
      winChanceVar = 100*Elo.getWinChance(elo[team[0].abbreviation.toUpperCase()], elo[props.team2.toUpperCase()])
    }
    return (
      <div className="hpage">
        <div className="card team_stat_card">
          <div className="card-body team_stat_body">
            <img className="card-img-top team_stat_img_item"
              src={linkGen("team", sport, team[0].abbreviation)}
              alt="Headshot" />
          </div>
          <div className="card team_stat_stats">
            <div className="card-body team_stat_body">
              <div className="card-text team_stat_text">
                <li className="list-group-item"> {statname1}: {stat1} </li>
                <li className="list-group-item"> {statname2}: {stat2} </li>
                <li className="list-group-item"> {statname3}: {stat3} </li>
                <li className="list-group-item"> {statname4}: {stat4} </li>
                <ul className="list-group team_stat_list">
                </ul>
              </div>
            </div>
          </div>
          <div className="card team_info">
            <div className="card-body team_stat_body">
              <div className="card-text team_info_text">
                <h1> Team Name: <strong>{team[0].name}</strong>  </h1>
                <br />
                <strong>Team Abbreviation: {team[0].abbreviation}</strong>
                <br />
                <strong>Current Rank:</strong> {team[team.length - 1].rank}
                <br />
                <strong>ELO: </strong> {elo[team[0].abbreviation.toUpperCase()]}
                <br />
                <strong>Win Chance: </strong> {winChanceVar} %
              </div>
            </div>
          </div>
          <div className="card season_info">
            <div className="card-body team_stat_body">
              <div className="card-text team_info_text">
                <h1> Season: Current Season </h1>
                <br />
              </div>
            </div>
          </div>
          <div className="card team_stat_graph1">
            <div id="teamGraph">
              <TeamCharts SeasonStats={team} title="offensive" />
            </div>
          </div>
          <div className="card team_stat_graph2">
            <div id="teamGraph">
              <TeamCharts SeasonStats={team} title="defensive" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Team;