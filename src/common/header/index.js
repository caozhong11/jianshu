import React,{Component} from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchTitle,
    SearchSwitch,
    SearchSpan
    } from "./style";
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {actionCreators} from './store/index';
class Header extends Component{
    render(){
        return(
            <HeaderWrapper>
                <Logo href='/'></Logo>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem  className='left'>下载APP</NavItem>
                    <NavItem  className='right'>登录</NavItem>
                    <NavItem  className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                        in={this.props.focused}
                        timeout={5000}
                        classNames='slide'>
                            <NavSearch className={this.props.focused ? 'focused' : ''}
                                        onFocus={()=>{this.props.handleInputFocus(this.props.list)}}
                                        onBlur={this.props.handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={this.props.focused?'focused iconfont':'iconfont'}>&#xe653;</i>
                    </SearchWrapper>
                </Nav>
                {this.headerShow()}
                <Addition>
                    <Button className='writing'>
                        <i className="iconfont">&#xe61b;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    headerShow(){
        const pageList=[];
        const newList= this.props.list.toJS();
        for(let i=(this.props.page-1)*3;i<this.props.page*3;i++){
            pageList.push(newList[i]);
        }
        if(this.props.focused||this.props.mouseState){
            return (
                <SearchInfo onMouseEnter={this.props.handleMouseEnter}
                            onMouseLeave={this.props.handleMouseLeave}
                >
                    <SearchTitle>热门搜索</SearchTitle>
                    <SearchSwitch onClick={()=>{this.props.handleClick(this.props.page,this.props.totalPage,this.spinIcon)}}>
                        换一批
                        <i  ref={(icon)=>{this.spinIcon=icon}}
                            className='iconfont spin'>&#xe851;</i>
                    </SearchSwitch>
                    {
                        pageList.map((item)=>{
                            if(item){
                                return  <SearchSpan key={item}>{item}</SearchSpan>
                            }

                        })
                    }
                </SearchInfo>
            )
        }
        else return null;
    };
}

const mapStateToProps=(state)=>{
    return{
        focused:state.get('Header').get('focused'),
        list:state.get('Header').get('list'),
        page:state.get('Header').get('page'),
        mouseState:state.getIn(['Header','mouseState']),
        totalPage:state.getIn(['Header','totalPage'])
    }
};
const mapDispatchToProps=(dispatch)=>{

 return{
      handleInputFocus(list){
          if(list.size===0){
              dispatch(actionCreators.getList());
          }
          dispatch(actionCreators.search_focus());
      },
     handleInputBlur(){
         dispatch(actionCreators.search_blur());
     },
     handleMouseEnter(){
         dispatch(actionCreators.mouse_enter());
     },
     handleMouseLeave(){
         dispatch(actionCreators.mouse_leave());
     },
     handleClick(page,total,icon){

         let angle=parseInt(icon.style.transform.replace(/[^0-9]/ig,''));
         console.log(angle);
         if(angle){
             angle+=360;
         }else {
             angle=360;
         }
         icon.style.transform='rotate('+angle+'deg)';

         if (page<total){
              dispatch(actionCreators.page_change(page+1));
          }
          else{
              dispatch(actionCreators.page_change(1));
          }

     }

 }
};

export default  connect(mapStateToProps,mapDispatchToProps)(Header);
