import React from 'react';
import {connect} from 'react-redux';
import {hidePlayerProfile} from '../setCurrentPlayerAction';
import {playerDrafted} from '../draftPlayersAction'


function rearrangeDate(dateString) {

  var numbers = dateString.substring(0,4);

  return dateString.substring(5) + '-' + numbers
}


class PlayerProfile extends React.Component {

  handleDrafting = (player) => {
    this.props.dispatch(playerDrafted(player))
    console.log(player);
  }

  render(){
    if(!this.props.playerProfile){
      return null
    }
    else if (this.props.playerProfile){
      let profile = this.props.playerProfile;
      let newDate = profile.notes[0].timestamp.slice(0,10);
      let timePosted = rearrangeDate(newDate);
      console.log(profile);
      return (
        <div className='playerCard'>
          <p onClick={()=>this.props.dispatch(hidePlayerProfile())}
          style={{float:'right', cursor: 'pointer'}}>X</p>
          <h1 className='playerName'>{profile.name} {profile.position}</h1>
          <button
          onClick={()=> this.handleDrafting(profile)}
          className='draftBtn'>Draft
          </button>
          <h3>Notes</h3>
          <p>{timePosted}</p>
          <h4>{profile.notes[0].body}</h4>
          <p>{profile.notes[0].analysis.slice(0, 200)}...</p>

        </div>
      )
    }
  }
}

export const mapStateToProps = (state, props) => {
  console.log(state, props);
  return ({
    playerProfile: state.playerProfile,
    playersUsed: state.playersUsed,
    team1: state.team1
  })
}
export default connect (mapStateToProps)(PlayerProfile)
