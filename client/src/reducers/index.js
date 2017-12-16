import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import comment from './comment';
import post from './post';
import users from './users';

const rootReducer = combineReducers({
  user,
  flash,
  comment,
  post,
  users,
});

export default rootReducer;
