import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducer from '../reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';



//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。

let store;

//配置devtool工具
if (!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)) {
    store = createStore(
        reducer,
        applyMiddleware(thunk, logger)
    );
} else {
    store = createStore(
        reducer,
        compose(applyMiddleware(thunk, logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错
    );
}

export default store;