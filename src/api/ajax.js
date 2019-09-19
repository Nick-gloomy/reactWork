/*
   能发送ajax请求的函数模块
   函数返回值是promise对象
 */
import axios from 'axios'

export default function ajax(url,data={},type='GET') {
    switch (type) {
        case 'GET'://发送get请求
            //拼请求参数串
            //data：{username：tom，password：1231}
            //paramstr: username=tom&password=1231
            let paramstr='';
            Object.keys(data).forEach(key=>{
                paramstr +=key+'='+data[key]+'&'
            });
            paramstr.substring(0,paramstr.length-1);
            //发请求
            return axios.get(url);
        case 'POST'://发送post请求
            return axios.post(url,data);
    }

}