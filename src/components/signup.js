import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

export default class SignupForm extends React.Component {
    state = {
        emailValue: "",
        
    }
    
    onPress = () => {
        alert('oi');
    }

    render(){
        return(

            <Container>
                <Header />
                <Content>
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
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

    btnSignup: {
        backgroundColor: '#D30C0F',
        width: '100%',
        height: 60,
        marginBottom: 60,
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
