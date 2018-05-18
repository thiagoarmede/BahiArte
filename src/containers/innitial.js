import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/categoriesCard.js';

export class Innitial extends React.Component {
        
    render() {
        return (
            <View style={{paddingTop: 100}}>
                <Text>Teste</Text>
            </View>
        );
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