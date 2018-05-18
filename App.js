
import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { AppLoading, Font, Expo } from 'expo';
import FontAwesome    
from './node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
import MaterialIcons  
from './node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
<<<<<<< HEAD
import Innitial from "./src/containers/innitial";

=======
import { Innitial } from "./src/containers/innitial";
import { Main } from "./src/containers/main";
import { createStackNavigator } from "react-navigation";
>>>>>>> 013ca9e87108fa3ff0bbd532a5d93bc8fa36ba89

styles = StyleSheet.create({
	headerStyle: {
        backgroundColor: "#10375E",
        marginBottom: 60,
	} 
});

const RootStack = createStackNavigator({
    Home: Innitial,
});

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

<<<<<<< HEAD
    return (
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
			<Innitial/>
        </Container>
		
      </View>
    );
  }
=======
        return (
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
                </View>
                <RootStack/>
            </React.Fragment>            
        );
    }
>>>>>>> 013ca9e87108fa3ff0bbd532a5d93bc8fa36ba89
}
