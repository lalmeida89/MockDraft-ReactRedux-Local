import DraftSetup from './homepageForm'
import React from 'react';
import {connect} from 'react-redux';
import {draftPageSubmit} from '../actions/draftSettingAction'

class DraftPage extends React.Component {
  submit = (values) => {
    const { dispatch } = this.props;
    // Do something with the form values
    dispatch(draftPageSubmit(
      values.numberOfTeams,
      values.draftOrder,
      values.qbCount,
      values.rbCount,
      values.wrCount,
      values.teCount,
      values.wrRbFlexCount,
      values.wrTeFlexCount,
      values.rbTeFlexCount,
      values.wrRbTeFlexCount,
      values.qbWrRbTeFlexCount,
      values.dstCount,
      values.kCount,
      values.benchCount
    ))
    console.log(values);
  }
  render() {
    return (
      <DraftSetup onSubmit={this.submit} />
    );
  }
}

export const mapStateToProps = ({draftSettingReducer}) => {
  console.log(draftSettingReducer);
  return ({
    teamCount: draftSettingReducer.teamCount
  })
}

export default connect(mapStateToProps)(DraftPage)
