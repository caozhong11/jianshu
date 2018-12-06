import {contants} from './index';
import {fromJS} from 'immutable';
const defaultState=fromJS({
    focused:false,
    mouseState:false,
    list:[],
    page:1,
    totalPage:1
});
export default (state=defaultState,action)=>{
    if(action.type===contants.searchFocus){
        return state.set('focused',true);
    }
    if(action.type===contants.searchBlur){
        return state.set('focused',false);
    }
    if(action.type==='change_list'){
        return state.set('list',action.data).set('totalPage',action.totalPage);
    }
    if(action.type===contants.mouseIn){
        return state.set('mouseState',true);
    }
    if(action.type===contants.mouseLeave){
        return state.set('mouseState',false);
    }
    if(action.type===contants.pageChange){
        return state.set( 'page',action.nextPage);
    }
    return state;
}