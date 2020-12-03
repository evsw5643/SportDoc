import React, { useState, useEffect } from 'react';
import "./player_info.css"
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Blank from '../blank.png'
import PlayerCharts from '../../Components/Charts/PlayerCharts.js';


function Player(props) {

  const [loading, setloading] = useState(true);
  const [career, setcareer] = useState(0);
  const [player, setplayer] = useState([])
  const [sport, setsport] = useState("")
  const [statname1, setstatname1] = useState("")
  const [statname2, setstatname2] = useState("")
  const [statname3, setstatname3] = useState("")
  const [statname4, setstatname4] = useState("")
  const [stat1, setstat1] = useState(0)
  const [stat2, setstat2] = useState(0)
  const [stat3, setstat3] = useState(0)
  const [stat4, setstat4] = useState(0)

  useEffect(() => {
    setloading(true)
    setsport(props.sport)
    api(props.player, props.sport)
  }, [props.sport, props.player])

  function api(apiPlayer, apiSport) {
    fetch(`/${apiSport}/getplayer/${apiPlayer}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setplayer(result)
          let car = 0
          for (let i = 0; i < result.length; i++) {
            if (result[i].index === 'Career') {
              setcareer(i)
              car = i
            }
          }
          perSport(apiSport, result, car)
          setloading(false)
        },
        (error) => {
          console.log(error)
          setloading(false)
        }
      )
  }
  function perSport(spo, player, career) {
    switch (spo) {
      case "basketball":
        setstatname1("Points")
        setstatname2("Assists")
        setstatname3("Rebounds")
        setstatname4("Blocks")
        setstat1(player[career].points)
        setstat2(player[career].assists)
        setstat3(player[career].total_rebounds)
        setstat4(player[career].blocks)
        break
      case "baseball":
        console.log("BASEBALL OBJ:")
        console.log(player[career])
        setstatname1("Batting Average")
        setstatname2("On-Base Percentage")
        setstatname3("Slugging Percentage")
        setstatname4("Fielding Percentage")
        setstat1(player[career].batting_average)
        setstat2(player[career].on_base_percentage)
        setstat3(player[career].slugging_percentage)
        setstat4(player[career].fielding_percentage)
        break
      case "football":
        let offensivePosFootball = ["C", "OG", "OT", "QB", "HB", "FB", "WR", "TE"]
        let defensivePosFootball = ["DT", "DE", "MLB", "OLB", "CB", "S"]

        for (let i = 0; i < player.length; i++) {
          if (player[i].position != "") {
            switch (player[i].position) {
              case "C":
              case "OG":
              case "OT":
              case "QB":
              case "HB":
              case "FB":
              case "WR":
              case "TE":
              case "DT":
              case "DE" || "LDE" || "RDE":
              case "MLB":
              case "OLB":
              case "CB":
              case "S":
            }
          }
        }
      case "hockey":
        setstatname1("Goals")
        setstatname2("Assists")
        setstatname3("Rebounds")
        setstatname4("Blocks")
        setstat1(player[career].points)
        setstat2(player[career].assists)
        setstat3(player[career].total_rebounds)
        setstat4(player[career].blocks)
        break
    }
  }

  function linkGen(type, sport, id) {
    if (type === "player") {
      switch (sport) {
        case "basketball":
          return (`https://www.basketball-reference.com/req/202010061/images/players/${id}.jpg`)
        case "football":
          return (`https://www.pro-football-reference.com/req/20180910/images/headshots/${id}_2017.jpg`)
        case "baseball":
          return (`https://www.baseball-reference.com/req/202007270/images/headshots/c/${player[0].chadwick_id}.jpg`)
        case "hockey":
          console.log("LINKGEN: ")
          console.log(player[player.length-2].index)
          if(player[player.length-2].index == "2019-20"){
            return (`https://www.hockey-reference.com/req/202008181/images/headshots/${id}-2020.jpg`)
          }
          else{
            return (`https://www.hockey-reference.com/req/202008181/images/headshots/${id}-2017.jpg`)
          }
          
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
  }
  else if (!loading) {
    let playerTeamHistory = []
    if (sport != "football") {
      for (let i = 0; i < player.length; i++) {
        playerTeamHistory[i] = player[i].name
      }
      playerTeamHistory = [... new Set(playerTeamHistory)]
    }
    else {
      for (let i = 0; i < player.length; i++) {
        playerTeamHistory[i] = player[i].team
      }
      playerTeamHistory = [... new Set(playerTeamHistory)]
    }
    function printTeamHistory() {
      let teamArr = []
      for (let i = 0; i < playerTeamHistory.length; i++) {
        teamArr.push(playerTeamHistory[i] + ", ")
      }
      return teamArr
    }
    // console.log(player)
    // console.log("CASE STATEMENT FOOTBALL")
    // console.log({ statname1 })
    return (
      <div className="hpage">
        <div className="card player_stat_card">
          <div className="card-body player_stat_body">
            <img className="card-img-top player_stat_img_item"
              src={linkGen("player", sport, player[0].player_id)}
              alt="Headshot" />
          </div>
          <div className="card player_stat_stats">
            <div className="card-body player_stat_body">
              <ul className="list-group player_stat_list">
                <li className="list-group-item"> {statname1}: {stat1} </li>
                <li className="list-group-item"> {statname2}: {stat2} </li>
                <li className="list-group-item"> {statname3}: {stat3} </li>
                <li className="list-group-item"> {statname4}: {stat4} </li>
              </ul>
            </div>
          </div>
          <div className="card player_stat_graph1">
            <div className="PlayerGraph">
              <PlayerCharts player1={player} title="offensive" />
            </div>
          </div>
          <div className="card player_info">
            <div className="card-body player_stat_body">
              <div className="card-text player_info_text">
                Name: {player[0].player_name}
                <br />
                Teams: {printTeamHistory()}
                <br />
                Current Team: {playerTeamHistory[playerTeamHistory.length - 1]}
                <br />
                Current Position: {player[player.length - 1].position}
              </div>
            </div>
          </div>
          <div className="card season_info">
            <div className="card-body player_stat_body">
              <div className="card-text player_info_text">
                Name: {player[0].player_name}
                <br />
                Teams: {printTeamHistory()}
                <br />
                Most Recent Team: {playerTeamHistory[playerTeamHistory.length - 1]}
                <br />
                Current Position: {player[player.length - 1].position}
              </div>
            </div>
          </div>
          <div className="card player_stat_graph2">
            <div className="PlayerGraph">
              <PlayerCharts player1={player} title="defensive" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Player;