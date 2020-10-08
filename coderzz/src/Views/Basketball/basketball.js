import React from 'react';
import Blank from './blank.png'

function Basketball() {
    return (
      <div>
        <h1 class="SportsDoc">SportsDoc </h1>        
        <div class="card-group">
            <div class="card">
              <img class="card-img-top" src={Blank} alt="Card image cap"/>
              <div class="card-body">
                <h3 class="card-title">Team of the Day</h3>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button type="button" class="btn btn-warning">3 Pts Made</button>
                <button type="button" class="btn btn-warning">Field Goal Attempts</button>
                <button type="button" class="btn btn-warning">Total Blocks</button>
                <p class="card-text"><small class="text-muted">Last updated X mins ago</small></p>
                </div>
            </div>
            <div class="card">
              <img class="card-img-top" src={Blank} alt="Card image cap"/>
              <div class="card-body">
                <h3 class="card-title">Player of the Day</h3>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <button type="button" class="btn btn-warning">3 Pts Made</button>
                <button type="button" class="btn btn-warning">Field Goal Attempts</button>
                <button type="button" class="btn btn-warning">Total Blocks</button>
                <p class="card-text"><small class="text-muted">Last updated X mins ago</small></p>
            </div>
          </div>
      </div>
      </div>
    );
  }

export default Basketball;
