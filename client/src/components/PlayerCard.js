import React, { Component } from "react";
import "./PlayerCard.css";

export class PlayerCard extends Component {
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
