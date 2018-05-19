import React from 'react';
import { ScrollView, Text, View, StatusBar, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer } from 'native-base';

import Card from "../components/categoriesCard";

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
                <View style={{height: 56, paddingTop: StatusBar.height}}>
                    <Header style={styles.headerStyle}>
                        <Left>
                            <Button onPress={() => this.props.navigation.openDrawer()} transparent>
                                <Icon name='menu'/>
                            </Button>
                        </Left>
                        <Body>
                            <Title>BahiArte</Title>
                        </Body>
                    </Header>
                </View>                    
                <ScrollView>
                    <Card title="Música" imageUrl={require("../../assets/musica.jpg")}/>
                    <Card title="Artesanato" imageUrl={require("../../assets/artesanato.jpg")} />
                    <Card title="Exposições e feiras" imageUrl={require("../../assets/feiras.jpg")} />
                    <Card title="Performances" imageUrl={require("../../assets/teatro.jpg")} />
                </ScrollView>
            </React.Fragment>
        );
    }
}
