import React,{Component} from 'react';
import {Provider} from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import store from './store/index'
//import DevTools from './components/DevTools'//<DevTools />
import * as Pages from './Views'
export default class Root extends Component{
    render(){
        return (
            <Provider store={store}>
            <div>
            <Router history={browserHistory}>
                <Route path="/" component={Pages.App}>
                <IndexRoute component={Pages.Home}/>
                <Route path="Home" component={Pages.Home}/>
                <Route path="counter" component={Pages.Counter}/>
                <Route path="bar" component={Pages.Bar}/>
                </Route>
            </Router>
            </div>
        </Provider>
        );
    }
} 



