import React  from 'react';
import {connect} from 'react-redux';

import {fetchPlayers} from '../actions/fetchAction'
import {getPlayerProfile} from '../actions/setCurrentPlayerAction'
import {
  showPosition
} from '../actions/showActions'

import {playerDrafted} from '../actions/draftPlayersAction'



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
      <button
      style={{float : 'right', marginTop: '10px'}}
      onClick={()=> props.currentId.dispatch(playerDrafted(player))}
      className='draftBtn'>Draft
      </button>
      <p
      onClick={()=> props.currentId.dispatch(getPlayerProfile(player.id))}>
      <b>{player.firstName} {player.lastName} </b>{player.position}
      </p>
      <p>ADP: {player.rank}</p>
      <hr/>
      </div>
    ))
  return <div>{playerNames}</div>
}



class Intro extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.dispatch(fetchPlayers())
  }

  displayPosition = position => {
    this.props.dispatch(showPosition(position))
  }



  render() {
    const PositionHeader = () => {
      let playerPosition = this.props.displayPlayers

      if (playerPosition === this.props.wr){
        return (<div><h1>Wide Receivers</h1></div>)
      }
      else if (playerPosition === this.props.rb){
        return (<div><h1>Running Backs</h1></div>)
      }
      else if (playerPosition === this.props.qb){
        return (<div><h1>Quarterbacks</h1></div>)
      }
      else if (playerPosition === this.props.te){
        return (<div><h1>Tight Ends</h1></div>)
      }
      else if (playerPosition === this.props.def){
        return (<div><h1>Defenses</h1></div>)
      }
      else if (playerPosition === this.props.k){
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
        <div className='players'>
          <button onClick={()=>this.displayPosition(this.props.players)}>show all players </button>
          <button onClick={()=>this.displayPosition(this.props.qb)}>show qbs </button>
          <button onClick={()=>this.displayPosition(this.props.rb)}>show rbs </button>
          <br/>
          <button onClick={()=>this.displayPosition(this.props.wr)}>show wrs </button>
          <button onClick={()=>this.displayPosition(this.props.te)}>show tes </button>
          <button onClick={()=>this.displayPosition(this.props.def)}>show def </button>
          <button onClick={()=>this.displayPosition(this.props.k)}>show k </button>
          <PositionHeader />
          <ShowPlayers players={this.props.displayPlayers} currentId={this.props} />
        </div>
      )
    }
  }
}


export const mapStateToProps = ({playersReducer}) => {
  console.log(playersReducer)
  return ({
  players: playersReducer.players,
  qb: playersReducer.qb,
  wr: playersReducer.wr,
  rb: playersReducer.rb,
  te: playersReducer.te,
  def: playersReducer.def,
  k: playersReducer.k,
  loading: playersReducer.loading,
  error: playersReducer.error,
  displayPlayers: playersReducer.displayPlayers,
  currentPlayer: playersReducer.currentPlayer,
  profile: playersReducer.profile
  })
}


export default connect(mapStateToProps)(Intro);
