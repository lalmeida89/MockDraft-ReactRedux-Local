import React  from 'react';
import {connect} from 'react-redux';

import {fetchPlayers} from '../fetchAction'
import {getPlayerProfile} from '../setCurrentPlayerAction'
import {
  showPosition
} from '../showActions'


const sort_by = (field, reverse, primer) => {
  var key = primer ?
    function(x) {return primer(x[field])} :
    function(x) {return x[field]};

    reverse = !reverse ? 1 : -1;

    return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a < b) - (b < a));
    }
}

const ShowPlayers = props => {
  console.log(props)
  props.players.sort(sort_by('rank', true, parseInt));
  let playerNames = props.players.map((player, index) => (
    <div key={index} className='playerSelector'>
      <h3
      onClick={()=> props.currentId.dispatch(getPlayerProfile(player.id))}>
      {player.firstName} {player.lastName} {player.position}
      </h3>
      <p>ADP: {player.rank}</p>
      </div>
    ))
  return <div>{playerNames}</div>
}



class Intro extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.dispatch(fetchPlayers())
  }

  displayQBS = () => {
    this.props.dispatch(showPosition(this.props.qb));
    console.log('fucking work god damn it')
  }

  displayRBS = () => {
    this.props.dispatch(showPosition(this.props.rb));
    console.log('fucking work god damn it')
  }

  displayWRS = () => {
    this.props.dispatch(showPosition(this.props.wr));
    console.log('fucking work god damn it')
  }

  displayTES = () => {
    this.props.dispatch(showPosition(this.props.te));
    console.log(this.props, 'fucking work god damn it')
  }
  displayDEF = () => {
    this.props.dispatch(showPosition(this.props.def));
    console.log('fucking work god damn it')
  }

  displayK = () => {
    this.props.dispatch(showPosition(this.props.k));
    console.log(this.props, 'fucking work god damn it')
  }

  displayAll = () => {
    this.props.dispatch(showPosition(this.props.players));
    console.log(this.props, 'fucking work god damn it')
  }



  render() {
    const PositionHeader = () => {
      let playerPosition = this.props.displayPlayers
      
      if (playerPosition == this.props.wr){
        return (<div><h1>Wide Receivers</h1></div>)
      }
      else if (playerPosition == this.props.rb){
        return (<div><h1>Running Backs</h1></div>)
      }
      else if (playerPosition == this.props.qb){
        return (<div><h1>Quarterbacks</h1></div>)
      }
      else if (playerPosition == this.props.te){
        return (<div><h1>Tight Ends</h1></div>)
      }
      else if (playerPosition == this.props.def){
        return (<div><h1>Defenses</h1></div>)
      }
      else if (playerPosition == this.props.k){
        return (<div><h1>Kickers</h1></div>)
      }
      else
        return (<div><h1>All Players</h1></div>)
    }

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
          <button onClick={()=>this.displayAll()}>show all players </button>
          <button onClick={()=>this.displayQBS()}>show qbs </button>
          <button onClick={()=>this.displayRBS()}>show rbs </button>
          <button onClick={()=>this.displayWRS()}>show wrs </button>
          <button onClick={()=>this.displayTES()}>show tes </button>
          <button onClick={()=>this.displayDEF()}>show def </button>
          <button onClick={()=>this.displayK()}>show k </button>
          <PositionHeader />
          <ShowPlayers players={this.props.displayPlayers} currentId={this.props} />
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
  def: state.def,
  k: state.k,
  loading: state.loading,
  error: state.error,
  displayPlayers: state.displayPlayers,
  currentPlayer: state.currentPlayer,
  profile: state.profile
  })
}


export default connect(mapStateToProps)(Intro);
