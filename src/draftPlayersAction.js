export const DRAFT_PLAYER ='DRAFT_PLAYER';
export const draftPlayer = (player) => ({
  type: DRAFT_PLAYER,
  player
})

export const playerDrafted = (player) => {
  return dispatch => {
    dispatch(draftPlayer(player));
    console.log(player);
    //teamArray.push(playerArray.player);
  }
}
