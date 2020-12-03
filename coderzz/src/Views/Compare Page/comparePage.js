import React from 'react'
import Player from '../Player/player_info'
import Team from '../Team/team_info'
function ComparePage(props) {
    if (props.compareType == "player") {
        return (
            <div>
                <Player sport={props.sport} player={props.player1} />
                <Player sport={props.sport} player={props.player2} />
            </div>
        )
    }
    else {
        return (
            <div>
                <Team sport={props.sport} team={props.player1} />
                <Team sport={props.sport} team={props.player2} />
            </div>
        )
    }
}

export default ComparePage
