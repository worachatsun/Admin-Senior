import { ADD_NEWS , FETCH_ALL_NEWS} from '../actions/types'

const INITIAL_STATE = {
    news: {},
    all_news: {},
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_NEWS:
            return {
                ...state,
                news: action.payload
            }
        case FETCH_ALL_NEWS:
            return {
                ...state,
                all_news: action.payload
            }
        default:
            return state
    }
}