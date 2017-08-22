import { ADD_EVENTS , UPDATE_EVENTS , FETCH_ALL_EVENT, FETCH_EVENT , FETCH_JOINER_EVENTS} from '../actions/types'

const INITIAL_STATE = {
    add_event: {},
    edit_event: {},
    all_events: {},
    fetchEvent: {},
    fetch_Event_Joiner: {},
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_EVENTS:
            return {
                ...state,
                add_event: action.payload
            }
        case UPDATE_EVENTS:
            return {
                ...state,
                edit_event: action.payload
            }
        case FETCH_EVENT:
            return {
                ...state,
                fetchEvent: action.payload
            }
        case FETCH_ALL_EVENT:
            return {
                ...state,
                all_events: action.payload
            }
        case FETCH_JOINER_EVENTS:
            return {
                ...state,
                fetch_Event_Joiner: action.payload
            }
        default:
            return state
    }
}