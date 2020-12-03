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
            {/* <button type="button" className="btn btn-info playerBtn" onClick={comparePlayerHandler}> Compare Players </button> */}
            <button type="button" className="btn btn-info teamBtn" onClick={addPlayerHandler}> Add Player </button>
          </div>
        </div>
      )
    }
    else if (addPlayer) {
      return (
        <div className="hpage">
          <div className="card player_compare_stats">
            <CardSearch sport={props.sport} id1={props.playerID} compareType="player" />
          </div>
        </div>
      )
    }
    // else if (comparePlayer) {
    //   return (
    //     <div className="hpage">
    //       <div className="card player_compare_stats">
    //         <CardSearch sport={props.sport} id1={props.playerID} compareType="compare" />
    //       </div>
    //     </div>
    //   )
    // }

  }
  else {
    if (!addPlayer && !comparePlayer && !addTeam && !compareTeam) {
      return (
        <div className="hpage">
          <div className="card player_compare_stats">
            {/* <button type="button" className="btn btn-info playerBtn" onClick={compareTeamHandler}> Compare Teams </button> */}
            <button type="button" className="btn btn-info teamBtn" onClick={addTeamHandler}> Add Team </button>
          </div>
        </div>
      )
    }
    else if (addTeam) {
      return (
        <div className="hpage">
          <div className="card player_compare_stats">
            <CardSearch sport={props.sport} id1={props.playerID} compareType="team" />
          </div>
        </div>
      )
    }
    // else if (compareTeam) {
    //   return (
    //     <div className="hpage">
    //       <div className="card player_compare_stats">
    //         <CardSearch sport={props.sport} id1={props.playerID} compareType="add" />
    //       </div>
    //     </div>
    //   )
    // }
  }
}

export default CompareCard
