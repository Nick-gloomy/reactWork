/*
   老板页面路由组件
 */
import React ,{Component}from'react'
import {connect} from "react-redux";

import UserList from '../../components/user-list/user-list'
import {getList} from "../../redux/actions";

class Laoban extends Component{

    componentDidMount(){
        this.props.getList('laoban');
    }

       render(){

           const {users} =this.props;


           return(
               <div>
                  <UserList userList={users} />
               </div>
           )
       }
}

export default connect(
    state=>({users:state.userList}),{getList}
)(Laoban)