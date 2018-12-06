import React, { Component ,Fragment} from 'react';
import Header from './common/header/index'
import {GlobalStyle} from './globalcss';
import {GlobalStyle1} from './common/static/iconfont/iconfont';
import {Provider} from 'react-redux';
import store from './store/store';
import {BrowserRouter,Route} from 'react-router-dom';
import Detail from './common/detail/index';
import Home from './common/home/index';
class App extends Component {
  render() {
    return (
        <Fragment>
            <GlobalStyle/>
            <GlobalStyle1/>
            <Provider store={store}>
                <div>
                <Header/>
                <BrowserRouter>
                    <div>
                        <Route path='/' exact component={Home}/>
                        {/*注意格式*/}
                        <Route path='/detail' exact component={Detail}/>
                    </div>
                </BrowserRouter>
                </div>
            </Provider>
        </Fragment>
    );
  }
}
export default App;
