import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputForm from '../components/input.js';
import Btn from '../components/btn.js';

export class formService extends React.Component {
        
    render() {
        return (
            <View style = { styles.container } >
                < InputForm name = "Enter name 1" />
                < InputForm name = "Enter name 1" />
                < InputForm name = "Enter name 1" />
                < InputForm name = "Enter name 1" />
                < InputForm name = "Enter name 1" />
                <Btn text="Cadastrar"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        top: 60,
    },
});