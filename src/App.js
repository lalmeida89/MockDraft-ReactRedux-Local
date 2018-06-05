import React, { Component } from 'react';
import './App.css';
import Intro from './components/intro'
import TeamRosters from './components/teamRosters'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{marginLeft: '30%'}}> Mock Draft </h1><hr/>
        <Intro />
        <TeamRosters />
      </div>
    );
  }
}

export default App;
