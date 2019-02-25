import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Toast from 'react-native-root-toast';
import { connect } from 'react-redux';
import { LoginAction } from '../../actions/LoginAction';
import {NavigationActions} from 'react-navigation';
const screenWidth = Dimensions.get('window').width;  //屏幕的宽度
const screenHeight = Dimensions.get('window').height;  //屏幕的高度
class Login extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            uid:'',
            pwd:'',
            skip:0, //0正常登录 1跳过登录
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        console.log(nextProps);
        // 每次值更新的时候，都会走这个方法，所以可以在这个方法里面添加判断，用来更新页面
        const { userName,tel,showMsg } = nextProps.LoginReducer;
        console.log("showMsg=",showMsg)
        if(showMsg === 'LoginSuccess' ){
            console.log(1);
            Toast.show('登录成功', {duration: Toast.durations.SHORT});
            this.props.navigation.navigate('Home',{userName:userName,tel:tel})
        }else if(showMsg === 'LoginFail' ){
            console.log(2);
            Toast.show('登录失败', {duration: Toast.durations.SHORT});
        }else{
            console.log(3);
            Toast.show('欢迎游客！', {duration: Toast.durations.SHORT});
            this.props.navigation.navigate('Home',{userName:userName,tel:tel})
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style = {styles.textInput}
                    blurOnSubmit={true}
                    returnKeyType="done"
                    placeholder = '请输入账号'
                    selectionColor = "#bac3d4"
                    placeholderTextColor = '#bac3d4'
                    underlineColorAndroid = "transparent"
                    onChangeText={(text)=>{this.setState({uid:text})}}
                    value={this.state.uid}/>

                <TextInput
                    style = {styles.textInput}
                    blurOnSubmit={true}
                    returnKeyType="done"
                    placeholder = '请输入密码'
                    selectionColor = "#bac3d4"
                    placeholderTextColor = '#bac3d4'
                    underlineColorAndroid = "transparent"
                    onChangeText={(text)=>{this.setState({pwd:text})}}
                    value={this.state.pwd}/>

                <View style={styles.btn}>
                    <TouchableOpacity onPress={this.login}
                                      style={styles.radiusBtn}>
                        <Text style={styles.text}>登 录</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.skip}
                                      style={styles.radiusBtn}>
                        <Text style={styles.text}>跳 过</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

    login = () => {
        console.log("login")
        let {uid,pwd} = this.state;
        this.props.LoginAction(uid,pwd,0);
    }

    skip = () => {
        console.log("skip")
        this.props.LoginAction('','',1);
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textInput:{
        width:0.8*screenWidth,
        height:0.08*screenHeight,
        color:'#1b6cec',
        fontSize:16,
        borderWidth: 1,
        borderRadius:8,
        borderColor:'#1b6cec',
        marginBottom: 15
    },
    btn:{
        height:0.25*screenHeight,
        justifyContent:'center',
        alignItems:'center'
    },
    radiusBtn:{
        backgroundColor:'#1b6cec',
        width:0.8*screenWidth,
        height:0.08*screenHeight,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:8
    },
    text:{
        color:'#fff',
        fontSize:16
    }
});

export default connect((state) => {
    const { LoginReducer } = state;
    return {
        LoginReducer,
    };
},{ LoginAction })(Login)