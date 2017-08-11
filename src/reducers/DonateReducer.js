import { ADD_DONATES } from '../actions/types'

const INITIAL_STATE = {
    donates: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_DONATES:
            return {
                ...state,
                donates: action.payload
            }
        default:
            return state
    }
}