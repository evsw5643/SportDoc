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
        setstatname1("Points")
        setstatname2("Assists")
        setstatname3("Rebounds")
        setstatname4("Blocks")
        setstat1(player[career].points)
        setstat2(player[career].assists)
        setstat3(player[career].total_rebounds)
        setstat4(player[career].blocks)
        break
      case "hockey":
        setstatname1("Points")
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


  function api(apiPlayer, apiSport) {
    fetch(`/${apiSport}/getplayer/${apiPlayer}`)
      .then(res => res.json())
      .then(
        (result) => {
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

  function linkGen(type, sport, id) {
    if (type === "player") {
      switch (sport) {
        case "basketball":
          return (`https://www.basketball-reference.com/req/202010061/images/players/${id}.jpg`)
        case "football":
          return (`https://www.pro-football-reference.com/req/20180910/images/headshots/${id}_2017.jpg`)
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
    let playerTeamHistory = []
    for (let i = 0; i < player.length; i++) {
      playerTeamHistory[i] = player[i].team
    }
    playerTeamHistory = [... new Set(playerTeamHistory)]
    if (playerTeamHistory.length >= 1) {
      return (
        <div className="hpage">
          <div className="card player_stat_card">
            <h2 className="card-title player_stat_title"> {player[0].player_name} </h2>
            <div className="card player_stat_img">
              <div className="card-body player_stat_body">
                <img className="card-img-top player_stat_img_item"
                  src={linkGen("player", sport, player[0].player_id)}
                  alt="Headshot" />
                <div className="card-text player_img_text">
                  <h2> {player[0].player_name}</h2>
                </div>
              </div>
            </div>
            <div className="card player_stat_stats">
              <div className="card-body player_stat_body">
                <div className="card-text player_stat_text">
                  <div> Career {statname1}: {stat1} </div>
                  <br />
                  <div> Career {statname2}: {stat2} </div>
                  <br />
                  <div> Career {statname3}: {stat3} </div>
                  <br />
                  <div> Career {statname4}: {stat4} </div>
                  <br />
                </div>
              </div>
            </div>
            <div className="card player_stat_graph">
              <div id="PlayerGraph">
                <PlayerCharts SeasonStats={player} />
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}


export default Player;