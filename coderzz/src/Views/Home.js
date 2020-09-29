import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Home.css';
import NBA from './NBA.png'
import MLB from './MLB.png'
import NFL from './NFL.png'
import NHL from './NHL.png'

function Home() {
    return (
        <div>
            <div class="hpage">
                <div class="title">                 
                    <h1>Welcome to Sports Doc</h1>
                    <br/>
                    <h2>Choose a Sport to Doc</h2>
                </div>
                <br/>
            <div class="row justify-content-center">
                <div class="card-deck col-8">
                        <div class="basketball-card card">
                            <img class="card-img-top" src={NBA} alt="NBA"/>
                            <div class="card-body">
                                <h5 class="card-title">Basket Ball</h5>
                            </div>
                        </div>
                        <div class="football-card card">
                            <img class="card-img-top" src={NFL} alt="NFL"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                            </div>
                        </div>
                        <div class="hockey-card card">
                            <img class="card-img-top" src={MLB} alt="MLB"/>
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            </div>
                        </div>
                        <div class="baseball-card card">
                            <img class="card-img-top" src={NHL} alt="NHL"/>
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Home;
