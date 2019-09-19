import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter,Route,Switch} from 'react-router-dom'

import store from './redux/store'
import Login from './containers/login/login'
import Main from './containers/main/main'
import Register from './containers/register/register'
import 'antd-mobile/dist/antd-mobile.css';
import './socketIo/socket'


ReactDOM.render((
        <Provider store={store}>
        <HashRouter>
            <Switch>
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login}/>
            <Route  component={Main}/> {/*默认组件*/}
            </Switch>
        </HashRouter>
        </Provider>
),document.getElementById('root'));