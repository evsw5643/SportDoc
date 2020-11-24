import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Blank from '../blank.png'
import "./sport.css"
import Player from '../Player/player_info'

function Sport(props) {
  const [loading1, setloading1] = useState(true);
  const [loading2, setloading2] = useState(true);
  // eslint-disable-next-line
  const [totd, settotd] = useState({})
  const [potd, setpotd] = useState({})
  const [sport, setsport] = useState("")

  useEffect(() => {
    setloading1(true)
    setloading2(true)
    const now = new Date()
    const ind = now.getDate() * (now.getMonth() + 1) + now.getUTCFullYear()
    setsport(props.sport)
    teamGet(props.sport, ind)
    playerGet(props.sport, ind)
  }, [props.sport])

  function teamGet(apiSport, ind) {
    fetch(`/${apiSport}/getteams`)
      .then(res => res.json())
      .then(
        (result) => {
          settotd(result[ind % result.length])
          setloading1(false)
        },
        (error) => {
          console.log(error)
          setloading1(false)
        }
      )
  }

  function playerGet(apiSport, ind) {
    fetch(`/${apiSport}/getplayers`)
      .then(res => res.json())
      .then(
        (result) => {
          setpotd(result[ind % result.length])
          setloading2(false)
        },
        (error) => {
          console.log(error)
          setloading2(false)
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

  if (loading1 || loading2) {
    return (
      <div className="d-flex justify-content-center" style={{ marginTop: '5px' }}>
        <div className="spinner-border text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  } else if (!loading1 && !loading2) {
    return (
      <Player sport={props.sport} player={potd.player_id}></Player>
    );
  }
}

export default Sport;
