import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import {Button} from 'native-base';
import Card from "../components/categoriesCard";

export class DrawerSideBar extends React.Component {
        
    render() {
        return (
            <View style={styles.DrawerStyle}>
                <Text style={styles.TitleStyle}>BahiArte</Text>
                <Button style={styles.buttonStyle} >
                    <Text style={styles.buttonTextStyle}>Cadastre-se</Text>
                </Button>                    
            </View>            
        );
    }
}

const styles = StyleSheet.create({
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
        fontSize: 22,
    },
    buttonStyle: {
        height: 80,
        backgroundColor: '#D30C0F',
        width: "100%",  
        alignItems: 'center',
    },
    buttonTextStyle: {
        width: '100%',
        color: "white",
        fontSize: 22,
        textAlign: "center",
    }
});
