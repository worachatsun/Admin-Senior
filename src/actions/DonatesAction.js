import axios from 'axios'
import { POST_CREATE_DONATES_URL , GETDONATES_URL , UPDATE_EDIT_DONATES_URL } from '../api'
import { ADD_DONATES , UPDATE_DONATES , FETCH_DONATION , FETCH_ALL_DONATION  } from './types'
import { addAlert } from './AlertActions'

export const createDonates = donates => {
    console.log(donates)
    const promise = axios.post(POST_CREATE_DONATES_URL, {
            "picture": donates.picture,
            "project_name": donates.project_name,
            "project_description": donates.project_description,
            "donate_ways": donates.donate_ways,
            "expiry_date": donates.expiry_date,
    })

    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: ADD_DONATES,
                payload: data
            })
        })
    }
}

export const editDonates = donates => {
    const promise = axios.put(UPDATE_EDIT_DONATES_URL , {
            "picture": donates.picture,
            "project_name": donates.project_name,
            "project_description": donates.project_description,
            "donate_ways": donates.donate_ways,
            "expiry_date": donates.expiry_date,
    })

    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: UPDATE_DONATES,
                payload: data
            })
        })
    }
}
export const fetchDonation = (offset=0, limit=15) => {
    const promise = axios.get(`${GET_DONATION}/${offset}/${limit}`)
    
    return function(dispatch) {
        return promise.then(({data}) => {
            dispatch({
                type: FETCH_DONATION,
                payload: data
            })
        }).catch(error => {
            dispatch(addAlert('fetch donation'))
        })
    }
}

export const fetchAllDonation = () => {
    const promise = axios.get(GET_DONATION)
    
    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: FETCH_ALL_DONATION,
                payload: data
            })
        })  
    }
}