import { ADD_NEWS , UPDATE_NEWS ,FETCH_ALL_NEWS , FETCH_NEWS} from '../actions/types'

const INITIAL_STATE = {
    add_news: {},
    edit_news: {},
    all_news: {},
    news: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_NEWS:
            return {
                ...state,
                add_news: action.payload
            }
        case UPDATE_NEWS:
            return {
                ...state,
                edit_news: action.payload
            }
        case FETCH_ALL_NEWS:
            return {
                ...state,
                all_news: action.payload
            }
        case FETCH_NEWS:
            return {
                ...state,
                news: action.payload
            }
        default:
            return state
    }
}