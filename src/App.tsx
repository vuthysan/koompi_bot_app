import "./App.css";

import { MainButton } from "@twa-dev/sdk/react";
import React from "react";
import WebApp from "@twa-dev/sdk";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <MainButton
        text="Click me"
        onClick={() => WebApp.showAlert("Hello World")}
      />
    </div>
  );
}

export default App;
