import { ActionTypes } from "../constants/ActionTypes";


const initialState = {
    //Initial list
    loginDetails:{}

}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case (ActionTypes.SET_LOGIN_DETAILS):
            return {
                ...state,
                loginDetails:payload
            };
        
        default:
            return state;
    }
}