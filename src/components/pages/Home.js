import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles.css';
const Home = () => {
    return (
        <div class="row-2">
            <div class="article-container">
                <div class="article">
                    <div class="article-content">
                        <img class="article-image" src="assets/nfl-refs.jpg"></img>
                        <h4 class="title">Referees Storm off the Field After Heated Conflict with The Texans Offense
                        </h4>
                        <p class="Summary">The officials for the game got into a dispute with the Texans Quarterback
                            Dave Mills after an unsportsmanlike conduct, in which the rookie did his "new and
                            special" dance move, lets just say it wasn't so special.</p>
                        <p class="author"><small class="muted">J. Golden Ellis</small></p>
                    </div>
                </div>
                <div class="article">
                    <div class="article-content">
                        <img class="article-image" src="assets/logan-vs-antonio.jpg"></img>
                        <h4 class="title">Antonio Brown vs Logan Paul, We all Know Who We Want to Win</h4>
                        <p class="Summary">With the much anticipated fight on the line, bets started piling up in
                            Antonio's favor especially with his recent charges for battery and burglary, we can only
                            hope that Antonio will do the same to Logan.</p>
                        <p class="author"><small class="muted">Ethan Kaloi</small></p>
                    </div>
                </div>
            </div>
            <div class="col-extra">
                <h5>Top Headlines</h5>
                <ul class="top-headlines">
                    <li>
                        <a class="headline">BYU Football beats Oregon</a>
                    </li>
                    <li>
                        <a class="headline">BYU Swim beats Oregon</a>
                    </li>
                    <li>
                        <a class="headline">BYU Track beats Oregon</a>
                    </li>
                    <li>
                        <a class="headline">BYU Womens Soccer beats Oregon</a>
                    </li>
                    <li>
                        <a class="headline">BYU Rugby beats Oregon</a>
                    </li>
                    <li>
                        <a class="headline">Oregon Ducks football association banned from PAC-12</a>
                    </li>

                </ul>
            </div>
        </div>);
};

export default Home;