import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, StatusBar, TextInput,DatePickerAndroid  } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Title, Left, Body, Right, Icon,  Drawer, Spinner,Picker  } from 'native-base';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import firebase from 'firebase';
import b64 from 'base-64';
import axios from 'axios';

@observer
export default class CadastroEvento extends React.Component {

    @observable
    estado = {
        nome: "",
        criador: "",
        data: "",
        horario: "",
        gratuitoOuPago: "gratuito",
        valor: "",
        endereco: "",
        numero: "",
        descricao: "",
        categoria: "musica",
        latitude: "",
        longitude: "",

        isLoading: false,
        error: false,
        preencherCampos: false,
        preencherPago: false,
        preencherData: false,
    }
    componentWillMount(){

    }
    cadastraEvento = () => {
        var self = this;
        if(!this.estado.nome || !this.estado.horario  || !this.estado.endereco || !this.estado.descricao  ){
            this.estado.preencherCampos = true;
        } else if(this.estado.gratuitoOuPago === "pago"){
            if(!this.pago){
                this.estado.preencherPago = true;
            }
        } else if (!this.estado.data){
            this.preencherData = true;
        } else {
            this.estado.isLoading = true;
            const emailb64 = b64.encode(firebase.auth().currentuser.email);
            firebase.database().ref('usuarios/' + emailb64).once('value').then(function(snapshot) {
                self.estado.nome = snapshot.val().nome;
            }).then( p => {
                const rua = self.estado.endereco;
                const numero = self.estado.numero;
                axios.get('/https://maps.googleapis.com/maps/api/geocode/json?'+numero+ '&' + rua + 'key=AIzaSyAE5fVa7Ngatvb1D9IStAdPBr')
                    .then(function (response) {
                        self.estado.latitude = response.results["geometry"].location.latitude;
                        self.estado.longitude = response.results["geometry"].location.longitude;
                    }).then( e => {
                        firebase.database().ref(self.estado.categoria).push({
                            nome: self.estado.nome,
                            criador: self.estado.criador,
                            data: self.estado.data,
                            horario: self.estado.horario,
                            gratuitoOuPago: self.estado.gratuitoOuPago,
                            valor: self.estado.valor,
                            endereco: self.estado.endereco,
                            numero: self.endereco.numero,
                            descricao: self.estado.descricao,
                            categoria: self.estado.categoria,
                            latitude: self.estado.latitude,
                            longitude: self.estado.longitude
                        }).then( e=> {
                            self.estado.isLoading = false;
                        })
                })
            });


        }


    }

    abreDatePicker = async () => {
        var self = this;
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
                // Use `new Date()` for current date.

                // May 25 2020. Month 0 is January.
                minDate: new Date(),
                date: new Date()
            });

            if (action !== DatePickerAndroid.dismissedAction) {
                self.estado.data = `${day}/${month + 1}/${year}`
            }
        } catch ({code, message}) {
            console.warn('Não foi possivel abrir o date picker', message);
        }
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
                                <Label>Nome do eventol</Label>
                                <Input value={this.estado.nome} onChangeText={e => this.estado.nome = e}/>
                            </Item>
                            <View style={{width:"90%",  paddingTop: 20, paddingLeft: 10,}}>
                                <Picker mode="dropdown"
                                        style={styles.picker}
                                        selectedValue={this.estado.categoria}
                                        onValueChange={ e=> this.estado.categoria = e}>
                                    <Picker.Item label="Música" value="musica" />
                                    <Picker.Item label="Artesanato" value="artesanato" />
                                    <Picker.Item label="Exposições e feiras" value="exposicao" />
                                    <Picker.Item label="Perfomances" value="perfomances" />
                                </Picker>

                                <Picker mode="dropdown"
                                        style={styles.picker}
                                        selectedValue={this.estado.gratuitoOuPago}
                                        onValueChange={ e=> this.estado.gratuitoOuPago = e}>
                                    <Picker.Item label="Gratuito" value="gratuito" />
                                    <Picker.Item label="Não gratuito" value="pago" />
                                </Picker>

                            </View>
                            {this.estado.gratuitoOuPago === "gratuito" ?
                                <Text></Text> :
                                <Item floatingLabel>
                                    <Label>Valor</Label>
                                    <Input value={this.estado.valor} onChangeText={ e => this.estado.valor = e}/>
                                </Item>
                            }
                            <Item floatingLabel>
                                <Label>Descrição</Label>
                                <TextInput value={this.estado.descricao} onChangeText={ e => this.estado.descricao = e}/>
                            </Item>


                            <Item floatingLabel>
                                <Label>Rua</Label>
                                <Input value={this.estado.endereco} onChangeText={e => this.estado.endereco =e }/>
                            </Item>
                            <Item floatingLabel>
                                <Label>Número</Label>
                                <Input value={this.estado.numero} onChangeText={e => this.estado.numero = e}/>
                            </Item>
                            <View style={{flex:1 , justifyContent: 'center'}}>
                                <TouchableOpacity style={styles.btnData} onPress={() => this.abreDatePicker()} >
                                    <Text style={{color:"white", fontSize:14}}>Definir data </Text>
                                </TouchableOpacity>
                            </View>
                            <Item floatingLabel>
                                <Label>Horário</Label>
                                <Input value={this.estado.horario} onChangeText={ e => this.estado.horario = e  }/>
                            </Item>
                        </Form>
                        {this.estado.preencherCampos ? <Text style={styles.formatText}>É necessário preencher todos os campos para realizar o login</Text> : <Text></Text> }
                        {this.estado.preencherData ? <Text style={styles.formatText}> É necessário escolher uma data para o evento. </Text> : <Text></Text>  }
                        {this.estado.preencherPago ? <Text style={styles.formatText}> É necessário definir o preço do ingresso </Text> :<Text></Text> }
                        </Content>
                    <View>
                        {this.estado.isLoading ?
                            <Spinner color='blue' /> :
                            <Button
                                onPress={() => this.cadastraEvento()}
                                style={ styles.btnSignup }>
                                <Text style={ styles.btnText }>Cadastrar</Text>
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
    btnData: {
      paddingTop: 20,
      backgroundColor: 'skyblue',
      width:"50%",
      height: 50,
      alignItems: 'center',

    },
    picker: {

        width:"95%",
    },
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
