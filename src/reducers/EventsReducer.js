import { ADD_EVENTS } from '../actions/types'

const INITIAL_STATE = {
    events: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_EVENTS:
            return {
                ...state,
                events: action.payload
            }
        default:
            return state
    }
}