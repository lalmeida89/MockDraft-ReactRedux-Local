import React, { Component } from 'react';
import './App.css';
import Intro from './components/intro'
import PlayerProfile from './components/playerProfile'
import TeamRosters from './components/teamRosters'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Mock Draft </h1>
        <PlayerProfile />
        <Intro />
        <TeamRosters />
      </div>
    );
  }
}

export default App;
