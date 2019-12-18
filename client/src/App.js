import React, { Component, useState } from "react";
import "./App.css";
import { PlayerCards } from "./components/PlayerCards";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => (props.theme.mode === "dark" ? "#111" : "#EEE")};
  color: ${props => (props.theme.mode === "dark" ? "#EEE" : "#111")};
}`;

function App() {
  const [theme, setTheme] = useState({ mode: "dark" });
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div className="App">
          <h1>Women's World Cup Most Searched Players</h1>
          <button
            onClick={e =>
              setTheme(
                theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
              )
            }
          >
            Toggle Theme
          </button>
          <div className="card-container">
            <PlayerCards />
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
