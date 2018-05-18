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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});