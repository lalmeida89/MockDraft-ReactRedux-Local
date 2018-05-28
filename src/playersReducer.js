
const initialState = {
    players: [],
    loading: false,
    error: null,
    wr: [],
    qb: [],
    rb: [],
    te: [],
    displayPlayers: [],
    currentPlayer: 0,
    playerProfile: null,
    team1: [],
    playersUsed: []
};

export default (playersState = initialState, action) => {
  console.log(action.type)
    switch (action.type) {
        case 'FETCH_PLAYERS_SUCCESS':
          console.log(action);
          return {
            ...playersState,
            qb: [...action.qb],
            wr: [...action.wr],
            te: [...action.te],
            rb: [...action.rb],
            players: [...action.wr, ...action.qb, ...action.rb, ...action.te],
            displayPlayers: [...action.wr, ...action.qb, ...action.rb, ...action.te],
            loading: false,
            error: null,
            team1: playersState.team1,
            playersUsed: playersState.playersUsed
          };

        case 'SHOW_QB' :
          console.log(action);
          return Object.assign({}, playersState, {
            displayPlayers: playersState.qb,
            currentPlayer: 0,
            playerProfile: null
          });
        case 'SHOW_WR' :
          console.log(action);
          return Object.assign({}, playersState, {
            displayPlayers: playersState.wr,
            currentPlayer: 0,
            playerProfile: null
          });
        case 'SHOW_RB' :
          console.log(action);
          return Object.assign({}, playersState, {
            displayPlayers: playersState.rb,
            currentPlayer: 0,
            playerProfile: null
          });
        case 'SHOW_TE' :
          console.log(action);
          return Object.assign({}, playersState, {
            displayPlayers: playersState.te,
            currentPlayer: 0,
            playerProfile: null
          });
        case 'SHOW_ALL' :
          console.log(action);
          return Object.assign({}, playersState, {
            displayPlayers: playersState.players,
            currentPlayer: 0,
            playerProfile: null
          });
        case 'FETCH_PLAYERS_ERROR':
          return {
            loading: true,
            error: action.error,
            players: playersState.players,
            wr: playersState.wr,
            qb: playersState.qb,
            rb: playersState.rb,
            te: playersState.te,
            team1: playersState.team1,
            playersUsed: playersState.playersUsed
          };
        case 'FETCH_PLAYERS_REQUEST':
          return {
            loading: true,
            error: null,
            players: playersState.players,
            wr: playersState.wr,
            qb: playersState.qb,
            rb: playersState.rb,
            te: playersState.te,
            team1: playersState.team1,
            playersUsed: playersState.playersUsed
          };
        case 'SET_CURRENT_PLAYER':
          console.log(action);
          return Object.assign({}, playersState, {
            currentPlayer: action.id
          });
        case 'HIDE_PLAYER_PROFILE':
          console.log(action);
          return Object.assign({}, playersState, {
            currentPlayer: 0,
            playerProfile: null
          });
        case 'SET_PLAYER_PROFILE':
          console.log(action, playersState)
          return {
            playerProfile: action.profile,
            loading: false,
            error: null,
            players: playersState.players,
            wr: playersState.wr,
            qb: playersState.qb,
            rb: playersState.rb,
            te: playersState.te,
            displayPlayers: playersState.displayPlayers,
            team1: playersState.team1,
            playersUsed: playersState.playersUsed
          };
        case 'DRAFT_PLAYER':
          const withPlayersRemoved = playersState.players.filter(player => {
            return player.id !== action.playersUsed[0].id
          })
          const wrPlayersRemoved = playersState.wr.filter(wr => {
            return wr.id !== action.playersUsed[0].id
          })
          const rbPlayersRemoved = playersState.rb.filter(rb => {
            return rb.id !== action.playersUsed[0].id
          })
          const qbPlayersRemoved = playersState.qb.filter(qb => {
            return qb.id !== action.playersUsed[0].id
          })
          const tePlayersRemoved = playersState.te.filter(te => {
            return te.id !== action.playersUsed[0].id
          })
          console.log(withPlayersRemoved)
          console.log(action, playersState);
          return {
            playersUsed: [...playersState.playersUsed, ...action.playersUsed],
            players: withPlayersRemoved,
            wr: wrPlayersRemoved,
            qb: qbPlayersRemoved,
            rb: rbPlayersRemoved,
            te: tePlayersRemoved,
            displayPlayers: withPlayersRemoved,
            team1: [...playersState.team1, ...action.team1]
          }
        default:
          return {
            loading: true,
            error: null,
            players: playersState.players,
            wr: playersState.wr,
            qb: playersState.qb,
            rb: playersState.rb,
            te: playersState.te,
            playerProfile: playersState.playerProfile,
            team1: playersState.team1,
            playersUsed: playersState.playersUsed
          }
        }
    return playersState;
}
