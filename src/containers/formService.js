import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputForm from '../components/input.js';
import Btn from '../components/btn.js';

export class formService extends React.Component {
        
    render() {
        return (
            <React.Fragment>
            
            <View style = { styles.container } >
                <Text>Serviços</Text>
                < InputForm name = "Tipo de Serviço" />
                < InputForm name = "Data" />
                < InputForm name = "Hora" />
                < InputForm name = "Cidade" />
                < InputForm name = "Rua" />    
                < InputForm name = "Número" / >
            </View>
            <View style = { styles.containerBtn }>
                <Btn text="Cadastrar" onPress={() => {
                    alert("Baby, Alô");
                }} />
            </View>
            </React.Fragment>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        top: 30,
    },

    containerBtn: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        bottom: 20,
    },

});