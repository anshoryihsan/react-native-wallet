import {combineReducers} from 'redux';
import Auth from './Auth';
import User from './User';
import Profile from './Profile';
import Transfer from './Transfer';
import TopUp from './TopUp';

const reducers = combineReducers({Auth, Profile, Transfer, TopUp, User});
export default reducers;
