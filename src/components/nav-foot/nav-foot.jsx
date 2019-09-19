import React ,{Component}from'react'
import PropTypes from 'prop-types'


import { Tabs} from 'antd-mobile'
import {Redirect,withRouter} from 'react-router-dom'

import FontAwesome from 'react-fontawesome'
import './nav-foot.less'


 class NavFoot extends Component{

    static propTypes ={
        navList:PropTypes.array.isRequired,


    };




       render(){
              const {navList}=this.props;

             let title=[];

           navList.map((nav,index)  => {

               const part ={title:<div className='title'> <FontAwesome name={nav.icon}/>  <span>{nav.text}</span></div>,text: nav.text, icon: nav.icon,path:nav.path,sub:index}
               title.push(part);
           });

           return(
               <div  className='foot'>

                   <Tabs
                       tabs={title}
                       tabBarPosition='bottom'
                       // renderTabBar={tab => <List><i className={tab.icon}/> <span>{tab.text}</span></List>}
                       tabBarActiveTextColor='#007bff'
                       //tab为总数组tabs内的一个对象
                       onTabClick={tab=>{this.props.history.replace(tab.path)}}
                   />




               </div>
           )
       }
}
//向外暴露withRouter

//  得到路由组件特有的属性：history location math
export default withRouter(NavFoot)