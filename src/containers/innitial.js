import React from 'react';
import { View, Platform, StatusBar } from 'react-native';

export default class Innitial extends React.Component {
        
    render() {

        return (
            <View style={{paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight}}>
                
            </View>
        );
    }
}
