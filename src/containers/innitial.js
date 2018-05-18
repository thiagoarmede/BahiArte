import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FooterButton from '../components/buttonIndexBottom.js';

export class Innitial extends React.Component {
        
    render() {
        return (
            <View style = { styles.container } >
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        bottom: 0,
    },
});