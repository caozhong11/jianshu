import {contants} from './index';
import {fromJS} from 'immutable';
import axios from 'axios';
const changeList=(data)=>{
    return{
        type:'change_list',
        data:fromJS(data),//将此处对象变成不可更改对象
        totalPage:Math.ceil(data.length/3)
    }
};
export const search_focus=()=>{ return {
    type:contants.searchFocus
}};
export const search_blur=()=>{ return {
    type:contants.searchBlur
}};

export const mouse_enter=()=>{
    return {
        type:contants.mouseIn
    }
};
export const mouse_leave=()=>{
    return {
        type:contants.mouseLeave
    }
};
export const page_change=(page)=>{
    return{
    type:contants.pageChange,
    nextPage:page
}
};
export  const getList=()=>{
    return (dispatch)=>{
       axios.get('/api/headerList.json').then((res)=>{
           const data=res.data;
           dispatch(changeList(data.data));
       }).catch(()=>{
           console.log('error');
       })
    }
};