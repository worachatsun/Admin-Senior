import axios from 'axios'
import { AUTH_ADMIN } from './types'
import { SIGNIN_URL, SIGNUP_URL, SIGNIN_LDAP_URL } from '../api'
import { addAlert } from './AlertActions'
import { Actions } from 'react-native-router-flux'

export const authUser = user_detail => {
    return {
        type: AUTH_ADMIN,
        payload: user_detail
    }
}

export const loginAdmin = (admin_id, password) => {
    return function(dispatch) {
        return axios.post(SIGNIN_URL, {
            "admin_id": admin_id, 
            "password": password
        }).then(response => {
            const { admin_id, token } = response.data
            // Keychain.setGenericPassword(user_id, token)
            //     .then(function() {
            //         dispatch(addAlert(token))
            //         dispatch(authUser(user_id))
            //     }).catch(error => {
            //         dispatch(addAlert('Could not login credential'))
            //     })
            console.log(response.data)
            dispatch(addAlert(token))
            dispatch(authUser(admin_id))
        }).catch(error => {
            dispatch(addAlert('Could not login'))
        })
    }
}

export const registerAdmin = ( admin_id , email, password) => {
    return function(dispatch) {
        return axios.post(REGISTER_URL, {
            "admin_id": admin_id,
            "email": email, 
            "password": password,
        }).then(response => {
            const { admin_id, token } = response.data
            // Keychain.setGenericPassword(user_id, token)
            //     .then(function() {
            //         dispatch(addAlert(token))
            //         dispatch(authUser(user_id))
            //     }).catch(error => {
            //         dispatch(addAlert('Could not login credential'))
            //     })
            dispatch(addAlert(token))
            dispatch(authUser(admin_id))
        }).catch(error => {
            dispatch(addAlert('Could not signup'))
        })
    }
}