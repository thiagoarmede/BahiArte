import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

export default class EventInfo extends React.Component {
    render(){
        const {title, date, description, cost} = this.props;
        return(
            <View style={ styles.container }>
                <View style={ styles.infocard }>                          
                    <Image style={ styles.eventPicture } source={{uri: 'https://portal.ifma.edu.br/wp-content/uploads/2011/06/2011_forro.jpg'}}/>
                    <View style= { styles.eventCard }>
                        <Text style={ styles.eventTitle }>{title}</Text>
                        <Text style={ styles.eventDate }>{date}</Text>
                        <Text style={ styles.eventDescription }>{description}</Text>
                        <Text style={ styles.eventCost }>Custo: {cost}</Text> 
                    </View>                          
                </View>   
                   
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: -10,
    },
    infocard: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        height: 150,  
        width: '100%',
        padding: 10, 
        flexDirection: 'row',     
    },
    eventCard: {
        marginLeft: 13,
        marginTop: 10,
    },
    eventTitle: {
        fontSize: 16,
        color: '#002141',
        fontWeight: 'bold',
    },
    eventDate: {
        fontSize: 12,
        color: '#002141',
    },
    eventDescription: {
       marginTop: 5,
       width: 190,
       textAlign: 'justify',
    },
    eventCost: {
        marginTop: 10,
        fontSize: 18,
        color: '#228B22',
        fontWeight: 'bold',
    },
    eventPicture: {
        marginTop: 8,
        width: 120,
        height: 120,
        borderRadius: 6,
    }
});