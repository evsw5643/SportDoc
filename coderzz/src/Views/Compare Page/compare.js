import React, { useState, useEffect } from 'react';
import Player from '../Player/player_info'
import Team from '../Team/team_info'
import CompareCard from './CompareCard'
function Compare(props) {
    //2 buttons, players and teams
    //if click on player it loads a player stat card, if team it loads team
    //also loads an empty stat card with the option to compare directly or to add another player card to see 2 different players stats separately or overlayed
    const [playerLoad, setPlayerLoad] = useState(false);
    const [teamLoad, setTeamLoad] = useState(false);

    useEffect(() => {
        setPlayerLoad(false)
        setTeamLoad(false)
    }, [])

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
                        {/* <button type="button" className="btn btn-info playerBtn" > Players </button> */}
                        <div className="gridText">
                            <h1 className="selectionText">Players</h1>
                        </div>
                    </div>
                </div>
                <div className="flex-parent jc-center">
                    <div className="card player_compare_card" onClick={teamHandler}>
                        {/* <button type="button" className="btn btn-info teamBtn" > Teams </button> */}
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
