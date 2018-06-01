export const DRAFT_PLAYER ='DRAFT_PLAYER';

/* once we click on the button to draft a player, we first push it to the team array then we set
the state to be that team array. all of the players drafted will be merged onto the playersUsed array */
export const draftPlayer = teamPicksObj => ({
  type: DRAFT_PLAYER,
  team1: teamPicksObj.team1,
  playersUsed: teamPicksObj.team1
})

export const teamPicks = player => {
  let teamPicksObj = {team1 : []}
  teamPicksObj.team1.push(player)
  return teamPicksObj
}

export const playerDrafted = (player) => {
  return dispatch => {
    let teamPicksObj = teamPicks(player)
    dispatch(draftPlayer(teamPicksObj));
    console.log(player);
  }
}

/*
teams = [userTeam : [], compTeam1 : []]
  for( let i=0; i< teams.length ; i++){
    if (user == teams[i]) {

    }
  }

*/
