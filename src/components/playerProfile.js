import React from 'react';
import {connect} from 'react-redux';

class PlayerProfile extends React.Component {
  render(){
    if(!this.props.profile){
      return null
    }
    if (this.props.profile !== undefined ){
      let profile = this.props.profile;
      console.log(profile.notes)
      return (
        <div>
          <h1>{profile.name} {profile.position}</h1>
          <h2>{profile.status}</h2>
          <p>{profile.jerseyNumber}</p>
        </div>
      )
    }
  }
}

export const mapStateToProps = (state, props) => {
  console.log(state, props);
  return ({
    profile: state.profile
  })
}
export default connect (mapStateToProps)(PlayerProfile)
