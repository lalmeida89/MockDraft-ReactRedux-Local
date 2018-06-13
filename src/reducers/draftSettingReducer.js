const initialState = {
  teamCount: 12,
  scoring: 'standard',
  draftPos: 7,
  draftType: 'snake',
  numberOfQBs: 1,
  numberOfRBs: 2,
  numberOfWRs: 2,
  numberOfTEs: 1,
  numberOfWRsRBs: 0,
  numberOfWRsTEs: 0,
  numberOfRBsTEs: 0,
  numberOfRBsWRsTEs: 1,
  numberOfQBsWRsRBsTEs: 0,
  numberOfDST: 1,
  numberOfKickers: 1,
  benchCount: 6,
  showSettingsPage: true
}

export default (playersState = initialState, action) => {
  console.log(action.type)
    switch (action.type) {
        case 'TEAM_COUNT_CHANGE':
          console.log(action);
          return Object.assign({}, playersState, {
            teamCount: action.teamCount
          });
        case 'DRAFT_PAGE_SUBMIT':
          console.log(action, playersState);
          return Object.assign({}, playersState, {
            teamCount: action.teamCount,
            draftPos: action.draftPos,
            numberOfQBs: action.numberOfQBs,
            numberOfRBs: action.numberOfRBs,
            numberOfWRs: action.numberOfWRs,
            numberOfTEs: action.numberOfTEs,
            numberOfWRsRBs: action.numberOfWRsRBs,
            numberOfWRsTEs: action.numberOfWRsTEs,
            numberOfRBsTEs: action.numberOfRBsTEs,
            numberOfRBsWRsTEs: action.numberOfRBsWRsTEs,
            numberOfQBsWRsRBsTEs: action.numberOfQBsWRsRBsTEs,
            numberOfDST: action.numberOfDST,
            numberOfKickers: action.numberOfKickers,
            benchCount: action.benchCount,
            showSettingsPage: false
          });
        default:
          return {
            teamCount: playersState.teamCount,
            scoring: playersState.scoring,
            draftPos: playersState.draftPos,
            draftType: playersState.draftType,
            numberOfQBs: playersState.numberOfQBs,
            numberOfRBs: playersState.numberOfRBs,
            numberOfWRs: playersState.numberOfWRs,
            numberOfTEs: playersState.numberOfTEs,
            numberOfWRsRBs: playersState.numberOfWRsRBs,
            numberOfWRsTEs: playersState.numberOfWRsTEs,
            numberOfRBsTEs: playersState.numberOfRBsTEs,
            numberOfRBsWRsTEs: playersState.numberOfRBsWRsTEs,
            numberOfQBsWRsRBsTEs: playersState.numberOfQBsWRsRBsTEs,
            numberOfDST: playersState.numberOfDST,
            numberOfKickers: playersState.numberOfKickers,
            benchCount: playersState.benchCount,
            showSettingsPage: playersState.showSettingsPage
          }
        }
}
