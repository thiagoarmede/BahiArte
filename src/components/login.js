import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Title, Left, Body, Right, Icon,  Drawer, Spinner  } from 'native-base';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import firebase from 'firebase';

@observer
export default class Login extends React.Component {

  @observable
  estado = {
    email: "",
    senha: "",
    isLoading: false,
    error: false,
    preencherCampos: false,
  }

  executaLogin = () => {
    this.estado.isLoading= true;
    var self = this;
    console.log("executaLogin");
    if(this.estado.email === "" || this.estado.senha === ""){
      this.estado.preencherCampos = true;
    } else {
      firebase.auth().signInWithEmailAndPassword(this.estado.email,this.estado.senha)
        .then( p => {
          self.estado.error = false;
          self.estado. preencherCampos = false;
          self.estado.isLoading = false;
          this.props.navigation.navigate('Home');
        })
        .catch(function(error) {
          self.estado.error = true;
          self.estado.isLoading = false;
        });
    }

  }

  emailHandler = (e) => {
    this.estado.email = e;
  }

  senhaHandler = (e) => {
    this.estado.senha = e;
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
          <Image source={require('../../assets/logo.png')} style={styles.image} />

          <Content styles={{marginTop: 40}}>
            <Form>
              <Item floatingLabel>
                <Label>E-mail</Label>
                <Input value={this.estado.login} onChangeText={this.emailHandler}/>
              </Item>
              <Item floatingLabel last>
                <Label>Senha</Label>
                <Input value={this.estado.senha} onChangeText={this.senhaHandler} secureTextEntry={true} />
              </Item>
            </Form>
            {this.estado.error ? <Text style={styles.formatText}>E-mail ou senha inválidos</Text> : <Text></Text> }
            {this.estado.preencherCampos? <Text style={styles.formatText}>É necessário preencher todos os campos para realizar o login</Text> : <Text></Text> }
          </Content>
          <View>
            {this.estado.isLoading ?
              <Spinner color='blue' /> :
              <Button
                onPress={() => this.executaLogin()}
                style={ styles.btnSignup }>
                <Text style={ styles.btnText }>Entrar</Text>
              </Button>}

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
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
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
