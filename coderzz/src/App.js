import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Views/Home/Home.js';
import Basketball from './Views/Basketball/basketball.js'
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
                            
                        </ul>
                    </div>
                </nav> 
                <Switch style="height: 1vh;">
                    <Route style="height: 1vh;" exact path="/">
                        <Home />
                    </Route>
                    <Route style="height: 1vh;" exact path="/basketball">
                        <Basketball />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
