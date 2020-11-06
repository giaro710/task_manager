import { combineReducers } from 'redux';

import { createTaskReducer } from './createTask';


export default combineReducers({
  tasks: createTaskReducer
});
