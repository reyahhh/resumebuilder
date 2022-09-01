import { combineReducers } from "redux";
import authReducer  from "./authReducer";
import resumeReducer from "./resumeReducer";

export default combineReducers({
    auth: authReducer,
    resume: resumeReducer
});
