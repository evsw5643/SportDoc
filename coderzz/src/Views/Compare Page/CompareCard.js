import React, { useState, useEffect } from 'react';
import Player from '../Player/player_info'
import CardSearch from '../Search/CardSearch'
import './compare.css'
function CompareCard(props) {

  const [comparePlayer, setComparePlayer] = useState(false)
  const [addPlayer, setAddPlayer] = useState(false)
  const [compareTeam, setCompareTeam] = useState(false)
  const [addTeam, setAddTeam] = useState(false)
  //click button, calls function to generate 
  function comparePlayerHandler() {
    setComparePlayer(true)
  }
  function addPlayerHandler() {
    setAddPlayer(true)
  }
  function compareTeamHandler() {
    setCompareTeam(true)
  }
  function addTeamHandler() {
    setAddTeam(true)
  }

  if (props.cardType == "player") {
    if (!addPlayer && !comparePlayer && !addTeam && !compareTeam) {
      return (
        <div className="hpage">
          <div className="card player_compare_stats">
            <button type="button" className="btn btn-info playerBtn" onClick={comparePlayerHandler}> Compare Players </button>
            <button type="button" className="btn btn-info teamBtn" onClick={addPlayerHandler}> Add Player </button>
          </div>
        </div>
      )
    }
    else if (addPlayer) {

      return (
        <div className="hpage">
          <div className="card player_compare_stats">
            <CardSearch sport={props.sport} id1={props.playerID} compareType="add" />
          </div>
        </div>
      )
    }

  }
  else {
    return (
      <div className="hpage">
        <div className="card player_stat_card">
          <div className="card player_stat_stats">
            <div className="card-body player_stat_body">
            </div>
          </div>
          <div className="card player_stat_graph">
            <div className="PlayerGraph">
            </div>
          </div>
          <div className="card player_info">
            <div className="card-body player_stat_body">
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default CompareCard
