import { combineReducers } from 'redux';
import reducer from './locationReducer';

const rootReducer = combineReducers({
   location: reducer
})


export default rootReducer;