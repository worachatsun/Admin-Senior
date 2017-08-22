import { FETCH_CHAT , FETCH_All_CHAT } from '../actions/types'

const INITIAL_STATE = {
    chat: {},
    all_chat: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CHAT:
            return {
                ...state,
                chat: action.payload
            }
        case FETCH_All_CHAT:
            return {
                ...state,
                all_chat: action.payload
            }
        default:
            return state
    }
}