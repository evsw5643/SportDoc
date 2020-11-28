import React from 'react'

function CompareCard(props) {
    
    if(props.cardType == "player"){
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
    else{
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
