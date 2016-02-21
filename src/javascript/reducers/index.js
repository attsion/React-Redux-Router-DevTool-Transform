import {combineReducers} from 'redux';
import {counter} from './counter';
import { routeReducer } from 'react-router-redux'

export default combineReducers({counter,routeReducer});