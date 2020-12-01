import React from 'react'
import Player from '../Player/player_info'
function comparePage(props) {
    if (props.compareType == "compare") {
        return (
            <div>
                <Player sport={props.sport} player={props.player1} />
                <Player sport={props.sport} player={props.player2} />
            </div>
        )
    }
    else{
        return (
            <div>
                <Player sport={props.sport} player={props.player1}/>
                <Player sport={props.sport} player={props.player2} />
            </div>
        )
    }
}

export default comparePage
