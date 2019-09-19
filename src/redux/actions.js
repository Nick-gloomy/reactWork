/*
 包含多个 action creator
    同步action
    异步action
 */
import {reqRegister,reqLogin,reqUpdate,reqUser,reqUserList} from '../api/index'
import {AUCH_SUCCESS,ERR_MESG,AA,RECEIVE_USER,RESIT_USER,RECEIVE_USER_LIST} from './action-types'

//授权注册成功的同步action
const auchSuccess = (user)=>({type: AUCH_SUCCESS,data:user});
//错误提示信息的同步action
const errMesg =(message)=>({type: ERR_MESG,data: message});
//
const reciveUser=(user)=>({type:RECEIVE_USER,data:user});
//
export const resitUser=(message)=>({type:RESIT_USER ,data:message});

//同步获取 list的action
export const receiveUserList =(List)=>({type:RECEIVE_USER_LIST,data:List});

export const register1=(user)=>({type:AA,data:user});

//注册异步action
export const  register=(user)=>{

    const {username,password1,password2,type} = user;

    //前台表单检查
    if(!username){
        return errMesg('用户名不能为空')
    }
    if (!password1===password2) {
        return errMesg('两次密码不一致')
    }else {
        var password =password1;
    }

    return async dispatch=>{
     const response= await reqRegister({username ,password ,type});    //promise对象转为 response对象
     const result=response.data;                //  {code：0，data：user ，。。。}
     if (result.code===0){
         //成功
        //授权分发成功的action
         dispatch(auchSuccess(result.data))   //result.data  就是 user
     }else {
      //失败
         //分发错误提示信息
         dispatch(errMesg(result.message))
     }
    }
};

//登录异步action
export const  login=(user)=>{
    const {password,username} = user;

    //前台表单检查
    if(!username){
        return errMesg('用户名不能为空')
    }
    if (!password){
        return  errMesg('密码不能为空')
    }

    return async dispatch=>{
        const response= await reqLogin(user);    //promise对象转为 response对象
        const result=response.data;                //  {code：0，data：user ，。。。}
        if (result.code===0){
            //成功
            //授权分发成功的action
            dispatch(auchSuccess(result.data))   //result.data  就是 user
        }else {
            //失败
            //分发错误提示信息
            dispatch(errMesg(result.message))
        }
    }
};

//更新信息异步action
export const  update=(user)=>{
    return async dispatch=>{
        const response= await reqUpdate(user);    //promise对象转为 response对象
        const result=response.data;                //  {code：0，data：user ，。。。}
        if (result.code===0){
            //成功
            //授权分发成功的action
            dispatch(reciveUser(result.data))   //result.data  就是 user
        }else {
            //失败
            //分发错误提示信息
            dispatch(resitUser(result.message))
        }
    }
};


//获取user信息异步action
export const getuser=()=>{
     return async dispatch =>{
         const response = await reqUser();
         const result =response.data;
         if (result.code===0){
             dispatch(reciveUser(result.default))
         } else {
             dispatch(resitUser((result.message)))

         }
     };
};

//获取List的异步action
export const getList=(type)=>{
    return async dispatch=>{
        const response =await receiveUserList(type);
        const result =response.data;
        if (result===0){
            dispatch(reqUserList(result.data))
        }
    }
};



