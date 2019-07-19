import { combineReducers } from 'redux';
import products from './product';
import item from './detail'


const rootReducer = combineReducers({
    products, item
})


export default rootReducer