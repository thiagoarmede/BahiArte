<<<<<<< HEAD
import React, { Component } from 'react';
import {
    View,
    Platform,
    StatusBar,
    Text,
    StyleSheet
} from 'react-native';
import FooterButton from '../components/buttonIndexBottom';
export default class Innitial extends React.Component {
        
    render() {
        
        return (
              <View style={styles.container}>
                <FooterButton
                    text="CRIAR UMA CONTA"
                    onPress={() => {
                        alert("Hi there!!!");
                    }}
                />
            </View>
        )
    }    
=======
import React from 'react';
<<<<<<< HEAD
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/categoriesCard.js';
=======
import { View, Text } from 'react-native';
>>>>>>> 013ca9e87108fa3ff0bbd532a5d93bc8fa36ba89

export class Innitial extends React.Component {
        
    render() {
        return (
<<<<<<< HEAD
            <Card />
        )
=======
            <View style={{paddingTop: 100}}>
                <Text>Teste</Text>
            </View>
        );
>>>>>>> 013ca9e87108fa3ff0bbd532a5d93bc8fa36ba89
    }
>>>>>>> 6cbcef007ea76a27bf232a37aefb28a23f597a11
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});