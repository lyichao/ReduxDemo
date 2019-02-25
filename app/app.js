import React from 'react';
import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';
import Login from './pages/Login';
import Home from './pages/Home';

const App = StackNavigator({
    Login:{screen:Login},
    Home:{screen:Home}
},{
});

export default App;