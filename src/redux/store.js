/*
  redux 最核心的管理模块
 */
import {createStore,applyMiddleware} from 'redux'
import reducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

//向外暴露store
export default createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
    )