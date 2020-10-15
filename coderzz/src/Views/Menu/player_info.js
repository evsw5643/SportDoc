import React, { useState, useEffect } from 'react';

function Player(props) {

  const [loading, setloading] = useState(true);
  const [player, setplayer] = useState([])

  useEffect(() => {
    fetch(`/getplayer/${props.player}`)
      .then(res => res.json())
      .then(
        (result) => {
          setplayer(result)
          setloading(false)
        },
        (error) => {
          console.log(error)
          setloading(false)
        }
      )
  }, [])

  //  window.onload = function () {
  //     var chart = new CanvasJS.Chart("chartContainer", {
  //         title: {
  //             text: "Shooting Percentage"
  //         },
  //         data: [
  //             {
  //                 type: "column",
  //                 name: "Preseason",
  //                 showInLegend: true,
  //                 dataPoints: [
  //                     { label: "In The Paint", y: 49.3 },
  //                     { label: "Mid Range", y: 15 },
  //                     { label: "Three Point", y: 34.8 }
  //                 ]
  //             },

  //             {
  //                 type: "column",
  //                 name: "Regular Season",
  //                 showInLegend: true,
  //                 dataPoints: [
  //                     { label: "In The Paint", y: 70 },
  //                     { label: "Mid Range", y: 20 },
  //                     { label: "Three Point", y: 20 }
  //                 ]
  //             },

  //             {
  //                 type: "column",
  //                 name: "Finals",
  //                 showInLegend: true,
  //                 dataPoints: [
  //                     { label: "In The Paint", y: 90 },
  //                     { label: "Mid Range", y: 30 },
  //                     { label: "Three Point", y: 40 }
  //                 ]
  //             }
  //         ],

  //         axisY: {
  //             suffix: "%"
  //         }
  //     });
  //     chart.render();
  // }

  return (
    <div class="content">
      <div class="row">
        <div class="col-sm-4">
          <div class="card" style={{ backgroundColor: "rgb(11, 0, 65)" }}>
            {<h4 style={{ textAlign: 'center', color: 'crimson' }} class="card-title">{player[0].name}</h4>}

            <div class="card-body">
              <img class="card-img-top"
                src="https://www.discoverlosangeles.com/sites/default/files/styles/hero/public/media/sports/lebron_james_preseason_2018.jpg?itok=-l1GeKAX"
                alt="Sample Image" />
              <p className="card-text" style={{ marginTop: '8px', color: 'crimson' }}>
                Age:<br />
              Height:<br />
              Weight:<br />
              </p>
            </div>
          </div>
        </div>

        {<div class="col-md-8">
          <div id="chartContainer" style={{ height: '300px', width: '100%' }}>
          </div>
        </div>}


      </div>
      <br />
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <h4 style={{ textAlign: 'center', color: 'white' }} class="card-title">Schedule</h4>
            <table style={{ color: 'white' }} class="table table-bordered table-sm">
              <thead>
                <tr>
                  <th>(Home Team Name)</th>
                  <th>(Opponent Team Name)</th>
                  <th>Home Score</th>
                  <th>Opponent Score</th>
                </tr>
                <tr>
                  <td style={{ color: 'red' }}>Lakers</td>
                  <td style={{ color: 'green' }}>Heat</td>
                  <td>100</td>
                  <td>116</td>
                </tr>
                <tr>
                  <td style={{ color: 'green' }}>Lakers</td>
                  <td style={{ color: 'red' }} >Celtics</td>
                  <td>90</td>
                  <td>70</td>
                </tr>
                <tr>
                  <td style={{ color: 'green' }}>Lakers</td>
                  <td style={{ color: 'red' }}>Jazz</td>
                  <td>111</td>
                  <td>85</td>
                </tr>

              </thead>
            </table>

          </div>
        </div>


        {<div class="col-md-8">
          <table class="table table-bordered table-md" style={{ backgroundColor: 'rgb(68, 68, 68)', color: 'white' }}>
            <thead>
              <tr>
                <th>Lebron James</th>
                <th>PPG</th>
                <th>Blocks</th>
                <th>Steals</th>
                <th>Rebounds</th>
                <th>Free Throws</th>
                <th>Field Goal</th>
                <th>3PT%</th>
                <th>Total Points</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Regular Season</td>
                <td>y</td>
                <td>x</td>
                <td>y</td>
                <td>x</td>
                <td>y</td>
                <td>x</td>
                <td>y</td>
                <td>y</td>

              </tr>
              <tr>
                <td>Playoffs</td>
                <td>y</td>
                <td>x</td>
                <td>y</td>
                <td>x</td>
                <td>y</td>
                <td>x</td>
                <td>y</td>
                <td>y</td>

              </tr>
            </tbody>
          </table>
        </div>}

      </div>
    </div>
  )
}


export default Player;