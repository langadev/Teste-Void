import {combineReducers} from 'redux';
import UserSlice from './UserSlice';
const rootReducer = combineReducers({
    user:UserSlice
});
export default rootReducer;