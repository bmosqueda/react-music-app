import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { getToken } from './api-client';

export default class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
        };
    }
    
    ingresar = () => {
        getToken(this.state.email, this.state.password)
        .then(data => {
            global.token = data.token;
            Actions.home();
        }).catch((error) => {
            console.warn(error);
        })
    }
}