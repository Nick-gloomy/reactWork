/*
   消息页面路由组件
 */
import React ,{Component}from'react'
import {connect} from "react-redux";


 class Message extends Component{
       render(){
           return(
               <div>
                   Message
               </div>
           )
       }
}

export default connect()(Message)