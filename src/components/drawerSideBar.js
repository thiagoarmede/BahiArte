import React from 'react';
import { ScrollView, Text, View, StyleSheet, StatusBar} from 'react-native';
import {Button} from 'native-base';
import Card from "../components/categoriesCard";

export class DrawerSideBar extends React.Component {
        
    render() {
        return (
            <View style={styles.DrawerStyle}>
                <View>
                    <Text style={styles.TitleStyle}>BahiArte</Text>
                    <Button onPress={() => this.props.navigation.navigate('SignUp')} style={styles.eventButtonStyle} >
                        <Text style={styles.eventButtonTextStyle}>Crie um evento!</Text>
                    </Button>
                </View>
                <View style={styles.buttonView}>
                  <Button onPress={() => this.props.navigation.navigate('Login')} style={styles.loginButtonStyle} >
                    <Text style={styles.buttonTextStyle}>Login</Text>
                  </Button>
                  <Button onPress={() => this.props.navigation.navigate('SignUp')} style={styles.buttonStyle} >
                      <Text style={styles.buttonTextStyle}>Cadastre-se</Text>
                  </Button>

                </View>
            </View>            
        );
    }
}

const styles = StyleSheet.create({
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
        paddingTop: 40,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        justifyContent: 'space-between'
    },
    TitleStyle: {
        width: "100%",
        textAlign: "center",
        color: '#10375E',
        fontSize: 22,
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
