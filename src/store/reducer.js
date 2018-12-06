import {combineReducers} from 'redux-immutable';
import { reducers as HeaderReducer }from '../common/header/store/index';
import homeReducer from '../common/home/component/list/store/reducer';
const reducer=combineReducers({
    Header:HeaderReducer,
    Home:homeReducer
});
export default reducer;
