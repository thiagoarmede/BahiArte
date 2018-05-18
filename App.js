
import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { AppLoading, Font, Expo } from 'expo';
import FontAwesome    
from './node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
import MaterialIcons  
from './node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf';
import {} from 'native-base';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

styles = StyleSheet.create({
	headerStyle: {
		backgroundColor: "#002141",
	} 
});

export default class App extends React.Component {

  state = {
    fontLoaded: false
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
        </Container>
        <Text>My App</Text>
      </View>
    );
  }
}
