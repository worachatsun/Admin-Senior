import { AUTH_ADMIN, } from '../actions/types'

const INITIAL_STATE = {
    admin_detail: {}
}

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case AUTH_ADMIN :
            return {
                admin_detail: action.payload
            }
        default:
            return state
    }
}