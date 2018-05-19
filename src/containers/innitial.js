import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FooterButton from '../components/buttonIndexBottom.js';

import EventInfo from '../components/eventInfo.js';

export class Innitial extends React.Component {
        
    render() {
        return (
            
            <View>
                <EventInfo/>
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