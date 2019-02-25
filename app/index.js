import { AppRegistry,View,Text ,} from 'react-native';
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/ConfigureStore';
// 调用 store 文件中的rootReducer常量中保存的方法
const store = configureStore();
import App from './app';

// 项目中使用了react-navigation，推荐的做法是将初始文件写在一个文件中，
// 所以app.js也可以看做是页面的初始化入口
export default class Root extends Component {
    render() {
        return (
            //包裹app
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
};

AppRegistry.registerComponent('ReduxDemo', () => Root);