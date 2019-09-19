/*
   个人中心页面路由组件
 */
import React ,{Component}from'react'
import {List,WhiteSpace,Button,Modal} from 'antd-mobile'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'

import {resitUser} from  '../../redux/actions'
import jpg from '../../assets/logoJpg/1.jpg'
import './personal.less'

 class Personal extends Component{


     handleClick=()=>{
        Modal.alert('注销','是否确定',
             [{text:'否',onPress:()=>console.log('否')},
                 {text:'是',onPress:()=>{
                     //清除cookie中userid数据
                     Cookies.remove('userid');
                     //清除redux中user的数据
                     this.props.resitUser();
                     this.props.history.replace('/login')}}])


     };

       render(){
           const {chooseLogo,username,job,company,to_money,for_job,job_for,personal,for_money}=this.props.user;
      //     const Jpg = require(`../../assets/logoJpg/${chooseLogo}`);
           const src = jpg;
           return(
               <div style={{marginTop:50}}>
                   <List align='middle'>
                       <WhiteSpace/>
                       <WhiteSpace/>
                       <WhiteSpace/>
                       <WhiteSpace/>
                       <WhiteSpace/>

                           <img src={src} className='picture' alt=''/>
                           <List.Item align='middle' className='word'>
                           {username}123
                           </List.Item>


                   </List>
                       <WhiteSpace/>
                   <List renderHeader={()=>'相关信息'}>
                       {
                           job?
                               <List.Item>
                                   职位：{job}
                               </List.Item>
                               :
                               <List.Item>
                                   职位：{for_job}
                               </List.Item>

                       }
                       {
                           company?
                               <List.Item>
                                   公司：{company}
                               </List.Item>
                               :
                               null
                       }
                       {
                           job_for?
                               <List.Item>
                                   简介：{job_for}
                               </List.Item>
                               :
                               <List.Item>
                                   简介：{personal}
                               </List.Item>
                       }
                       {
                           to_money?
                               <List.Item>
                                   薪资：{to_money}
                               </List.Item>
                               :
                               <List.Item>
                                   薪资：{for_money}
                               </List.Item>
                       }




                   </List>
                   <WhiteSpace/>
                   <WhiteSpace/>
                   <WhiteSpace/>
                   <Button type='warning' onClick={this.handleClick} >注销</Button>
               </div>
           )
       }
}

export default connect(
    state=>({user:state}),{resitUser}
)(Personal)

