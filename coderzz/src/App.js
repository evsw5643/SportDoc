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

function App() {
    return (
        <Router>
            <div className="App">
                {/* navbar */}
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link to="/" className="navbar-brand">
                        Sport Doc
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/basketball">
                                    Basketball
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/football">
                                    Football
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/baseball">
                                    Baseball
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/hockey">
                                    Hockey
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/soccer">
                                    Soccer
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/player/basketball/jamesle01">
                                    Player Stats
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/team/basketball/DEN">
                                    Team Stats
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/basketball">
                            <Sport sport="basketball" />
                        </Route>
                        <Route exact path="/football">
                            <Sport sport="football" />
                        </Route>
                        <Route exact path="/soccer">
                            <Sport sport="soccer" />
                        </Route>
                        <Route exact path="/baseball">
                            <Sport sport="baseball" />
                        </Route>
                        <Route exact path="/hockey">
                            <Sport sport="hockey" />
                        </Route>
                        <Route exact path="/player/:sport/:id" children={<PlayerLoad />} />
                        <Route exact path="/team/:sport/:abb" children={<TeamLoad />} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

function TeamLoad() {
    let { abb } = useParams()
    let { sport } = useParams()
    return (
        <div>
            <Team team={abb} sport={sport} />
        </div>
    )
}

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
