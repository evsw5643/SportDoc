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
import Player from './Views/Menu/player_info.js'
import Team from './Views/Team/team_info.js'
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">

                {/* navbar */}
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <Link to="/" class="navbar-brand">
                        Sport Doc
                    </Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon" />
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <Link class="nav-link" to="/basketball">
                                    Basketball
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/football">
                                    Football
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/baseball">
                                    Baseball
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/hockey">
                                    Hockey
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/soccer">
                                    Soccer
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/player">
                                    Player
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/team/DEN">
                                    Team:DEN
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="container-fluid">
                    <Switch style={{ height: '1vh' }}>
                        <Route style={{ height: '1vh' }} exact path="/">
                            <Home />
                        </Route>
                        <Route style={{ height: '1vh' }} exact path="/basketball">
                            <Sport sport="basketball" />
                        </Route>
                        <Route style={{ height: '1vh' }} exact path="/football">
                            <Sport sport="football" />
                        </Route>
                        <Route style={{ height: '1vh' }} exact path="/soccer">
                            <Sport sport="soccer" />
                        </Route>
                        <Route style={{ height: '1vh' }} exact path="/baseball">
                            <Sport sport="baseball" />
                        </Route>
                        <Route style={{ height: '1vh' }} exact path="/hockey">
                            <Sport sport="hockey" />
                        </Route>
                        <Route style={{ height: '1vh' }} exact path="/player">
                            <Player />
                        </Route>
                        <Route style={{ height: '1vh' }} exact path="/team/:abb" children={<TeamLoad />} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

function TeamLoad() {
    let { abb } = useParams()
    return (
        <div>
            <Team team={abb} />
        </div>
    )
}

export default App;
