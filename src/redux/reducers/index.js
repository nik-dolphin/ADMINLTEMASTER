import { combineReducers } from "redux";
import authReducer from './authReducer';
import sidebarReducer from './sidebarReducer';

const reducers = combineReducers({
  auth: authReducer,
  sidebarWidth: sidebarReducer,
})
export default reducers