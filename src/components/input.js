import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

export default class InputForm extends Component {
  render() {
    const { name } = this.props;
    return (  
        <Item style = { styles.inputStyle } floatingLabel>
            <Label>{name}</Label>
            <Input />
        </Item>
    );
  }
}

const styles = StyleSheet.create({
    inputStyle: {
        width: '70%',
        flexDirection: 'row',
        marginTop: 8,
    },
});