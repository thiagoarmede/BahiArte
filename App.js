
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
import MainDrawer from "./src/components/mainDrawer";
import SignUp from "./src/components/signup";
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
    SignUp: {
        screen: SignUp
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
<<<<<<< HEAD
            });
            this.setState({ fontLoaded: true });
        } catch (error) {
            console.log('error loading icon fonts', error);
        }
=======
                    });
                    this.setState({ fontLoaded: true });
                } catch (error) {
                    console.log('error loadingPosicao icon fonts', error);
                }
>>>>>>> map
	}

    render() {
        if (!this.state.fontLoaded) {
            return <AppLoading />;
        }
        console.log("teste");
        return (
<<<<<<< HEAD
            <MyDrawer/>        
=======
            <React.Fragment>
                <View style={{paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight}}>
                    <StatusBar
                        backgroundColor="#002141"  
                    />
                    <Container>
                        <Header style={styles.headerStyle}>
                            <Left>
                                <Button transparent>
                                    <Icon name='menu'/>
                                </Button>
                            </Left>
                            <Body>
                                <Title>BahiArte</Title>
                            </Body>
                        </Header>

                    </Container>
                    <Innitial />
                </View>
                <RootStack/>
                
            </React.Fragment>     
                   
>>>>>>> map
        );
    }
}
