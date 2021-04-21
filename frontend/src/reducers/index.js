
import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import descri from './descri';
import title from './title';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    descri,
    title
});