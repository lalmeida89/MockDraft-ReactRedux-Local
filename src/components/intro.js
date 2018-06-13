import React  from 'react';
import {connect} from 'react-redux';
/*import PlayerProfile from './playerProfile'

import {fetchPlayers} from '../actions/fetchAction'
import {getPlayerProfile} from '../actions/setCurrentPlayerAction'
import {
  showPosition,
  showMenu,
  hideMenu
} from '../actions/showActions'
import {playerDrafted} from '../actions/draftPlayersAction';
import {Button} from '../styledComponents/dropdown'*/
import {Players} from './players'

const wrArray = [];
const rbArray = [];
const qbArray = [];
const teArray = [];
const dstArray = [];
const kickArray = [];
const wr_rbArray = [];
const wr_teArray = [];
const rb_teArray = [];
const wr_rb_teArray = [];
const qb_wr_rb_teArray= [];


const sort_by = (field, reverse, primer) => {
  var key = primer ?
    function(x) {return primer(x[field])} :
    function(x) {return x[field]};

    reverse = !reverse ? 1 : -1;

    return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a < b) - (b < a));
    }
}

const ShowPlayers = () => {
  Players.sort(sort_by('rank', true, parseInt));
  let playerNames = Players.map((player, index) => (
    <div key={index} className='playerSelector'>
      <p><b> {player.firstName} {player.lastName} </b>
      <i className="far fa-file-alt"></i></p>
      <hr/>
    </div>
    )
  )
  return (
    <div>
    {playerNames}
    </div>
  )
}



export default class Intro extends React.Component {
  componentDidMount(){
    this.sortPositions()
  }

  sortPositions = () => {
    for(let i=0; i< Players.length; i++){
      if(Players[i].position == 'WR'){
        wrArray.push(Players[i]);
        wr_rbArray.push(Players[i]);
        wr_teArray.push(Players[i]);
        wr_rb_teArray.push(Players[i]);
        qb_wr_rb_teArray.push(Players[i]);
      }
      else if(Players[i].position == 'RB'){
        rbArray.push(Players[i]);
        wr_rbArray.push(Players[i]);
        rb_teArray.push(Players[i]);
        wr_rb_teArray.push(Players[i]);
        qb_wr_rb_teArray.push(Players[i]);
      }
      else if(Players[i].position == 'QB'){
        qbArray.push(Players[i]);
        qb_wr_rb_teArray.push(Players[i]);
      }
      else if(Players[i].position == 'TE'){
        teArray.push(Players[i]);
        wr_teArray.push(Players[i]);
        rb_teArray.push(Players[i]);
        wr_rb_teArray.push(Players[i]);
      }
      else if(Players[i].position == 'DEF'){
        dstArray.push(Players[i]);
      }
      else if(Players[i].position == 'K'){
        kickArray.push(Players[i]);
      }
    }
  }

  /*showPosition = position => {
    for(let i=0; i < Players.length; i++){
      if(Players[i].position == 'RB'){

      }
    }
  }*/

  render() {

    /*const PositionHeader = () => {
      let playerPosition = this.props.displayPlayers

      if (playerPosition === this.props.wr){
        return (<div> Wide Receivers { this.props.menu ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i> }</div>)
      }
      else if (playerPosition === this.props.rb){
        return (<div> Running Backs { this.props.menu ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i> }</div>)
      }
      else if (playerPosition === this.props.qb){
        return (<div> Quarterbacks { this.props.menu ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i> }</div>)
      }
      else if (playerPosition === this.props.te){
        return (<div> Tight Ends { this.props.menu ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i> }</div>)
      }
      else if (playerPosition === this.props.def){
        return (<div> DST { this.props.menu ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i> }</div>)
      }
      else if (playerPosition === this.props.k){
        return (<div> Kickers { this.props.menu ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i> }</div>)
      }
      else
        return (<div> All Players { this.props.menu ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i> }</div>)
    }

    const { error, loading } = this.props;

    if(error) {
      return <div className='players'> ERROR! {error.message}</div>;
    }
    if(loading) {
      return <div className='players'> LOADING... </div>;
    }
    else { */
      return (
        <div className='players'>
          <h1 style={{textAlign: 'center'}}> Players Available </h1>
          <ShowPlayers />
        </div>
      )
  }
}


/*export const mapStateToProps = ({playersReducer}) => {
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
  profile: playersReducer.profile,
  menu: playersReducer.menu
  })
}


export default connect(mapStateToProps)(Intro);*/
