import React, { Component } from "react";
import "./PlayerCards.css";
import axios from "axios";

export class PlayerCards extends Component {
  state = {
    playerInfo: []
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`).then(res => {
      const players = res.data;
      this.setState({ playerInfo: players });
    });
  }

  render() {
    if (this.state.playerInfo.length === 0) {
      return <p>Loading...</p>;
    } else {
      return this.state.playerInfo.map(player => (
        <div className="player-card" key={player.id}>
          <h2 className="player-name">{player.name}</h2>
          <div className="player-info">
            <p>Country: {player.country}</p>
            <p>Searches: {player.searches}</p>
          </div>
        </div>
      ));
    }
  }
}
