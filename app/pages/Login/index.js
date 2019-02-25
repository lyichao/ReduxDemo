
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {NavigationActions} from 'react-navigation'
const screenWidth = Dimensions.get('window').width;  //屏幕的宽度
const screenHeight = Dimensions.get('window').height;  //屏幕的高度

export default class Login extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            uid:'',
            pwd:'',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style = {{
                        width:0.8*screenWidth,
                        height:0.08*screenHeight,
                        color:'#1b6cec',
                        fontSize:16,
                        borderWidth: 1,
                        borderRadius:8,
                        borderColor:'#1b6cec',
                        marginBottom: 15
                    }}
                    blurOnSubmit={true}
                    returnKeyType="done"
                    placeholder = '请输入账号'
                    selectionColor = "#bac3d4"
                    placeholderTextColor = '#bac3d4'
                    underlineColorAndroid = "transparent"
                    onChangeText={(text)=>{this.setState({uid:text})}}
                    value={this.state.uid}/>

                <TextInput
                    style = {{
                        width:0.8*screenWidth,
                        height:0.08*screenHeight,
                        color:'#1b6cec',
                        fontSize:16,
                        borderWidth: 1,
                        borderColor:'#1b6cec',
                        borderRadius:8,

                    }}
                    blurOnSubmit={true}
                    returnKeyType="done"
                    placeholder = '请输入密码'
                    selectionColor = "#bac3d4"
                    placeholderTextColor = '#bac3d4'
                    underlineColorAndroid = "transparent"
                    onChangeText={(text)=>{this.setState({pwd:text})}}
                    value={this.state.pwd}/>

                <View style={{
                    height:0.25*screenHeight,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <TouchableOpacity onPress={this.login}
                                      style={{
                                          backgroundColor:'#1b6cec',
                                          width:0.8*screenWidth,
                                          height:0.08*screenHeight,
                                          borderRadius:25,
                                          justifyContent:'center',
                                          alignItems:'center',
                                          marginBottom:8
                                      }}>
                        <Text style={{color:'#fff', fontSize:16}}>登 录</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.skip}
                                      style={{
                                          borderWidth:1,
                                          borderColor:'#1b6cec',
                                          width:0.8*screenWidth,
                                          height:0.08*screenHeight,
                                          borderRadius:25,
                                          justifyContent:'center',
                                          alignItems:'center'
                                      }}>
                        <Text style={{color:'#1b6cec', fontSize:16}}>跳 过</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

    login = () => {
        this.props.navigation.navigate('Home')
    }

    skip = () => {
        this.props.navigation.navigate('Home')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


