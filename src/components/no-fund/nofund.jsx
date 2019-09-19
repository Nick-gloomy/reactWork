/*
   无法找到页面路由组件
 */
import React ,{Component}from'react'
import {connect} from 'react-redux'
import {Result,Icon,WhiteSpace,Button,WingBlank} from 'antd-mobile'


class NoFund extends Component{

    handleClick=()=>{
        this.props.history.replace('/main')
    };
       render(){


           return(
               <div>
                   <WhiteSpace size='xl'/>
                   <WhiteSpace size='xl'/>
                   <WhiteSpace size='xl'/>
                   <WhiteSpace size='xl'/>
                   <WhiteSpace size='xl'/>
                   <WhiteSpace size='xl'/>
                   <WhiteSpace size='xl'/>


                   <Result
                    img=<Icon type='cross-circle-o' size='lg' color='#FFEE39' />
                    title='无法找到'
                    message='请跳转到主页面'


                   />

                   <Button onClick={this.handleClick}>返回主页</Button>

               </div>
           )
       }
}

export default connect()(NoFund)