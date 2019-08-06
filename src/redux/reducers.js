import { combineReducers } from 'redux';
import userApp from './user/reducer';
import repositoryApp from './repository/reducer';

const reducers = combineReducers({
  userApp,
  repositoryApp,
});

export default reducers;