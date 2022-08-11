import { SIGN_IN, 
    SIGN_OUT,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
 } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type){
        case SIGN_IN:
            return {...state, isSignedIn: true, userId: action.payload };
        case SIGN_OUT:
            return {...state, isSignedIn: false, userId: null};
        default:
            return state;
    }
};
