import userInfoReducer from "./userInfoReducer";
import offerReducer from "./offerReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
                        userInfoReducer,
                        offerReducer,
                    });

export default rootReducer;