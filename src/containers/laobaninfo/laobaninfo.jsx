import React ,{Component}from'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {NavBar, InputItem, TextareaItem, Button, WingBlank, List, WhiteSpace, Toast} from "antd-mobile";

import ChooseLogo from '../../components/chooseLogo/chooseLogo'

import {update} from "../../redux/actions";

 class Laobaninfo extends Component{
    state={
        chooseLogo:'',
        job:'',
        company:'',
        to_money:'',
        job_for:''
    };
      change=(name,val)=>{
          this.setState({
          [name]:val
          })
      };

     save=()=>{
      // console.log(this.state);
       this.props.update(this.state);
         if (this.props.state.message){
             Toast.fail('请重新登录',1)
         }
         //this.props.history.replace('/main')
     };

     setLogo=(jpg)=>{
         this.setState({
             chooseLogo:jpg
         })
     };

       render(){
           const {chooseLogo} = this.state;
           const hide = chooseLogo? 'none':'block';

           const {to} = this.props.state;
           if(to) {
               return <Redirect to={to}/>
           }
              return(
               <div>
                   <NavBar mode='dark'>完善信息</NavBar>
                   <ChooseLogo  setLogo={this.setLogo}/>
                   <div style={{display:hide}}>
                   <WhiteSpace size='lg'/>
                   <WhiteSpace size='lg'/>
                   </div>

                   <List>
                       <WingBlank size='sm'>
                       <InputItem type='text' onChange={val=>{this.change('job',val)}}>招聘职位:</InputItem>
                       </WingBlank>
                       <WingBlank size='sm'>
                       <InputItem type='text' onChange={val=>{this.change('company',val)}}>公司名称:</InputItem>
                       </WingBlank>
                       <WingBlank size='sm'>
                       <InputItem type='text' onChange={val=>{this.change('to_money',val)}}>职位薪资:</InputItem>
                       </WingBlank>
                       <WingBlank size='sm'>
                       <TextareaItem title='职位要求:' autoHeight onChange={val=>{this.change('job_for',val)}}/>
                       </WingBlank>
                   </List>
                   <div style={{display:hide}}>
                   <WhiteSpace size='lg' />
                   <WhiteSpace size='sm'/>
                   </div>
                   <WingBlank size='sm' >
                   <Button type='primary' onClick={this.save}>提交</Button>
                   </WingBlank>
               </div>
           )
       }
}
export default connect(
    state=>({state:state}),{update}
)(Laobaninfo)