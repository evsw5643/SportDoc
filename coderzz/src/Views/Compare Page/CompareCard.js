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
          <div className="flex-parent jc-center">
            <div className="card player_compare_card" onClick={addPlayerHandler}>
              <div className="gridText">
                <h1 className="selectionText">Add Player</h1>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else if (addPlayer) {
      return (
        <div className="hpage">
          <div className="flex-parent jc-center">
            <div className="card player_compare_card_static">
              <div className="gridText">
                <CardSearch sport={props.sport} id1={props.playerID} compareType="player" className="selectionText" />
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  else {
    if (!addPlayer && !comparePlayer && !addTeam && !compareTeam) {
      return (
        <div className="hpage">
          <div className="flex-parent jc-center">
            <div className="card player_compare_card" onClick={addTeamHandler}>
              <div className="gridText">
                <h1 className="selectionText">Add Team</h1>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else if (addTeam) {
      return (
        <div className="hpage">
        <div className="flex-parent jc-center">
          <div className="card player_compare_card_static">
            <div className="gridText">
            <CardSearch sport={props.sport} id1={props.playerID} compareType="team" className="selectionText"/>
            </div>
          </div>
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
