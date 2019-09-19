/*
  登录路由组件
 */
import React ,{Component}from'react'
import {Redirect} from 'react-router-dom'

import Logo from '../../components/logo/logo'
import {
    NavBar,
    WhiteSpace,
    WingBlank,
    Button,
    List,
    InputItem, Toast,

} from 'antd-mobile'



import {connect} from 'react-redux'
import {login} from '../../redux/actions'

 class Login extends Component{

    state={
       name:'',
       password:''
    };

    handle=(name,val)=>{
      this.setState(
          {[name]:val}
      )
    };

    //登录
    toMain=()=>{
        this.props.login(this.state);
        const mess =this.props.user.message;
        if (mess) {  Toast.fail(mess,1)}

    };

    toRegister=()=>{
      this.props.history.replace('/register')
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
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                 <div>
                     <WingBlank size='sm'>
                     <List >
                         <WhiteSpace size='md'/>
                         <InputItem placeholder='请输入用户名' onChange={val=>{this.handle('name',val)}}>用户名:</InputItem>
                         <WhiteSpace size='md'/>
                         <InputItem placeholder='请输入密码' type='password' onChange={val=>{this.handle('name',val)}}>密&nbsp;&nbsp;&nbsp;码:</InputItem>

                     </List>
                     </WingBlank>
                     <WhiteSpace size='lg'/>
                         <WingBlank size='md'>
                             <Button type='primary' onClick={this.toMain}>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</Button>
                         </WingBlank>

                     <WhiteSpace size='lg'/>
                         <WingBlank size='md'>
                             <Button onClick={this.toRegister}>注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</Button>
                         </WingBlank>

                 </div>
            </div>

        )
    }
}
export default connect(
    state=>({user:state}),{login}
)(Login)