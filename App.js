import React from "react";
import "./App.css"; // You can create this CSS file for styling
import PlayersList from "./Components/PlayersList";


function App() {
  return (
    <div className="app">
      <h1>Player List</h1>
      <PlayersList />
    </div>
  );
}

export default App;
