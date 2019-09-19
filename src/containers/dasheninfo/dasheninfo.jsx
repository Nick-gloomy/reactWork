import React ,{Component}from'react'
import {Button, InputItem, List, NavBar, TextareaItem, WhiteSpace, WingBlank,Toast} from "antd-mobile";
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import ChooseLogo from "../../components/chooseLogo/chooseLogo";
import {update} from "../../redux/actions";

class Dasheninfo extends Component{
    state={
        chooseLogo:'',
        for_job:'',
        for_money:'',
        personal:''
    };

    handleChange=(name,val)=>{
        //更新状态
        this.setState({
            [name]:val
        })

    };
    setLogo=(jpg)=>{
        this.setState({
            chooseLogo:jpg
        })
    };

    save=()=>{
      //console.log(this.state);
      this.props.update(this.state);
      if (this.props.state.message){
          Toast.fail('请重新登录',1)
      }
      //this.props.history.replace('/main')
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
                   <NavBar mode='dark' >完善信息</NavBar>
                   <ChooseLogo  setLogo={this.setLogo}/>
                   <div style={{display:hide}}>
                   <WhiteSpace size='lg'/>
                   <WhiteSpace size='lg'/>
                   <WhiteSpace size='lg'/>
                   </div>
                   <WhiteSpace size='lg'/>


                   <List>
                       <WingBlank size='sm'>
                           <InputItem type='text' onChange={val=>this.handleChange('chooseLogo',val)}>职位需求:</InputItem>
                       </WingBlank>
                       <WingBlank size='sm'>
                           <InputItem type='text' onChange={val=>this.handleChange('for_job',val)} >薪资需求:</InputItem>
                       </WingBlank>
                       <WingBlank size='sm' >
                           <TextareaItem title='个人简述:' autoHeight  onChange={val=>this.handleChange('personal',val)} />
                       </WingBlank>
                   </List>
                   <WhiteSpace size='lg'/>
                   <WhiteSpace size='sm'/>
                   <WingBlank size='sm'>
                       <Button type='primary' onClick={this.save}>提交</Button>
                   </WingBlank>
               </div>
           )
       }
}
export default connect(
    state=>({state:state}),{update}
)(Dasheninfo)