import { ADD_CAREERS } from '../actions/types'

const INITIAL_STATE = {
    careers: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CAREERS:
            return {
                ...state,
                careers: action.payload
            }
        default:
            return state
    }
}