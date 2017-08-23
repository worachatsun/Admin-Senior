import axios from 'axios'
import { POST_CREATE_CAREERS_URL , UPDATE_EDIT_CAREERS_URL , GETCAREERS_URL } from '../api'
import { ADD_CAREERS , UPDATE_CAREERS , FETCH_CAREER , FETCH_ALL_CAREER} from './types'
import { addAlert } from './AlertActions'

export const createCareers = careers => {
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

export const editCareers = careers => {
    const promise = axios.put( UPDATE_EDIT_CAREERS_URL , {
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
                type: UPDATE_CAREERS,
                payload: data
            })
        })
    }
}

export const fetchCareer = (offset=0, limit=15) => {
    const promise = axios.get(`${GET_CAREER}/${offset}/${limit}`)
    
    return function(dispatch) {
        return promise.then(({data}) => {
            dispatch(storeCareerByFetch(data))
        }).catch(error => {
            dispatch(addAlert('fetch career'))
        })
    }
}

export const storeCareerByFetch = data => {
    return {
        type: FETCH_CAREER,
        payload: data
    }
}

export const fetchAllCareer = () => {
    const promise = axios.get(GET_CAREER)
    
    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: FETCH_ALL_CAREER,
                payload: data
            })
        })  
    }
}