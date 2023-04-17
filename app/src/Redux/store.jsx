import {legacy_createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { productReducer } from './products/reducer';
import { authReducer } from './Auth/Reducer';

const rootReducer= combineReducers({
    ecommerceData:productReducer,
    auth:authReducer,
});
const composeEnhancers= window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store= legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

