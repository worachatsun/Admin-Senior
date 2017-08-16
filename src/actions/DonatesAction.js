import axios from 'axios'
import { POST_CREATE_DONATES_URL } from '../api'
import { ADD_DONATES } from './types'

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