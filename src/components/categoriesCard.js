import React, { Component } from 'react';

import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

export default class Card extends React.Component {
    render() {
        return (
            <View style={ styles.container }>
<<<<<<< HEAD

=======
>>>>>>> 805356079a631af5d885b1ea172d3e8b84501ccb
                <View style={ styles.card }>
                    <ImageBackground style={ styles.imageBackground } source={ this.props.imageUrl }>
                        <View style={ styles.overlayCard }>
                            <Text style={ styles.textCategorie }>{ this.props.title }</Text>
                            <Text style={ styles.textDescription }>{ this.props.eventQuantity } ocorrências próximas de você.</Text>
                        </View>                            
                    </ImageBackground>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    card: {
        padding: 0,
        marginTop: 10,
        backgroundColor: 'red',
        borderRadius: 5,
        height: 150,
    },
    overlayCard: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        padding: 16,
    },
    imageBackground: {
        flex: 1,
        borderRadius: 5,
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