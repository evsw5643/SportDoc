import React, { useState, useEffect } from 'react';
import "./team_info.css"
import Blank from '../blank.png'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function Team(props) {

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
    return (
      <div className="hpage">
        <div className="card team_stat_card">
          <h2 className="card-title team_stat_title"> {team[0].name} </h2>
          <div className="card-body team_stat_body">
            <img className="card-img-top team_stat_img"
              src={linkGen("team", sport, team[0].abbreviation)}
              alt="Team logo" />
            <div className="card-text team_stat_text">
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


export default Team;