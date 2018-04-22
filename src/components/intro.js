import React  from 'react';
import {connect} from 'react-redux';

import {fetchPlayers} from '../fetchAction'

class Intro extends React.Component {
    componentDidMount() {
      this.props.dispatch(fetchPlayers())
    }


    renderPlayers = () => { 
      let playerNames = this.props.players.map(player => (
      <div key={player.id}>
        <h3>{player.name} {player.position}</h3>
        <p>{player.seasonPts}</p>
      </div>
    ))
    return <div>{playerNames}</div>
  }

  render() {
    return (
      <button onClick={()=>this.renderPlayers}>lets play</button>
    )
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
