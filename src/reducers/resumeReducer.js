import { CREATE_RESUME, SAVE_INFO, UPDATE_INFO } from '../actions/types';

const INITIAL_STATE = {
    resumeID : null,
    personalInfo : {
        firstname: '',
        lastname: '',
        emailaddress: '',
        address: '',
        city: '',
        zip_code: '',
        phonenumber: ''
    }
}

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type){
        case CREATE_RESUME:
            return {...state, }
        case SAVE_INFO:
            return {...state,  };
        case UPDATE_INFO:
            return state;
        default:
            return state;
    }
};