import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/categoriesCard.js';

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
        justifyContent: 'center',
    },
});