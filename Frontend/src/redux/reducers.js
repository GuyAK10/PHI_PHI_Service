import {combineReducers} from 'redux';
import {UserReducers} from './user/userreducer';

export const reducers = combineReducers({
    User:UserReducers
})