import {fromJS} from 'immutable';
const defaultState=fromJS({
  list:[{
      id:1,
      theme:'社会热点',
      imgUrl:'//upload-images.jianshu.io/upload_images/3949843-aad71023d3094287.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
      id:2,
      theme:'手绘',
      imgUrl:'//upload-images.jianshu.io/upload_images/12299094-0cd6e2f63031a637.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }],
    listRe:[{
        id:1,
        title:'比起杨蓉演技，我更失望的是王媛可手滑',
        theme:'我不相信有那么多的手滑点赞。 最新一期《演员的诞生》争议挺大的，杨蓉，王媛可，斓曦三人合作的《后宫》片段几乎承包了所有的话题。 节目还未开播，“...',
        imgUrl:'//upload-images.jianshu.io/upload_images/12299094-0cd6e2f63031a637.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id:2,
        title:'为什么我如此着迷仅有1M的它？',
        theme:'申明一下：我还在。 公众号没封！公众号没封！公众号没封！ 统一解决大家的疑问： 为什么所有下载链接都失效? 因第三方平台工作失误导致，现已修复。...',
        imgUrl:'//upload-images.jianshu.io/upload_images/4771974-3113859bae17f854?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
});
export default (state=defaultState)=>{
    return state;
}