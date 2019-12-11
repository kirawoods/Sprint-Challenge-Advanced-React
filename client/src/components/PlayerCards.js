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
      console.log(this.state.playerInfo);
      return (
        <div className="player-card">
          <h2>{this.state.playerInfo[0].name}</h2>
          <p>{this.state.playerInfo[0].country}</p>
          <p>{this.state.playerInfo[0].searches}</p>
        </div>
      );
    }
  }
}
