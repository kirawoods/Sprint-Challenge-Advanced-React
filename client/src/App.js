import React, { Component } from "react";
import "./App.css";
import { PlayerCard } from "./components/PlayerCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Women's World Cup Most Searched Players</h1>
        <div className="card-container">
          <PlayerCard />
        </div>
      </div>
    );
  }
}

export default App;
