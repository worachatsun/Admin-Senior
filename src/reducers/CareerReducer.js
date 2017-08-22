import { ADD_CAREERS , UPDATE_CAREERS , FETCH_CAREER , FETCH_ALL_CAREER , } from '../actions/types'

const INITIAL_STATE = {
    add_career: {},
    edit_career: {},
    career: {},
    all_careers: {},
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CAREERS:
            return {
                ...state,
                add_career: action.payload
            }
        case UPDATE_CAREERS:
            return {
                ...state,
                edit_career: action.payload
            }
        case FETCH_CAREER :
            return {
                ...state,
                career: action.payload
            }
        case FETCH_ALL_CAREER :
            return {
                ...state,
                all_careers: action.payload
            }
        default:
            return state
    }
}