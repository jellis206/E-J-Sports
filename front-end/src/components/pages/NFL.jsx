import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import ref from "../../assets/nfl-refs.jpg";
import nflt from "../../assets/nfl.teams.jpg";
import next from "../../assets/nfl.schedule.jpg";
import last from "../../assets/nfl.stats.jpg";

const NFL = () => {
  return (
    <div className="row-2">
      <div className="article-container">
        <div className="article">
          <img className="article-image" src={ ref }></img>
          <h4 className="title">Referees Storm off the Field After Heated Conflict with The Texans Offense
          </h4>
          <p className="Summary">The officials for the game got into a dispute with the Texans Quarterback
            Dave Mills after an unsportsmanlike conduct, in which the rookie did his "new and
            special" dance move, lets just say it wasn't so special.</p>
          <p className="author"><small className="muted">J. Golden Ellis</small></p>
        </div>

        <div className="article">
          <img className="article-image" src={ nflt }></img>
          <h4 className="title">We cover all 30 NFL teams, find your home team below!</h4>
          <p className="Summary">- Patriots - Cardinals - Falcons - Panthers - Bears - Cowboys - Lions
            - Packers - Rams - Vikings - Saints - Giants - Eagles - 49ers - Seahawks - Buccaneers
            - Commanders - Ravens - Bills - Bengals - Browns - Broncos - Texans - Colts - Jaguars
            - Chiefs - Raiders - Chargers - Dolphins - Jets - Steelers - Titans -</p>
          <p className="author"><small className="muted">J. Golden Ellis</small></p>
        </div>

        <div className="article">
          <img className="article-image" src={ next }></img>
          <h4 className="title">Catch all of the must-watch games with J and J</h4>
          <p className="Summary"> - Ravens @ Patriots, 9/25 - Lions @ Patriots, 10/9 -
            Rams @ Cardinals, 9/25 - Chiefs @ Colts, 9/25 -</p>
          <p className="author"><small className="muted">J. Golden Ellis</small></p>
        </div>

        <div className="article">
          <img className="article-image" src={ last }></img>
          <h4 className="title">EJ Sports is your Fantasy Football go to, we have all the stats</h4>
          <p className="Summary"> - Tom Brady hold the record for most Super Bowl appearances at 10 -
            Rob Gronkowski holds the Patriots touchdown record with 80 -</p>
          <p className="author"><small className="muted">J. Golden Ellis</small></p>
        </div>
      </div>

      <div className="col-extra">
        <h5>What's New In the NFL World</h5>
        <ul className="top-headlines">
          <li>
            <a className="headline">Why the Patriots dynasty sets an impossible standard</a>
          </li>
          <li>
            <a className="headline">A look at Chark Barringon and other BYU draft prospects</a>
          </li>
          <li>
            <a className="headline">Catching up with Steve Young, Taysom Hill, and other BYU greats</a>
          </li>
          <li>
            <a className="headline">What Jamaar Williams eats in a day</a>
          </li>
          <li>
            <a className="headline">Is Taysom Hill the most versatile player in the</a>
          </li>
          <li>
            <a className="headline">Report- Mac Jones will play the best football of his life next week</a>
          </li>
        </ul>

      </div>
    </div>);
};

export default NFL;