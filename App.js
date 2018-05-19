
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

import { Innitial } from "./src/containers/innitial";
import { formService } from "./src/containers/formService";
import { Main } from "./src/containers/main";
import MainDrawer from "./src/components/mainDrawer"
import {DrawerSideBar} from "./src/components/drawerSideBar";

styles = StyleSheet.create({
	headerStyle: {
        backgroundColor: "#10375E",
	} 
});

const MyDrawer = createDrawerNavigator({
    Home: {
        screen: Main
    },
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
