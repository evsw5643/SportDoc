import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Views/Home.js';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                {/* navbar */}
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
                                <a class="nav-link" href="#">
                                    Basketball
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    {/* <Route path="/basketball">
                        <Basketball />
                    </Route> */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
