import React  from 'react';
import {connect} from 'react-redux';

import {fetchPlayers} from '../fetchAction'
import {
  showQB,
  showRB,
  showWR,
  showTE
} from '../showActions'

const sort_by = (field, reverse, primer) => {
  var key = primer ?
    function(x) {return primer(x[field])} :
    function(x) {return x[field]};

    reverse = !reverse ? 1 : -1;

    return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
}

const ShowPlayers = props => {
  props.players.sort(sort_by('seasonPts', true, parseInt));
  let playerNames = props.players.map((player, index) => (
    <div key={index}>
      <p>{player.key}</p>
      <h3>{player.name} {player.position}</h3>
      <p>{player.seasonPts}</p>
      </div>
    ))
  return <div>{playerNames}</div>
}



class Intro extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPlayers())
  }

  displayQBS = () => {
    this.props.dispatch(showQB(this.props.qb));
    console.log('fucking work god damn it')
  }

  displayRBS = () => {
    this.props.dispatch(showRB(this.props.rb));
    console.log('fucking work god damn it')
  }

  displayWRS = () => {
    this.props.dispatch(showWR(this.props.wr));
    console.log('fucking work god damn it')
  }

  displayTES = () => {
    this.props.dispatch(showTE(this.props.te));
    console.log(this.props, 'fucking work god damn it')
  }



  render() {

    const { error, loading } = this.props;

    if(error) {
      return <div> ERROR! {error.message}</div>;
    }
    if(loading) {
      return <div> LOADING... </div>;
    }
    else {
      return (
        <div>
          <button onClick={()=>this.displayQBS()}>show qbs </button>
          <button onClick={()=>this.displayRBS()}>show rbs </button>
          <button onClick={()=>this.displayWRS()}>show wrs </button>
          <button onClick={()=>this.displayTES()}>show tes </button>
          <ShowPlayers players={this.props.displayPlayers} />
        </div>
      )
    }

    return
  }
}


export const mapStateToProps = (state, props) => {
  console.log(state, props)
  return ({
  players: state.players,
  qb: state.qb,
  wr: state.wr,
  rb: state.rb,
  te: state.te,
  loading: state.loading,
  error: state.error,
  displayPlayers: state.displayPlayers
  })
}

export default connect(mapStateToProps)(Intro);
