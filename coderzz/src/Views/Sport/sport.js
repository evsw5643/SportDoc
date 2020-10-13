import React from 'react';
import Blank from './blank.png'
import "./sport.css"

function Sport(props) {
  let attr1 = ""
  let attr2 = ""
  let attr3 = ""
  switch (props.sport) {
    case "baseball":
      attr1 = "Runs"
      attr2 = "RBI"
      attr3 = "Batting Average"
      break;
    case "football":
      attr1 = "Touchdowns"
      attr2 = "Sacks"
      attr3 = "Completed Passes"
      break;
    case "basketball":
      attr1 = "3 Pts Made"
      attr2 = "Field Goal Attempts"
      attr3 = "Total Blocks"
      break;
    case "soccer":
      attr1 = "Goals Scored"
      attr2 = "Shots on Goal"
      attr3 = "Completed Passes"
      break;
    case "hockey":
      attr1 = "I don't"
      attr2 = "Know"
      attr3 = "Hockey"
      break;
  }
  return (
    <div>
      <div class="content">
        <div class="card-group">
          <div class="card">
            <img class="card-img-top" src={Blank} alt="Blank" />
            <div class="card-body">
              <h3 class="card-title">Team of the Day</h3>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button type="button" class="btn btn-warning">{attr1}</button>
              <button type="button" class="btn btn-warning">{attr2}</button>
              <button type="button" class="btn btn-warning">{attr3}</button>
              <p class="card-text"><small class="text-muted">Last updated X mins ago</small></p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={Blank} alt="Blank" />
            <div class="card-body">
              <h3 class="card-title">Player of the Day</h3>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <button type="button" class="btn btn-warning">{attr1}</button>
              <button type="button" class="btn btn-warning">{attr2}</button>
              <button type="button" class="btn btn-warning">{attr3}</button>
              <p class="card-text"><small class="text-muted">Last updated X mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sport;
