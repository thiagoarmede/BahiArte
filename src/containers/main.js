import React from 'react';
import { ScrollView, Text, View, StatusBar, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer } from 'native-base';
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Card from "../components/categoriesCard";
import FooterButton from '../components/buttonIndexBottom';

export class Main extends React.Component {
        
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
        );
    }
}
