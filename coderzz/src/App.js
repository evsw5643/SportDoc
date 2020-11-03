import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import Home from './Views/Home/Home.js';
import Sport from './Views/Sport/sport.js'
import Player from './Views/Player/player_info.js'
import Team from './Views/Team/team_info.js'
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.js';

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar/>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/:sport" children={<SportLoad />} />
                        <Route exact path="/player/:sport/:id" children={<PlayerLoad />} />
                        <Route exact path="/team/:sport/:abb" children={<TeamLoad />} />
                    </Switch>

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
    return (
        <div>
            <Sport sport={sport} />
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

export default App;
