import { combineReducers} from 'redux'
import { productReducer } from './ProductReducer'

const reducers = combineReducers({
    productReducer: productReducer,
    
});
export default reducers;