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
            // <View style={ styles.container }>
            //     <View style={ styles.btnArea }>
            //         <TouchableOpacity title="Cadastre-se" 
            //         onPress={this.onPress} 
            //         >
            //             <Text style={ styles.btnName }>Clique Aqui</Text>
            //         </TouchableOpacity>
            //     </View>
            // </View>  

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
                        <Input />
                    </Item>
                </Form>
                </Content>
                <Button style={ styles.btnSignup }>
                    <Text>Cadastrar</Text>
                </Button>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
    },

    btnSignup: {
        backgroundColor: '#D30C0F',
        marginBottom: 60,
    },

    imgBackground: {
        backgroundColor: 'red',
    }
});
