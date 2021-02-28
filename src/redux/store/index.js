import {applyMiddleware,createStore } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from "redux-thunk";
import {copposeWithDevTools} from 'redux-devtools-extension'



const store = createStore(
    rootReducer,
   applyMiddleware(thunkMiddleware)
);

window.__store__ = store;
export default store;
