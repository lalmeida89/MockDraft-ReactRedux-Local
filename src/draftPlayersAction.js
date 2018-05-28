export const DRAFT_PLAYER ='DRAFT_PLAYER';
export const draftPlayer = teamPicksObj => ({
  type: DRAFT_PLAYER,
  team1: teamPicksObj.team1,
  playersUsed: teamPicksObj.team1
})

export const teamPicks = player => {
  let teamPicksObj = {team1 : []}
    //for (let i=0; i < teamPicksObj.team1.length; i++){
  teamPicksObj.team1.push(player)
  return teamPicksObj
}

export const playerDrafted = (player) => {
  return dispatch => {
    let teamPicksObj = teamPicks(player)
    dispatch(draftPlayer(teamPicksObj));
    console.log(player);

    //teamArray.push(playerArray.player);
  }
}
