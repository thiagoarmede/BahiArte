import React, { Component } from 'react';

import { View, Button, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';

export default class Card extends React.Component {
    

    render() {
        const {onPress} = this.props;
        return (
            <Button onPress={onPress} transparent style={ styles.container }>
                <View style={ styles.card }>
                    <ImageBackground style={ styles.imageBackground } source={this.props.imageUrl}>
                        <View style={ styles.overlayCard }>
                            <Text style={ styles.textCategorie }>{ this.props.title }</Text>
                            <Text style={ styles.textDescription }>{ this.props.eventQuantity }0 ocorrências próximas de você.</Text>
                        </View>                            
                    </ImageBackground>
                </View>
            </Button>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    card: {
        padding: 0,
        backgroundColor: 'red',
        height: 150,
    },
    overlayCard: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        padding: 16,
    },
    imageBackground: {
        flex: 1,
    },
    textCategorie: {
        color: 'white',
        fontSize: 22,
    },
    textDescription: {
        color: 'white',
        fontSize: 16,
    }
});