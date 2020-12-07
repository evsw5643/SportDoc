import React from 'react';
// eslint-disable-next-line
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // eslint-disable-next-line
    Link,
    useParams
} from "react-router-dom";
import Home from './Views/Home/Home.js';
import Sport from './Views/Sport/sport.js'
import Player from './Views/Player/player_info.js'
import Team from './Views/Team/team_info.js'
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.js';
import Compare from './Views/Compare Page/compare.js'
import ComparePage from './Views/Compare Page/comparePage.js'
import CompareCard from './Views/Compare Page/CompareCard'

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <div className="page" style={{ marginLeft: "300px" }}>
                    {/* <div className="container"> */}
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/:sport/:id" children={<SportLoad />} />
                        <Route exact path="/player/:sport/:id" children={<PlayerLoad />} />
                        <Route exact path="/team/:sport/:abb" children={<TeamLoad />} />
                        <div className="btnContainerApp">
                            <Route exact path="/compare/:compareType/:sport/:id1/:id2" children={<CompareLoad />} />
                        </div>

                    </Switch>
                    {/* </div> */}
                </div>
            </div>
        </Router>
    );
}

// * Loads team abbreviation and sport
function TeamLoad() {
    let { abb } = useParams()
    let { sport } = useParams()
    switch (sport) {
        case "basketball":
            return (
                <div>
                    <Team team={abb} sport={sport} />
                    <CompareCard cardType="team" sport={sport} playerID={abb} />
                </div>
            )
        case "baseball":
            return (
                <div>
                    <Team team="COL" sport={sport} />
                    <CompareCard cardType="team" sport={sport} playerID="COL" />
                </div>
            )
        case "hockey":
            return (
                <div>
                    <Team team="COL" sport={sport} />
                    <CompareCard cardType="team" sport={sport} playerID="COL" />
                </div>
            )
        case "football":
            return (
                <div>
                    <Team team={abb} sport={sport} />
                    <CompareCard cardType="team" sport={sport} playerID={abb} />
                </div>
            )
    }
}

// * Loads sport 
function SportLoad() {
    let { sport } = useParams()
    let { id } = useParams()
    return (
        <Compare player1={id} sport={sport} />
    )
}

// * Loads player according to player id and sport
function PlayerLoad() {
    let { id } = useParams()
    let { sport } = useParams()
    return (
        <div>
            <Player player={id} sport={sport} />
            <CompareCard cardType="player" sport={sport} playerID={id} />
        </div>
    )
}

function CompareLoad() {
    let { sport } = useParams()
    let { id1 } = useParams()
    let { id2 } = useParams()
    let { compareType } = useParams()
    return (
        <div>
            <ComparePage compareType={compareType} player1={id1} player2={id2} sport={sport} />
        </div>
    )
}

export default App;
