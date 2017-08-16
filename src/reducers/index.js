import { combineReducers } from 'redux'
import NewsReducer from './NewsReducer'
import EventsReducer from './EventsReducer'
import CareerReducer from './CareerReducer'
import DonatesReducer from './DonateReducer'
export default combineReducers({
    news: NewsReducer,
    events: EventsReducer,
    careers: CareerReducer,
    donates: DonatesReducer,
    
})