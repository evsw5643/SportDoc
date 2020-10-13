import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Home.css';
import NBA from './NBA.png'
import MLB from './MLB.png'
import NFL from './NFL.png'
import NHL from './NHL.png'
import SOC from './SOC.jpg'

function Home() {
  return (
    <div>
      <div class="hpage">
        <div class="title">
          <h1>Welcome to Sports Doc</h1>
          <br />
          <h2>Choose a Sport to Doc</h2>
        </div>
        <br />
        <div class="row justify-content-center">
          <div class="card-deck col-8">
            <div class="basketball-card card" style={{ borderRadius: 50 }}>
              <Link to="/basketball">
                <img class="card-img-top" style={{ borderRadius: 50 }} src={NBA} alt="NBA" />
              </Link>
              <div class="card-body">
                <Link to="/basketball">
                  <h5 class="card-title">Basketball</h5>
                </Link>
              </div>
            </div>
            <div class="football-card card" style={{ borderRadius: 50 }}>
              <Link to="/football">
                <img class="card-img-top" style={{ borderRadius: 50 }} src={NFL} alt="NFL" />
              </Link>
              <div class="card-body">
                <Link to="/football">
                  <h5 class="card-title">Football</h5>
                </Link>
              </div>
            </div>
            <div class="baseball-card card" style={{ borderRadius: 50 }}>
              <Link to="/baseball">
                <img class="card-img-top" style={{ borderRadius: 50 }} src={MLB} alt="MLB" />
              </Link>
              <div class="card-body">
                <Link to="/baseball">
                  <h5 class="card-title">Baseball</h5>
                </Link>
              </div>
            </div>
            <div class="hockey-card card" style={{ borderRadius: 50 }}>
              <Link to="/hockey">
                <img class="card-img-top" style={{ borderRadius: 50 }} src={NHL} alt="NHL" />
              </Link>
              <div class="card-body">
                <Link to="/hockey">
                  <h5 class="card-title">Hockey</h5>
                </Link>
              </div>
            </div>
            <div class="soccer-card card" style={{ borderRadius: 50 }}>
              <Link to="/soccer">
                <img class="card-img-top" style={{ borderRadius: 50 }} src={SOC} alt="SOC" />
              </Link>
              <div class="card-body">
                <Link to="/soccer">
                  <h5 class="card-title">Soccer</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
