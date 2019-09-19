/*
包含多个 Reduers 函数 根据老的state和指定的action返回新的state
 */
import {combineReducers} from 'redux'
import {ERR_MESG,AUCH_SUCCESS,AA,RESIT_USER,RECEIVE_USER,RECEIVE_USER_LIST} from './action-types'


//user状态的reducer
function user(state = {
    username: '',
    password:'',
    type: '',
    message: '',
    to:'',
    chooseLogo:''

}, action) {
   switch (action.type) {
       case AUCH_SUCCESS:
           return {...action.data,to:getRoute(state.type,state.logo)} ;   // 也等于{...state,...action.data}   相当于result.data
       case ERR_MESG:
            return {...state,message:action.data};
       case RECEIVE_USER:
           return {...action.data,to:getRoute(state.type,state.logo)};
       case RESIT_USER:
           return {...state,message:action.data,to:'/login'};
       case AA:
           return action.data;
       default:
           return state;
   }
}

const setState = [
    {
        id:'123',
        username: '123',
        chooseLogo: '3.jbg',
        type:'laoban',
        job: '123',
        company: '123',
        job_for: '123',
        to_money: '123'
    },
    {
        id:'123',
        username: '123',
        chooseLogo: '3.jbg',
        type:'laoban',
        job: '123',
        company: '123',
        job_for: '123',
        to_money: '123'
    },
    {
        id:'123',
        username: '123',
        chooseLogo: '3.jbg',
        type:'laoban',
        job: '123',
        company: '123',
        job_for: '123',
        to_money: '123'
    },
    {
        id:'123',
        username: '123',
        chooseLogo: '3.jbg',
        type:'laoban',
        job: '123',
        company: '123',
        job_for: '123',
        to_money: '123'
    },
    {
        id:'123',
        username: '123',
        chooseLogo: '3.jbg',
        type:'laoban',
        job: '123',
        company: '123',
        job_for: '123',
        to_money: '123'
    },
    {
        id:'123',
        username: '123',
        chooseLogo: '3.jbg',
        type:'laoban',
        job: '123',
        company: '123',
        job_for: '123',
        to_money: '123'
    },{
        id:'123',
        username: '123',
        chooseLogo: '3.jbg',
        type:'laoban',
        job: '123',
        company: '123',
        job_for: '123',
        to_money: '123'
    },
    {
        id:'123',
        username: '123',
        chooseLogo: '3.jbg',
        type:'laoban',
        job: '123',
        company: '123',
        job_for: '123',
        to_money: '123'
    },

    {
        id:'321',
        username: '321',
        type:'dashen',
        chooseLogo: '1.jpg',
        for_job: '321',
        for_money: '321',
        personal: '321'
    }];

function userList(state = setState, action) {
    switch (action.type) {
        case RECEIVE_USER_LIST:// 数组list 就是action.data
            return action.data;
            break;
        default :
            return state;


    }

}



export default combineReducers({
    user,userList

})

/*
 1. type ：dashen  logo：null     路由：dasheninfo
 2. type ：laoban  logo：null     路由：laobaninfo
 3  type ：dahen   logo：！null   路由： main_dashen
 4  type ：laoban  logo：！null   路由： main_laoban
 */

export function getRoute(type,logo) {
    let route;
    if (!logo){

            return '/main';


    }else {
       if (type==='dashen'){
            return '/dasheninfo';
        }else {
            return  '/laobaninfo';
        }
    }
}