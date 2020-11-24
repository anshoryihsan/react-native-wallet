import {combineReducers} from 'redux';
import Auth from './Auth';
import User from './User';
import Transfer from './Transfer';
import System from './System';

import Profile from './Profile';
import TopUp from './TopUp';

const reducers = combineReducers({
  Auth,
  Profile,
  Transfer,
  System,
  TopUp,
  User,
});
export default reducers;
