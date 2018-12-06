import React,{Component} from 'react';
import {connect} from 'react-redux';
import {ListWrapper,
    ListItem}from './style';
class Recommend extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ListWrapper>
                {
                    this.props.list.map((item)=>
                        <ListItem>
                            <div className='left'>
                                <div className='title'>{item.get('title')}</div>
                                <div className='theme'>{item.get("theme")}</div>
                            </div>
                            <img className="img-blur-done"
                                 src={item.get('imgUrl')}
                            />
                        </ListItem>
                    )
                }

            </ListWrapper>
        )

    }
}
const mapStateToProps=(state)=>{
    return{
        list:state.get('Home').get('listRe')
    }
};
export default connect(mapStateToProps,null)(Recommend);
