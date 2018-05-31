import React from 'react';
import {connect} from 'react-redux';

class TeamRosters extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props.team1)
    const Team1Roster = () => {
      let myTeam = this.props.team1
      let myRoster = {qbs : [], wrs : [], rbs : [], tes : [], def : [], flex : [],k : [], bench : []}
      console.log(myRoster)
      for(let i=0; i< myTeam.length; i++){
        if (myTeam[i].position == 'QB'){
          myRoster.qbs.push(myTeam[i])
          if (myRoster.qbs.length > 1){
            myRoster.bench.push(myTeam[i])
          }
        }
        if (myTeam[i].position == 'WR'){
          myRoster.wrs.push(myTeam[i])
          if (myRoster.wrs.length > 2){
            myRoster.bench.push(myTeam[i])
            if (myRoster.flex.length < 1) {
              myRoster.flex.push(myTeam[i])
            }
          }
        }
        if (myTeam[i].position == 'TE'){
          myRoster.tes.push(myTeam[i])
          if (myRoster.tes.length > 1){
            myRoster.flex.push(myTeam[i])
            myRoster.bench.push(myTeam[i])
          }
        }
        if (myTeam[i].position == 'RB'){
          myRoster.rbs.push(myTeam[i])
          if (myRoster.rbs.length > 2){
            myRoster.flex.push(myTeam[i])
            myRoster.bench.push(myTeam[i])
          }
        }
        if (myTeam[i].position == 'DEF'){
          myRoster.def.push(myTeam[i])
          if (myRoster.def.length > 1){
            myRoster.bench.push(myTeam[i])
          }
        }
        if (myTeam[i].position == 'K'){
          myRoster.k.push(myTeam[i])
          if (myRoster.k.length > 1){
            myRoster.bench.push(myTeam[i])
          }
        }

      }
      const newBench = myRoster.bench.filter(player=>{
        return player.id !== myRoster.flex[0].id
      })
        return (
          <div className='playerNames'>
            <p><b> QB </b> { myRoster.qbs[0] ? myRoster.qbs[0].name : null } </p>
            <p><b> WR1 </b> { myRoster.wrs[0] ? myRoster.wrs[0].name : null } </p>
            <p><b> WR2 </b> { myRoster.wrs[1] ? myRoster.wrs[1].name : null } </p>
            <p><b> RB1 </b> { myRoster.rbs[0] ? myRoster.rbs[0].name : null } </p>
            <p><b> RB2 </b> { myRoster.rbs[1] ? myRoster.rbs[1].name : null } </p>
            <p><b> TE  </b> { myRoster.tes[0] ? myRoster.tes[0].name : null} </p>
            <p><b> FLEX  </b> { myRoster.flex[0] ? myRoster.flex[0].name : null} </p>
            <p><b> DEF </b> { myRoster.def[0] ? myRoster.def[0].name : null } </p>
            <p><b> K </b> { myRoster.k[0] ? myRoster.k[0].name : null} </p>
            <h3 style={{color:'grey', fontSize :'18px'}}> Bench </h3>
            <p><b> BN </b>   { newBench[0] ? newBench[0].name + ' ' + newBench[0].position : null } </p>
            <p><b> BN </b>   { newBench[1] ? newBench[1].name + ' ' + newBench[1].position : null } </p>
            <p><b> BN </b>   { newBench[2] ? newBench[2].name + ' ' + newBench[2].position : null } </p>
            <p><b> BN </b>   { newBench[3] ? newBench[3].name + ' ' + newBench[3].position : null } </p>
            <p><b> BN </b>   { newBench[4] ? newBench[4].name + ' ' + newBench[4].position : null } </p>
            <p><b> BN </b>   { newBench[5] ? newBench[5].name + ' ' + newBench[5].position : null } </p>
          </div>
        )
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
