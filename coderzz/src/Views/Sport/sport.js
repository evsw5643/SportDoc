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
    setsport(props.sport)
    teamGet(props.sport, props.num)
    playerGet(props.sport, props.num)
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
