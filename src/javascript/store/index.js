import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'
import {compose,createStore,applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import reducer from '../reducers/index'
//import DevTools from '../components/DevTools'

const router_middleware = syncHistory(browserHistory);

let middlewares = [router_middleware,thunk];

var finalCreateStore = compose(
  applyMiddleware(...middlewares)
  //,DevTools.instrument()
  ,window.devToolsExtension ? window.devToolsExtension() : f => f //浏览器扩展使用
)(createStore);

export default  finalCreateStore(reducer);