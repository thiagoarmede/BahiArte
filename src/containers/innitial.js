import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/categoriesCard.js';

export class Innitial extends React.Component {
        
    render() {
        return (
<<<<<<< HEAD
            <Card/>
=======
            <View style={{paddingTop: 100}}>
                <Text>Teste</Text>
            </View>
>>>>>>> f054c38caef93c86cb684ab17e7b63f1baf37ea3
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