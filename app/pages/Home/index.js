
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Login extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            userName:this.props.navigation.state.params.userName,
            tel:this.props.navigation.state.params.tel,
        };

    }

    render() {
        let {userName,tel} = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Home!
                </Text>
                <Text style={styles.instructions}>
                    {userName}
                </Text>
                <Text style={styles.instructions}>
                    {tel}
                </Text>
            </View>
        );
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


