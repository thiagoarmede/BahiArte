import React, { Component } from 'react';

import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

export default class Card extends React.Component {
    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.card }> 
                    <Image style={{ flex: 1 }} source={ require ('../../assets/musica.jpg') }/> 
                    <Text>Música</Text>
                </View>

                <View style={ styles.card }>
                    <ImageBackground style={ styles.imageBackground } source={ require ('../../assets/musica.jpg') }>
                        <View style={ styles.overlayCard }>
                            <Text style={ styles.textDescription }>Artesanato</Text>
                        </View>                            
                    </ImageBackground>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
    },
    card: {
        padding: 1,
        marginTop: 10,
        backgroundColor: 'red',
        borderRadius: 5,
        height: 100,
    },
    overlayCard: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'   

    },
    imageBackground: {
        flex: 1,
        borderRadius: 5,
    },
    textDescription: {
        color: 'white',
    }
});