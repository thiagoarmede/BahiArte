import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, StatusBar, Alert } from 'react-native';
import {Spinner, Container, Header, Content, Form, Item, Input, Label, Button, Title, Left, Body, Right, Icon,  Drawer } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import arrayCidades from './cidades'
import firebase from 'firebase';
import b64 from 'base-64';

@observer
export default class SignupForm extends React.Component {

    @observable
    estado ={
      email: "",
      senha: "",
      nome: "",
      emailExistente:false,
      erroCampos: false,
      erroSenha: false,
      isLoading: false
    }

    componentWillMount(){
      console.log(b64.encode("Alex"));
    }


    realizaCadastro = () => {
      console.log("Testando");
      if(this.estado.email === "" || this.estado.senha === "" || this.estado.nome === ""){
        this.estado.erroCampos = true;
        this.estado.erroSenha = false;
        this.estado.emailExistente = false;

      } else if (this.estado.senha.length < 6){
        this.estado.erroSenha = true;
        this.estado.erroCampos = false;
        this.estado.emailExistente = false;

      } else {
        this.estado.erroSenha = false;
        this.estado.erroCampos = false;
        this.estado.isLoading = true;
        const self = this;


        firebase.auth().createUserWithEmailAndPassword(this.estado.email, this.estado.senha)
          .then(p => {
            const emailB64 = b64.encode(self.estado.email);
            firebase.database().ref('usuarios/'+ emailB64).set({
              nome: self.estado.nome,
              email: self.estado.email,
            }).then( p => {
              self.estado.isLoading = false;
              self.onPress()
            });
          })
          .catch(function(error) {
            self.estado.emailExistente = true;
            self.estado.isLoading = false;
          });
      }
    }

    onPress = () => {
      Alert.alert(
        'Cadastro realizado com sucesso!',
        'Seja-bem vindo(a) a nossa plataforma',
        [
          {text: 'Fechar'}]

      )
        this.estado.email = "";
        this.estado.senha = "";
        this.estado.nome = "";
        this.estado.erroSenha = false;
        this.estado.erroCampos = false;
        this.estado.emailExistente = false;
        console.log("Executou onPress");

    }

    emailHandler = (e) => {
      this.estado.email = e;
    }

    senhaHandler = (e) => {
      this.estado.senha = e;
    }

    nomeHandler = (e) => {
      this.estado.nome = e;
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
                          <Item floatingLabel last>
                            <Label>Nome Completo</Label>
                            <Input value={this.estado.nome} onChangeText={this.nomeHandler} />
                          </Item>
                          <Item floatingLabel>
                                <Label>E-mail</Label>
                                <Input value={this.estado.email} onChangeText={this.emailHandler} />
                          </Item>
                          <Item floatingLabel last>
                                <Label>Senha</Label>
                                <Input value={this.estado.senha} onChangeText={this.senhaHandler} secureTextEntry={true}/>
                          </Item>
                        </Form>
                      {this.estado.erroCampos ? <Text style={styles.formatText}>Preencha todos os campos para realizar o cadastro</Text> : <Text></Text>}
                      {this.estado.emailExistente ? <Text style={styles.formatText}>E-mail já cadastrado. Cadastre um novo e-mail ou faça o login.</Text> : <Text></Text>}
                      {this.estado.erroSenha ? <Text style={styles.formatText}>A senha deve possuir no mínimo 6 caracteres.</Text> : <Text></Text>}

                    </Content>
                    <View>
                      {this.estado.isLoading ? <Spinner color='blue' /> :
                        <Button onPress={() => this.realizaCadastro()} style={ styles.btnSignup }>
                          <Text style={ styles.btnText }>Cadastrar</Text>
                        </Button>
                      }

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
    formatText: {
      color: 'red',
      fontSize: 18,
      textAlign: 'center',
      paddingTop: 10
    },
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
