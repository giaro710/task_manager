import { combineReducers } from 'redux';

import { createTaskReducer } from './createTask';
import { imagesReducer } from './imagesReducer';


export default combineReducers({
  tasks: createTaskReducer,
  images: imagesReducer
});
