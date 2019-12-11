import React, { Component } from "react";
import "./PlayerCards.css";

export class PlayerCards extends Component {
  render() {
    return (
      <div className="player-card">
        <h2>Player Name</h2>
        <p>Country</p>
        <p>Searches</p>
      </div>
    );
  }
}
