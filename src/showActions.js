export const SHOW_QB = 'SHOW_QB';
export const SHOW_WR = 'SHOW_WR';
export const SHOW_RB = 'SHOW_RB';
export const SHOW_TE = 'SHOW_TE';
export const SHOW_ALL= 'SHOW_ALL';

export const showQB = displayPlayers => ({
    type: SHOW_QB,
    displayPlayers
});

export const showRB = displayPlayers => ({
    type: SHOW_RB,
    displayPlayers
});

export const showWR = displayPlayers => ({
    type: SHOW_WR,
    displayPlayers
});

export const showTE = displayPlayers => ({
    type: SHOW_TE,
    displayPlayers
});

export const showAll = displayPlayers => ({
    type: SHOW_ALL,
    displayPlayers
});
/*
export const setPosition = array => {
  return dispatch => {
    for (let i=0 ; i<array.length ; i++){
      if (array[i].position == 'WR'){
        dispatch(showWR(array[i].position))
      }
      if (array[i].position == 'QB'){
        dispatch(showQB(array[i].position))
      }
      if (array[i].position == 'RB'){
        dispatch(showRB(array[i].position))
      }
      if (array[i].position == 'TE'){
        dispatch(showTE(array[i].position))
      }
    }
  }
}

export const showPlayers = currentPosition =>{
  return dispatch => {
    for (let i=0; i<currentPosition.length; i++){
      if (currentPosition[i].position == 'QB'){

      }
    }
  }
}*/
