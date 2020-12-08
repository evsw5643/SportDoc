import React, { useState, useEffect } from 'react';
import Player from '../Player/player_info'
import Team from '../Team/team_info'
import CompareCard from './CompareCard'
function Compare(props) {
    const [playerLoad, setPlayerLoad] = useState(false);
    const [teamLoad, setTeamLoad] = useState(false);

    useEffect(() => {
        setPlayerLoad(false)
        setTeamLoad(false)
    }, [props.sport, props.player1])

    function playerHandler() {
        setPlayerLoad(true)
    }
    function teamHandler() {
        setTeamLoad(true)
    }
    if (!playerLoad && !teamLoad) {
        return (
            <div className="hpage">
                <div className="flex-parent jc-center">
                    <div className="card player_compare_card" onClick={playerHandler}>
                    
                        <div className="gridText">
                            <h1 className="selectionText">Players</h1>
                        </div>
                    </div>
                </div>
                <div className="flex-parent jc-center">
                    <div className="card player_compare_card" onClick={teamHandler}>
                        
                        <div className="gridText">
                            <h1 className="selectionText">Teams</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if (playerLoad === true) {
        return (
            <div>
                <Player sport={props.sport} player={props.player1} />
                <CompareCard cardType="player" sport={props.sport} playerID={props.player1} />
            </div>
        )
    }
    if (teamLoad == true) {
        switch (props.sport) {
            case "basketball":
                return (
                    <div>
                        <Team team="DEN" sport={props.sport} />
                        <CompareCard cardType="team" sport={props.sport} playerID="DEN" />
                    </div>
                )
            case "baseball":
                return (
                    <div>
                        <Team team="COL" sport={props.sport} />
                        <CompareCard cardType="team" sport={props.sport} playerID="COL" />
                    </div>
                )
            case "hockey":
                return (
                    <div>
                        <Team team="COL" sport={props.sport} />
                        <CompareCard cardType="team" sport={props.sport} playerID="COL" />
                    </div>
                )
            case "football":
                return (
                    <div>
                        <Team team="DEN" sport={props.sport} />
                        <CompareCard cardType="team" sport={props.sport} playerID="DEN" />
                    </div>
                )
        }
    }
}

export default Compare
