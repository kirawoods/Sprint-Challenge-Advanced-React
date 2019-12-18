import React, { useEffect, useState } from "react";
import "./App.css";
import { storage } from "local-storage-fallback";
import { PlayerCards } from "./components/PlayerCards";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => (props.theme.mode === "dark" ? "#111" : "#EEE")};
  color: ${props => (props.theme.mode === "dark" ? "#EEE" : "#111")};
  
}

.player-card {
   border: ${props =>
     props.theme.mode === "dark" ? "2px solid #EEE" : "2px solid #111"};
}

.player-info {
   border: ${props =>
     props.theme.mode === "dark" ? "2px solid #EEE" : "2px solid #111"};
}`;

function getInitialTheme() {
  const savedTheme = storage.getItem("theme");
  return savedTheme ? JSON.parse(savedTheme) : { mode: "light" };
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div className="App">
          <h1>Womens World Cup Most Searched Players</h1>
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
