import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {observable} from "mobx";
import {observer} from "mobx-react";

@observer
export default class App extends React.Component {
  @observable text = "";

  handleChange = (event) => {
    this.text = event;
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput onChangeText={this.handleChange} />  
        <Text>{this.text}</Text>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
