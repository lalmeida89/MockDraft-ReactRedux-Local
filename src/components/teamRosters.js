import React from 'react';
import {connect} from 'react-redux';

class TeamRosters extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props.team1)
    const Team1Roster = () => {
      let team1Roster = this.props.team1.map((player, index) => (
        <div key={index}>
          <h3> {player.name} </h3>
        </div>
      ))
      return <div> {team1Roster} </div>
    }

    return (
      <div className='rostersDiv'>
        <h1> Rosters </h1>
        <Team1Roster />
      </div>
    )
  }
}


export const mapStateToProps = (state, props) => {
  console.log(state, props);
  return ({
    playersUsed: state.playersUsed,
    team1: state.team1
  })
}
export default connect (mapStateToProps)(TeamRosters)
