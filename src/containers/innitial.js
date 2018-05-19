import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FooterButton from '../components/buttonIndexBottom.js';

<<<<<<< HEAD
import SignupForm from '../components/signup.js';
import Map from '../components/Map'
import {Main} from "./main";
=======
import EventInfo from '../components/eventInfo.js';
>>>>>>> origin/cards

export class Innitial extends React.Component {
        
    render() {
        return (
<<<<<<< HEAD
            <View>
            </View>
=======
            
            <View>
                <EventInfo/>
            </View>
            
>>>>>>> origin/cards
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