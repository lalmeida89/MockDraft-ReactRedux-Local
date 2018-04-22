import {
    FETCH_PLAYERS_SUCCESS,
    FETCH_PLAYERS_REQUEST,
    FETCH_PLAYERS_ERROR,
    SET_QB,
    SET_RB,
    SET_WR,
    SET_TE
} from './fetchAction';

const initialState = {
    players: [],
    loading: false,
    error: null,
    wr: [],
    qb: [],
    rb: [],
    te: []
};

export default function reducer(playersState = initialState, action) {
    switch (action.type) {
        case 'LOAD_PLAYERS':
            return {
                players: [...playersState.players, playersState.players],
                loading: true,
                error: null,
                wr: [...playersState.wr, action.wr],
                qb: [...playersState.qb, action.qb],
                rb: [...playersState.rb, action.rb],
                te: [...playersState.te, action.te],
            };
        case 'FETCH_PLAYERS_ERROR':
            return {
                loading: false,
                error: action.error,
                players: playersState.players,
                wr: playersState.wr,
                qb: playersState.qb,
                rb: playersState.rb,
                te: playersState.te
            };
        default:
            return {
                loading: false,
                error: null,
                players: playersState.players,
                wr: playersState.wr,
                qb: playersState.qb,
                rb: playersState.rb,
                te: playersState.te
            }
    }
    return null
}


