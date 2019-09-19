import React ,{Component}from'react'

import {Card,WhiteSpace,WingBlank} from 'antd-mobile'
import PropTypes from 'prop-types'
import {withRouter} from  'react-router-dom'
import pic from '../../assets/logoJpg/1.jpg'

 class UserList extends Component{

    static propTypes ={
       userList:PropTypes.array.isRequired
    };

       render(){
                const {userList} =this.props;
           const style = {
               width: '40px',
               height: '40px'

                        };

           return(
               <div style={{marginTop:50 }}>
                   {userList.map(item=>((

                       <div key={item._id}>
                           <WhiteSpace size='lg'/>
                           <WhiteSpace size='lg'/>
                       <Card onClick={()=>(this.history.push('/chat/${_id}'))}>
                           <Card.Header
                               extra={<span>{item.username}</span>}
                              thumb='../../assets/logoJpg/1.jpg'
                               thumbStyle={style}
                           />
                           <Card.Body>
                               {item.company?<div>公司：{item.company}</div>:null}
                               {item.job?<div>职位：{item.job}</div>:<div>职位{item.for_job}</div>}
                               {item.to_money?<div>薪资：{item.to_money}</div>:<div>薪资：{item.for_money}</div>}
                               {item.job_for?<div>描述：{item.job_for}</div>:<div>描述：{item.personal}</div>}
                           </Card.Body>
                       </Card>

                       </div>
                       ))
                  )}
                   <WhiteSpace size='lg'/>
                   <WhiteSpace size='lg'/>
                   <WhiteSpace size='lg'/>
                   <WhiteSpace size='lg'/>
               </div>
           )
       }

}
export default withRouter(UserList)