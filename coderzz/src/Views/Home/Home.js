import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Home.css';
import Sport from '../Sport/sport.js'

function Home() {
  return (
    <div>
      <div className="column justify-content-center">
        <Sport sport="basketball"></Sport>
        <Sport sport="hockey"></Sport>
      </div>
    </div>
  );
}

export default Home;
