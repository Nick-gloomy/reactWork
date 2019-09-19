import React ,{Component}from'react'
import {List, Grid} from 'antd-mobile'
import PropTypes from 'prop-types'

import './chooseLogo.less'


export default class ChooseLogo extends Component{
    static propTypes={
        setLogo:PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
        this.data=[];
        for (var i=1;i<=8;i++) {
            this.data.push({
                icon:require(`../../assets/logoJpg/${i}.jpg`), //用require的引用方式不用import
                text:'头像'+i

            })

        }

    }
    state={
      icon: null  //图片地址
    };


    logo=(el)=>{
       const icon= el.icon;
       //更新当前状态
       this.setState({icon});
       //更新父组件状态
        this.props.setLogo(icon);
    };

       render(){
           const jpg = this.state.icon;

           const header = jpg? '已选择头像':'请选择头像';
           const hide = jpg? 'block':'none';
           const height = jpg? '100px':'130px';



    return(
               <div>
                   <List renderHeader={()=>header}>
                       <div   style={{display:hide }}>
                           <div className='choose'>
                       <img src={jpg} className='chooseJpg' alt=''/>
                           </div>
                       </div>
                       <Grid data={this.data} square={false} hasLine={false}
                             onClick={this.logo}
                             itemStyle={{height: height}}
                             renderItem={dataItem => (
                                 <div style={{padding: '12.5px'}}>
                                     <img src={dataItem.icon} className='jpg' alt={dataItem.text}/>
                                 </div>
                             )}
                       />
                   </List>

               </div>
           )
       }
}