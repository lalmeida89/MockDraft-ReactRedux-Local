import React, { Component } from 'react';
import './App.css';
import Intro from './components/intro';
import DraftPage from './components/homepageSubmit'
/*import TeamRosters from './components/teamRosters'
import PlayersDrafted from './components/playersDrafted'*/



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{textAlign: 'center'}}> Mock Draft </h1><hr/>
        <Intro />
        <DraftPage />
      </div>
    );
  }
}

export default App;
