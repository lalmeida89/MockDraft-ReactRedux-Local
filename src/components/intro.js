import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchPlayers} from '../fetchAction'

class Intro extends Component {
    componentDidMount() {
      this.props.dispatch(fetchPlayers());
    }

  render() {
    console.log(this.props)
    if (this.props.loading) {
      return <div>Loading...</div>;
    } 
    else if (this.props.error) {
      return <div>Error! {this.props.error}</div>;
    }


    renderPlayers = () => { 
      this.props.players.map(player => (
        <div key={player.id}>
          <h3>{player.name} {player.position}</h3>
          <p>{player.seasonPts}</p>
        </div>
      ));
      return <ul>{playerNames}</ul>
     }
    return null
  }
}

export const mapStateToProps = (state, props) => ({
  players: state.players,
  qb: state.qb,
  wr: state.wr,
  rb: state.rb,
  te: state.te,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(Intro);
