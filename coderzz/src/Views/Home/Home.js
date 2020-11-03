import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Home.css';
import Sport from '../Sport/sport.js'

function Home() {
  return (
    <div>
      <div className="hpage">
        <div className="row justify-content-center">
          <div className="card-deck">
            <div className="card-row-1">
              <div className="card home-card-container-1">
                <Link to="/basketball" style={{ textDecoration: "none" }}>
                  <div className="card-body home-card basketball-card">
                    <div className="card-text" style={{ margin: "auto" }}>Basketball</div>
                  </div>
                </Link>

                <Sport sport="basketball"></Sport>
              </div>
              <div className="card home-card-container-1">

                <Link to="/baseball" style={{ textDecoration: "none" }}>
                  <div className="card-body home-card baseball-card">
                    <div className="card-text" style={{ margin: "auto" }}>Baseball</div>
                  </div>
                </Link>

                <Sport sport="baseball"></Sport>
              </div>
            </div>
            <div className="card-row-2">
              <div className="card home-card-container-2">

                <Link to="/football" style={{ textDecoration: "none" }}>
                  <div className="card-body home-card football-card">
                    <div className="card-text" style={{ margin: "auto" }}>Football</div>
                  </div>
                </Link>

                <Sport sport="football"></Sport>
              </div>
              <div className="card home-card-container-2">

                <Link to="/hockey" style={{ textDecoration: "none" }}>
                  <div className="card-body home-card hockey-card">
                    <div className="card-text hockey_text" style={{ margin: "auto" }}>Hockey</div>
                  </div>
                </Link>

                <Sport sport="hockey"></Sport>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
