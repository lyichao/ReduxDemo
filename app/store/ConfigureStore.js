// redux库里面提供的方法，创建store和middleware中间件
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from '../reducers/RootReducer';

let middlewares = [];

middlewares.push(thunk);
if (__DEV__) {
    middlewares.push(logger);
}
// 通过applyMiddleware将中间件添加
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
// 导出configureStore，里面携带着reducer，中间件，初始值
export default function configureStore(initialState){
    return createStoreWithMiddleware(RootReducer,initialState);
}