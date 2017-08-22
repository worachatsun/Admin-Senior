import { FETCH_ALL_ALUMNI , FETCH_ALUMNI } from '../actions/types'

const INITIAL_STATE = {
    user_detail: undefined,
    all_user:{}
}

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case FETCH_ALUMNI :
            return {
                user_detail: action.payload
            }
        case FETCH_ALL_ALUMNI :
            return {
                all_user: action.payload
            }
        default:
            return state
    }
}