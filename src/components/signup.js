import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Title, Left, Body, Right, Icon,  Drawer } from 'native-base';


export default class SignupForm extends React.Component {
    state = {
        emailValue: "",
        
    }
    
    onPress = () => {
        alert('oi');
    }

    render(){
        return(
            <React.Fragment>
                <StatusBar
                    backgroundColor="#002141"  
                />
                <View style={{height: 56, paddingTop: StatusBar.currentHeight, marginBottom: 30}}>
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
                <Container>
                    <Content styles={{marginTop: 40}}>
                        <Form>
                            <Item floatingLabel>
                                <Label>E-mail</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Nome Completo</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Senha</Label>
                                <Input secureTextEntry={true}/>
                            </Item>
                        </Form>
                    </Content>
                    <View>
                        <Button style={ styles.btnSignup }>
                            <Text style={ styles.btnText }>Cadastrar</Text>
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Home')} style={ styles.btnBack }>
                            <Text style={ styles.btnText }>Voltar</Text>
                        </Button>
                    </View>
                </Container>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#10375E",
    },
    btnSignup: {
        backgroundColor: '#D30C0F',
        width: '100%',
        height: 60,
        paddingLeft: 10,
        paddingRight: 10, 
    },
    btnBack: {
        backgroundColor: '#10375E',
        width: '100%',
        height: 60,
        paddingLeft: 10,
        paddingRight: 10, 
    },

    btnText: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontSize: 16
    },


});
