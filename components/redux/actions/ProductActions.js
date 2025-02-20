import { ActionTypes } from '../constants/ActionTypes.js'


export const setLoginDetails = (products) => {
    return {
        type: ActionTypes.SET_LOGIN_DETAILS,
        payload: products,
    }
}
