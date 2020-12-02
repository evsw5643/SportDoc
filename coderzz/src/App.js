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
<<<<<<< HEAD
import comparePage from './Views/Compare Page/comparePage.js'
=======
>>>>>>> master

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <div style={{ marginLeft: "300px" }}>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/:sport/:id" children={<SportLoad />} />
                        <Route exact path="/player/:sport/:id" children={<PlayerLoad />} />
                        <Route exact path="/team/:sport/:abb" children={<TeamLoad />} />
                        <Route exact path="/compare/:sport/:id1/:id2" children={<CompareLoad />} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

// * Loads team abbreviation and sport
function TeamLoad() {
    let { abb } = useParams()
    let { sport } = useParams()
    return (
        <div>
            <Team team={abb} sport={sport} />
        </div>
    )
}

// * Loads sport 
function SportLoad() {
    let { sport } = useParams()
    let { id } = useParams()
    return (
        <div>
            {/* <Sport sport={sport} /> */}
<<<<<<< HEAD
            <Compare player1={id} sport={sport}/>
=======
            <Compare sport={sport} />
>>>>>>> master
        </div>
    )
}

// * Loads player according to player id and sport
function PlayerLoad() {
    let { id } = useParams()
    let { sport } = useParams()
    return (
        <div>
            <Player player={id} sport={sport} />
        </div>
    )
}

function CompareLoad() {
    let { sport } = useParams()
    let { id1 } = useParams()
    let { id2 } = useParams()
    return (
        <div>
            <comparePage compareType="compare" player1={id1} player2={id2} sport={sport}  />
        </div>
    )
}

export default App;
