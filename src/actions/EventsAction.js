import axios from 'axios'
import { POST_CREATE_EVENTS_URL , UPDATE_EDIT_EVENTS_URL , GETEVENTS_URL , GET_JOINED_EVENT } from '../api'
import { ADD_EVENTS , SELECT_EVENTS , FETCH_ALL_EVENTS , VIEW_EVENTS , FETCH_JOINER_EVENTS , UPDATE_EVENTS } from './types'

export const selectEvent = (eventId) => {
    return {
        type: SELECT_EVENT,
        payload: eventId
    }
}
 
export const createEvents = event => {
    console.log(event)
    const promise = axios.post(POST_CREATE_EVENTS_URL, {
            "event_name": event.event_name,
            "event_description": event.event_description,
            "person_limit": event.person_limit,
            "regis_date_begin": event.regis_date_begin,
            "regis_date_end": event.regis_date_end,
            "event_date_begin": event.event_date_begin,
            "event_date_end": event.event_date_end,
            "location": event.location,
            "event_owner_id": "id",
            "picture": event.picture,
            "event_coupon": "as"
            //"event_owner_surname": events.event_owner_surname,
            //"event_owner_tel": events.event_owner_tel,
            //"event_owner_email": events.event_owner_email,
           // "event_owner_facebook": events.event_owner_facebook,
           // "event_owner_line": events.event_owner_line,
    })

    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: ADD_EVENTS,
                payload: data
            })
        })
    }
}

export const editEvents = events => {
    console.log(events)
    const promise = axios.put(UPDATE_EDIT_EVENTS_URL, {
            "event_name": events.event_name,
            "event_text": events.event_text,
            "picture": events.picture,
            "person_limit": events.event_text,
            "regis_date_begin": events.regis_date_begin,
            "regis_date_end": events.regis_date_end,
            "event_date_begin": events.event_date_begin,
            "event_date_end": events.event_date_end,
            "location": events.location,
            "event_owner_name": events.event_owner_name,
            "event_owner_surname": events.event_owner_surname,
            "event_owner_tel": events.event_owner_tel,
            "event_owner_email": events.event_owner_email,
            "event_owner_facebook": events.event_owner_facebook,
            "event_owner_line": events.event_owner_line,
    })

    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: UPDATE_EVENTS,
                payload: data
            })
        })
    }
}

export const fetchEvent = (offset=0, limit=15) => {
    const promise = axios.get(`${GET_EVENT_URL}/${offset}/${limit}`)
    
    return (dispatch) => {
        return promise.then(({data}) => {
            dispatch({
                type: FETCH_EVENT,
                payload: data
            })
        }).catch(error => {
            dispatch(addAlert('fetch news'))
        })
    }
}

export const getJoiner = (user_id , event_id) => (dispatch) => {
        promise = axios.post( GET_JOINED_EVENT , {
            "user_id" : user_id,
            "join_event": event_id
        })

    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: GET_JOINED_EVENT,
                payload: data
            })
        })
    }
}