import React, { Component } from 'react';
import './App.css';
import Intro from './components/intro'
import TeamRosters from './components/teamRosters'
import PlayersDrafted from './components/playersDrafted'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{textAlign: 'center'}}> Mock Draft </h1><hr/>
        <PlayersDrafted />
        <Intro />
        <TeamRosters />
      </div>
    );
  }
}

export default App;
