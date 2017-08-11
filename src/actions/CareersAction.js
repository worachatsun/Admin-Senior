import axios from 'axios'
import { POST_CREATE_CAREERS_URL } from '../api'
import { ADD_CAREERS } from './types'


export const createCareers = careers => {
    console.log(careers)
    const promise = axios.post(POST_CREATE_CAREERS_URL, {
            "picture": careers.picture,
            "career_name": careers.career_name,
            "career_description": careers.career_description,
            "qualification": careers.qualification,
            "capacity": careers.capacity,
            "company": careers.company,
            "salary_min": careers.salary_min,
            "salary_max": careers.salary_max,
            "information": careers.information,
            "expiry_date": careers.expiry_date
    })

    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: ADD_CAREERS,
                payload: data
            })
        })
    }
}

