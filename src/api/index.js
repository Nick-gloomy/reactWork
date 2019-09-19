/*
   包含n个接口请求的函数的模块
   返回值类型promis
 */
import ajax from './ajax'

//注册接口
export const reqRegister = (user)=>ajax('/register',user,'POST');

//登录接口
export const reqLogin =({username,password})=>ajax('/login',{username,password},'POST');

//更新用户接口
export const reqUpdate =(user)=>ajax('update',user,'POST');

//根据cookie的userid 获取 用户信息
export  const  reqUser=(userid)=>ajax('/user',userid,'get');

//根据type获取userList
export const  reqUserList=(type)=>ajax('/getList',{type},'get');