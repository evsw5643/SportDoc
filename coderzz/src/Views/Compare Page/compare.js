import React from 'react'
import player_compare from './player_compare'
import team_compare from './team_compare'

function Compare() {
    //2 buttons, players and teams
    //if click on player it loads a player stat card, if team it loads team
    //also loads an empty stat card with the option to compare directly or to add another player card to see 2 different players stats separately or overlayed
    function playerCompare(){
        
    }
    function teamCompare(){

    }
    return (
        <div>
            <button type="button" class="btn btn-primary playerBtn" onClick={playerCompare()}> Players </button>
            <button type="button" class="btn btn-primary teamBtn" onClick={teamCompare()}> Teams </button>
        </div>
    )
}

export default Compare
