import React from 'react';
import { ScrollView, Text, View, StyleSheet, StatusBar, Image} from 'react-native';
import {Button} from 'native-base';
import Card from "../components/categoriesCard";
import { observer } from 'mobx-react';
import { observable } from 'mobx';
const firebase = require('firebase');

@observer
export class DrawerSideBar extends React.Component {
    @observable isLogged = false;
    @observable user = null

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            user ? this.user = user : true;
        });
    }

    render() {
        const user = firebase.auth().currentUser;
        return (
            <View style={styles.DrawerStyle}>

                    <View syles={styles.logo}>
                        <Image source={require("../../assets/logo.png")} style={styles.TitleStyle}/>
                        <Button onPress={() => this.props.navigation.navigate('Home')} style={styles.eventButtonStyle} >
                            <Text style={styles.eventButtonTextStyle}>Home</Text>
                        </Button>
                        {user || this.isLogged ?
                        <Button onPress={() => this.props.navigation.navigate('SignUp')} style={styles.eventButtonStyle} >
                            <Text style={styles.eventButtonTextStyle}>Crie um evento!</Text>
                        </Button>
                        : <Text style={{fontSize: 14, marginTop: 20, width: '100%', textAlign: 'center'}}>Olá!, Bem vindo ao BahiArte</Text> }
                    </View>
                
                {!user && !this.isLogged ?
                    <View style={styles.buttonView}>
                    <Button onPress={() => this.props.navigation.navigate('Login')} style={styles.loginButtonStyle} >
                        <Text style={styles.buttonTextStyle}>Login</Text>
                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('SignUp')} style={styles.buttonStyle} >
                        <Text style={styles.buttonTextStyle}>Cadastre-se</Text>
                    </Button>
                    </View>
                    :                 
                    <Button onPress={() => {
                        firebase.auth().signOut();
                        this.props.navigation.navigate('Home');
                        this.isLogged = false;
                    }} style={styles.buttonStyle} >
                        <Text style={styles.buttonTextStyle}>Sair</Text>
                    </Button>
                }

            </View>            
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        height: 150,
        width: '100%',
    },  
    loginButtonStyle: {
      height: 80,
      backgroundColor: '#0C7AD3',
      width: "100%",
      alignItems: 'center',
    },
    buttonView: {
      flex: 1,
      justifyContent: "flex-end"
    },
    DrawerStyle: {
        height: "100%",
        width: "100%",
        // paddingTop: 40,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        justifyContent: 'space-between'
    },
    TitleStyle: {
        width: "100%",
        height: 190,
        marginBottom: 40,
    },
    buttonStyle: {
        height: 80,
        backgroundColor: '#D30C0F',
        width: "100%",  
        alignItems: 'center',
    },
    eventButtonStyle: {
        height: 45,
        backgroundColor: 'lightgray',
        width: "100%",  
        alignItems: 'center',
    },
    buttonTextStyle: {
        width: '100%',
        color: "white",
        fontSize: 22,
        textAlign: "center",
    },
    eventButtonTextStyle: {
        width: '100%',
        color: "#10375E",
        fontSize: 16,
        textAlign: "center",
    }
});
