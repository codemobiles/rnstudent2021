import {combineReducers} from 'redux';
import jsonReducer from './jsonscreen.reducer';
import cameraReducer from './camera.reducer';

export default combineReducers({
  jsonReducer,
  cameraReducer,
});
