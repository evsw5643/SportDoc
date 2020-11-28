import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Home.css';
import Sport from '../Sport/sport.js'

function Home() {
  const now = new Date()
  const ind = now.getDate() * (now.getMonth() + 1) + now.getUTCFullYear()

  function handlescroll() {
    var d = document.documentElement;
    var offset = d.scrollTop + window.innerHeight;
    var height = d.offsetHeight;

    console.log('offset = ' + offset);
    console.log('height = ' + height);

    if (offset >= height) {
      console.log('At the bottom');
    }
  };

  return (
    <div onScroll={handlescroll} >
      <div className="column justify-content-center">
        <Sport sport="basketball" num={ind}></Sport>
        <Sport sport="hockey" num={ind}></Sport>
        <Sport sport="football" num={ind}></Sport>
        <Sport sport="baseball" num={ind}></Sport>
      </div>
    </div>
  );
}

export default Home;
