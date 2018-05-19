
import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { AppLoading, Font, Expo } from 'expo';
import FontAwesome    
from './node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
import MaterialIcons  
from './node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer } from 'native-base';
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import {observable} from 'mobx';
import {observer} from "mobx-react";
import firebase from 'firebase';
import { Innitial } from "./src/containers/innitial";
import { formService } from "./src/containers/formService";
import { Main } from "./src/containers/main";
import MainDrawer from "./src/components/mainDrawer";
import SignUp from "./src/components/signup";
import {DrawerSideBar} from "./src/components/drawerSideBar";
import Login from './src/components/login'

styles = StyleSheet.create({
	headerStyle: {
        backgroundColor: "#10375E",
	} 
});

const MyDrawer = createDrawerNavigator({
    Home: {
        screen: Main
    },
    SignUp: {
        screen: SignUp
    },
    Login: {
      screen: Login
    }
}, {
    initialRouteName: 'Home',
    contentComponent: DrawerSideBar,
    drawerBackgroundColor: "transparent",
});

@observer
export default class App extends React.Component {
	state = {
		fontLoaded: false,
    };

	async componentWillMount() {
    var config = {
      apiKey: "AIzaSyD8qgVEBQWNEFIKBFRC7o20ylHJekUqCeo",
      authDomain: "bahiarte-44942.firebaseapp.com",
      databaseURL: "https://bahiarte-44942.firebaseio.com",
      projectId: "bahiarte-44942",
      storageBucket: "bahiarte-44942.appspot.com",
      messagingSenderId: "539607852714"
    };
    firebase.initializeApp(config);

		try {
			await Font.loadAsync({
				FontAwesome,
                MaterialIcons,
                Roboto: require("native-base/Fonts/Roboto.ttf"),
                Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
                Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
            });
            this.setState({ fontLoaded: true });
        } catch (error) {
            console.log('error loading icon fonts', error);
        }
	}

    render() {
        if (!this.state.fontLoaded) {
            return <AppLoading />;
        }
        console.log("teste");
        return (
            <MyDrawer/>        
        );
    }
}
