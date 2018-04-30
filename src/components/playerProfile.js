import React from 'react';
import {connect} from 'react-redux';

class PlayerProfile extends React.Component {
  render(){
    if(!this.props.profile){
      return null
    }
    else if (this.props.profile){
      console.log(this.props.profile.notes)
      let profile = this.props.profile;
      return (
        <div>
          <h1>{profile.name} {profile.position}</h1>
          <h2>{profile.status}</h2>
          <h4> notes </h4>
        </div>
      )
    }
  }
}

export const mapStateToProps = (state, props) => {
  console.log(state, props);
  return ({
    profile: state.playerProfile
  })
}
export default connect (mapStateToProps)(PlayerProfile)
