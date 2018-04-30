import React from 'react';
import {connect} from 'react-redux';

class PlayerProfile extends React.Component {
  render(){
    if(!this.props.playerProfile){
      return null
    }
    else if (this.props.playerProfile){
      let profile = this.props.playerProfile;
      console.log(profile);
      return (
        <div>
          <h1>{profile.name} {profile.position}</h1>
          <h2>{profile.status}</h2>
          <h4>notes</h4>
          <p>{profile.notes[0].analysis.slice(0, 200)}...</p>
          <p>{profile.notes[0].timestamp}</p>
          <p>{profile.notes[0].body}</p>

        </div>
      )
    }
  }
}

export const mapStateToProps = (state, props) => {
  console.log(state, props);
  return ({
    playerProfile: state.playerProfile
  })
}
export default connect (mapStateToProps)(PlayerProfile)
