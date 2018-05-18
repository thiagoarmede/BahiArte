import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FooterButton from '../components/buttonIndexBottom.js';

import SignupForm from '../components/signup.js';

export class Innitial extends React.Component {
        
    render() {
        return (
            
            
            <SignupForm />
            
            
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