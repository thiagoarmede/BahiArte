import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import Card from "../components/categoriesCard";

export class Main extends React.Component {
        
    render() {
        return (
            <View>
                <ScrollView style={{paddingTop: 80}}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />                    
                </ScrollView>
            </View>            
        );
    }
}
