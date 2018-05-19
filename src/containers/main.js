import React from 'react';
<<<<<<< HEAD
import { ScrollView, Text, View, StatusBar, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer } from 'native-base';
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
=======
import { ScrollView, Text, View } from 'react-native';
import Map from '../components/Map'
import firebase from 'firebase';
>>>>>>> map
import Card from "../components/categoriesCard";
import FooterButton from '../components/buttonIndexBottom';

export class Main extends React.Component {
<<<<<<< HEAD
        
    styles = StyleSheet.create({
        headerStyle: {
            backgroundColor: "#10375E",
        } 
    });

    render() {
        return (
            <React.Fragment>        
                <StatusBar
                    backgroundColor="#002141"  
                />
                <View style={{height: 56, paddingTop: StatusBar.currentHeight, marginBottom: 20}}>
                    <Header style={styles.headerStyle}>
                        <Left>
                            <Button style={{width: 100}} onPress={() => this.props.navigation.openDrawer()} transparent>
                                <Icon name='menu'/>
                            </Button>
                        </Left>
                        <Body>
                            <Title>BahiArte</Title>
                        </Body>
                    </Header>
                </View>                    
                <ScrollView style={{height: '100%', marginBottom: -44}}>
                    <Card title="Música" imageUrl={require("../../assets/musica.jpg")}/>
                    <Card title="Artesanato" imageUrl={require("../../assets/artesanato.jpg")} />
                    <Card title="Exposições e feiras" imageUrl={require("../../assets/feiras.jpg")} />
                    <Card title="Performances" imageUrl={require("../../assets/teatro.jpg")} />
                </ScrollView>
                <FooterButton text="Cadastrar" onPress={() => this.props.navigation.navigate('SignUp')}/>
            </React.Fragment>
=======


    componentWillMount(){
        const config = {
            apiKey: "AIzaSyD8qgVEBQWNEFIKBFRC7o20ylHJekUqCeo",
            authDomain: "bahiarte-44942.firebaseapp.com",
            databaseURL: "https://bahiarte-44942.firebaseio.com",
            projectId: "bahiarte-44942",
            storageBucket: "bahiarte-44942.appspot.com",
            messagingSenderId: "539607852714"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <View>
                {/*<ScrollView style={{paddingTop: 80}}>*/}
                    {/*<Card />*/}
                    {/*<Card />*/}
                    {/*<Card />*/}
                    {/*<Card />*/}
                    {/*<Card />*/}
                    {/*<Card />*/}
                    {/*<Card />                    */}
                {/*</ScrollView>*/}
                <Map />
            </View>
>>>>>>> map
        );
    }
}
