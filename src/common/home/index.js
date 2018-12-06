import React,{Component,Fragment} from 'react';
import List from './component/list';
import Recommend from './component/recommend';
import Topic from './component/topic';
import Writer from './component/writer';
import {HomeWrapper,
    HomeLeft,
    HomeRight} from './style';
class Home extends Component{
    render(){
        return(
            <Fragment>
                <HomeWrapper>
                    <HomeLeft>
                        <img className='banner' src="//upload.jianshu.io/admin_banners/web_images/4581/af5d55e899ff5e06b90fee32c5403772cc9f6e04.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"/>
                        <List></List>
                        <Recommend></Recommend>
                    </HomeLeft>
                    <HomeRight>
                        <Topic></Topic>
                        <Writer></Writer>
                    </HomeRight>
                </HomeWrapper>


            </Fragment>
            )

    }
}
export default Home;