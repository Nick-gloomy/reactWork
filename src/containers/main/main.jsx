/*
  主界面路由组件
 */
import React ,{Component}from'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import cookie from 'js-cookie'

import {Tabs,NavBar} from 'antd-mobile'

import DashenInfo from '../dasheninfo/dasheninfo'
import LaobanInfo from '../laobaninfo/laobaninfo'
import NoFund from '../../components/no-fund/nofund'
import Laoban from '../laoban/laoban'
import Dashen from '../dashen/dashen'
import Personal from '../personal/personal'
import Message from  '../message/message'
import Chat from '../chat/chat'
import {getuser} from '../../redux/actions'
import NavFoot from '../../components/nav-foot/nav-foot';
import './main.less'

const tabsMain=[
    {title:'个人主页'},
    {title:'市场'},
    {title:'消息'},];
 class Main extends Component{

    //main4个组件信息
    navList=[
        {   path:'/dashen',
            title:'应聘列表',
            component:Dashen,
            icon:'fa fa-vcard',
            text:'应聘'
        },
        {
            path:'/laoban',
            title:'招聘列表',
            component:Laoban,
            icon:'fa fa-vcard  ',
            text:'招聘'
        },
        {
            path:'/message',
            title:'消息列表',
            component:Message,
            icon:' fa  fa-comments-o',
            text:'信息'
        },
        {
          path:'/personal',
          title:'个人信息',
          component:Personal,
          icon:'fa fa-user-circle-o',
          text:'个人'
        }
    ];

    componentDidMount(){
        const userid =cookie.get('userid');
        const {_id} = this.props.user;
        if (userid && !_id ){
            //发送请求 获取user
           this.props.getuser();
        }
    }




       render(){
           const {_id,type,chooseLogo} = this.props.user;
          const top = type==='dashen'?'大神':'老板';

           const userid =cookie.get('userid');

           // if (!userid){
           //  return   <Redirect to='login'/>
           // }
           //
           // if (_id){
           //     const path =getRoute(type,chooseLogo);
           //     return   <Redirect to={path}/>
           // }
               //navList中的路径与实际路由路径对比 取出与路径想对应的数据
                const {navList} =this;

                console.log(this.props);
                //debugger
                const check =this.props.location.pathname;
                const currentNev = navList.find(nav=>nav.path===check);

                //清除在navList中与当前身份不同的信息
                  let newList=null;
                  if(currentNev){
                      switch (type) {
                          case 'dashen':
                              newList = navList.splice(0, 1);

                              break;
                          case 'laoban':
                              newList = navList.splice(1.1)

                              break;
                          default:
                              newList = navList;


                      }
                  }
           return(
               <div>
                   <div className='fix-top'>
                   {currentNev? <NavBar>{currentNev.title}</NavBar>:null}
                   </div>
                   <Switch>
                       {
                           navList.map(nav=><Route path={nav.path} component={nav.component}/>)
                        }
                                   <Route path='/dasheninfo' component={DashenInfo}/>
                                   <Route path='/laobaninfo' component={LaobanInfo}/>
                                   <Route path='/chat/:id' component={Chat}/>
                                   <Route path='/nofund' component={NoFund}/>
                   </Switch>

                   {currentNev ? <NavFoot navList={newList} />: null}
               </div>
           )
       }
}

export default connect(
    state=>({user:state}),{getuser}
)(Main)

/*
  1.componentDidMount()
     获取cookie中的userid ，redux中并没有_id等数据 需要发送请求返回数据
    2.render（）
       如果cookie中没有_id ，直接返回到Login
       如果redux中有_id，根据查询的返回数据 跳转到相应的页面
       根据 type和logo 选择到相应的页面
 */