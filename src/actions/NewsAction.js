import axios from 'axios'
import { POST_CREATE_NEWS_URL , GETNEWS_URL , UPDATE_EDIT_NEWS_URL } from '../api'
import { ADD_NEWS , FETCH_NEWS , FETCH_ALL_NEWS} from './types'
import { addAlert } from './AlertActions'

export const selectNews = (newsId) => {
     return {
         type: SELECT_NEWS,
        payload: newsId
     }
 }

export const createNews = (news) => {
    console.log(news)
    const promise = axios.post(POST_CREATE_NEWS_URL, {
        "news_title": news.news_title,
        "news_text": news.news_text,
        "picture": news.picture,
        "category": news.category,
        "news_role": news.news_role,
        //"expiry_date": news.expiry_date
    })


    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: ADD_NEWS,
                payload: data
            })
        })
    }
} 

export const editNews = (newsId ,news) => {
    console.log(news)
    const promise = axios.put(`${UPDATE_EDIT_NEWS_URL}/${newsId}`, {
        "news_title": news.news_title,
        "news_text": news.news_text,
        "picture": news.picture,
        "category": news.category,
        "news_role": news.news_role,
        "expiry_date": news.expiry_date
    })

    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: UPDATE_NEWS,
                payload: data
            })
        })
    }
} 

export const fetchNews = (offset=0, limit=15) => {
    const promise = axios.get(`${GETNEWS_URL}/${offset}/${limit}`)
    
    return (dispatch) => {
        return promise.then(({data}) => {
            dispatch({
                type: FETCH_NEWS,
                payload: data
            })
        }).catch(error => {
            dispatch(addAlert('fetch news'))
        })
    }
}

export const fetchAllNews = () => {
    const promise = axios.get(`${GETNEWS_URL}`)
    return (dispatch) => {
        return promise.then(({data}) => {
            dispatch({
                type: FETCH_ALL_NEWS,
                payload: data
            })
               console.log(data)
        }).catch(error => {
            dispatch(addAlert('fetch all news'))
        })
    }
}
