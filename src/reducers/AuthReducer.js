import { AUTH_ADMIN, UNAUTH_ADMIN } from '../actions/types'

const INITIAL_STATE = {
    admin_detail: undefined
}

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case AUTH_ADMIN :
            return {
                admin_detail: action.payload
            }
        case UNAUTH_USER :
            return {
                admin_detail: INITIAL_STATE
            }
        default:
            return state
    }
}