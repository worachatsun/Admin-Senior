import { ADD_DONATES , UPDATE_DONATES , FETCH_DONATION , FETCH_ALL_DONATION } from '../actions/types'

const INITIAL_STATE = {
    add_donation: {},
    edit_donation: {},
    donation: {},
    all_donates: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_DONATES:
            return {
                ...state,
                add_donation: action.payload
            }
        case UPDATE_DONATES:
            return {
                ...state,
                edit_donates: action.payload
            }
        case FETCH_DONATION:
            return {
                ...state,
                donation: action.payload
            }
        case FETCH_ALL_DONATION :
            return {
                ...state,
                all_donates: action.payload
            }    
        default:
            return state
    }
}