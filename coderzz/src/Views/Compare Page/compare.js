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
                <div className="selection_buttons">
                    <button type="button" className="btn btn-info playerBtn" onClick={playerHandler}> Players </button>
                    <button type="button" className="btn btn-info teamBtn" onClick={teamHandler}> Teams </button>
                </div>
            </div>
        )
    }
    if (playerLoad === true) {
        let cardType = "player"
        switch (props.sport) {
            case "basketball":
                return (
                    <div>
                        <Player sport={props.sport} player="jamesle01" />
                        <CompareCard cardType={cardType} />
                    </div>
                )
            case "baseball":
                return (
                    <div>
                        <Player sport={props.sport} player="troutmi01" />
                        <CompareCard cardType={cardType} />
                    </div>
                )
            case "football":
                return (
                    <div>
                        <Player sport={props.sport} player="BradTo00" />
                        <CompareCard cardType={cardType} />
                    </div>
                )
            case "hockey":
                return (
                    <div>
                        <Player sport={props.sport} player="crosbsi01" />
                        <CompareCard cardType={cardType} />
                    </div>
                )
        }
    }
    if (teamLoad == true) {
        let cardType = "team"
        return (
            <div>
                <Team sport={props.sport} team="DEN" />
                <CompareCard cardType={cardType} />
            </div>
        )
    }
}

export default Compare
