import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Home.css';


function Home() {

  return (
    <div>
      <div className="column justify-content-center">
        <div className="hpage">
          <div className="flex-parent jc-center">
            <Link to="/basketball/jamesle01" className="card player_compare_card" >
              <div className="gridText">
                <h1 className="selectionText">Basketball</h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="hpage">
          <div className="flex-parent jc-center">
            <Link to="/baseball/troutmi01" className="card player_compare_card" >
              <div className="gridText">
                <h1 className="selectionText">Baseball</h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="hpage">
          <div className="flex-parent jc-center">
            <Link to="/hockey/crosbsi01" className="card player_compare_card" >
              <div className="gridText">
                <h1 className="selectionText">Hockey</h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="hpage">
          <div className="flex-parent jc-center">
            <Link to="/football/BradTo00" className="card player_compare_card" >
              <div className="gridText">
                <h1 className="selectionText">Football</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
