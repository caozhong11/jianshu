import React,{Component} from 'react';
import {connect} from 'react-redux';
import {ListWrapper,
          ListItem}from './style';
class List extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ListWrapper>
                {
                    this.props.list.map((item)=>
                       <ListItem>
                            <img className="img-blur-done"
                                 src={item.get('imgUrl')}
                            />
                            <div className='theme'>{item.get("theme")}</div>
                        </ListItem>
                    )
                }

            </ListWrapper>
            )

    }
}
const mapStateToProps=(state)=>{
    return{
        list:state.get('Home').get('list')
    }
};
export default connect(mapStateToProps,null)(List);