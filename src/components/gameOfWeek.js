import React, { Component } from 'react';
import "./gameOfWeek.css";

import witcher from '../images/witcher.jpg';
class GameOfWeek extends Component {

    render() {
      return (
        <div className="parentBox">
            <div className="wrapperBanner">
                    <div className="title">
                            <span className="captionTitle">GAME OF THE WEEK</span>
                    </div>
                    <div className="centered">
                        <button className="secretButton">A SECRET BUTTON THAT YOU SHOULD TOTALLY IMPLEMENT</button>
                        <div>
                            <img src={witcher} alt="" className="banner"/>
                        </div>
                    </div>
            </div>
        </div>
      )}
}
export default GameOfWeek;