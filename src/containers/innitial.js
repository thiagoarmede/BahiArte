import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
<<<<<<< HEAD
import FooterButton from '../components/buttonIndexBottom.js';

import SignupForm from '../components/signup.js';
=======
import Map from '../components/Map'
import {Main} from "./main";
>>>>>>> map

export class Innitial extends React.Component {
        
    render() {
        return (
<<<<<<< HEAD
            
            <SignupForm />
            
=======
            <View>
            </View>
>>>>>>> map
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