/*
 注册路由组件
 */
import React ,{Component}from'react'
import {Redirect} from 'react-router-dom'

import Logo from "../../components/logo/logo";
import './reginster.less'
import {NavBar,
    WhiteSpace,
    WingBlank,
    Button,
    List,
    InputItem,
    Radio,
    Toast
} from 'antd-mobile'

import {connect} from 'react-redux'
import {register} from '../../redux/actions'
import PropTypes from "prop-types";


const Item =List.Item;


 class Register extends Component{
     static propTypes={
         register:PropTypes.func.isRequired
     };

    state={
      name:'',
      password1:'',
      password2:'',
      type: 'dashen',  //初始值为老板
    };

    handle =(name,val)=>{
        this.setState({
            [name]:val
        })
    };

    toRegister =()=> {
        console.log(this.state,this.props.user);

        this.props.register(this.state);
        const mess =this.props.user.message;
        if (mess) {  Toast.fail(mess,1)}



    };

    toLogin=()=>{

        this.props.history.replace('/login')
    };

       render(){
           const {to}=this.props.user;
           //如果头有值直接重定向到对应的页面
           if (to){
               return <Redirect to={to}/>
           }
           return(
               <div>
                   <NavBar mode='dark' >直&nbsp;聘</NavBar>


                   <div>
                       <br/>
                       <Logo/>
                       <br/>
                   </div>

                   <div>
                       <WingBlank size='sm'>
                           <List >
                               <WhiteSpace size='md'/>
                               <InputItem placeholder='请输入用户名' onChange={val=>{this.handle('name',val)}}>用户名:</InputItem>
                               <WhiteSpace size='md'/>
                               <InputItem placeholder='请输入密码' type='password' onChange={val=>{this.handle('password1',val)}}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                               <WhiteSpace size='md'/>
                               <InputItem placeholder='请再次密码' type='password' onChange={val=>{this.handle('password2',val)}}>确认密码:</InputItem>
                               <WhiteSpace size='md'/>
                               <Item>
                                   <span>选择类型：</span>
                                   <Radio checked={this.state.type==="laoban"} className='login-radio'  onChange={()=>{this.handle('type','laoban')}}>老板</Radio>
                                   <Radio checked={this.state.type==="dashen"} className='login-radio' onChange={()=>{this.handle('type','dashen')}}>大神</Radio>
                               </Item>
                           </List>
                       </WingBlank>
                       <WhiteSpace size='md'/>
                       <WingBlank size='md'>
                           <Button type='primary' onClick={this.toRegister}>注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</Button>
                       </WingBlank>

                       <WhiteSpace size='md'/>
                       <WingBlank size='md'>
                           <Button onClick={this.toLogin}>已有账号</Button>
                       </WingBlank>

                   </div>
               </div>
           )
       }
}
export default connect (
    state=>({user:state}),{register}
)(Register)