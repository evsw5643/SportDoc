import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="hpage">
        <div className="title">
          <h1>Welcome to Sports Doc</h1>
          <br />
          <h2>Choose a Sport to Doc</h2>
        </div>
        <br />
        <div className="row justify-content-center">
          <div className="card-deck">
              <Link to="/basketball" style={{textDecoration: "none"}}>
                <div className="card" >
                  <div className="card-body home_card basketball-card">
                    <div className="card-text" style={{margin: "auto"}}>Basketball</div>
                  </div>
                </div>
              </Link>
              <Link to="/football" style={{textDecoration: "none"}}>
                <div className="card" >
                  <div className="card-body home_card football-card">
                    <div className="card-text" style={{margin: "auto"}}>Football</div>
                  </div>
                </div>
              </Link>
              <Link to="/baseball" style={{textDecoration: "none"}}>
                <div className="card" >
                  <div className="card-body home_card baseball-card">
                    <div className="card-text" style={{margin: "auto"}}>Baseball</div>
                  </div>
                </div>
              </Link>
              <Link to="/hockey" style={{textDecoration: "none"}}>
                <div className="card" >
                  <div className="card-body home_card hockey-card">
                    <div className="card-text hockey_text" style={{margin: "auto"}}>Hockey</div>
                  </div>
                </div>
              </Link>
              <Link to="/soccer" style={{textDecoration: "none"}}>
                <div className="card" >
                  <div className="card-body home_card soccer-card">
                    <div className="card-text" style={{margin: "auto"}}>Soccer</div>
                  </div>
                </div>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
