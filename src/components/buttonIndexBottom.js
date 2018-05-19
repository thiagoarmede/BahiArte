import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Constants, LinearGradient } from 'expo';

class FooterButton extends Component {
	render() {
		const { text, onPress} = this.props;
		return (
      <React.Fragment >
        <TouchableOpacity style={styles.buttonStyle} onPress={() => onPress()} >
          <Text style={styles.textStyle}>{text}</Text>
        </TouchableOpacity> 
        <LinearGradient
          style={styles.bottomView}
          colors = {
            ['transparent', 'black', 'black', 'black']
          }
          start={{x: 0.0, y: 0.0}} end={{x: 0.0, y: 1.0}}
        >
          <Text style={styles.subStyle}>Quero divulgar meus serviços!</Text>          
        </LinearGradient>
      </React.Fragment>
		);
	}
}

FooterButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  bottomView: {
    width: '100%',
    height: 105,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    marginTop: -40,
  },

  subStyle: {
    marginTop: 10,
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center'
  },

  textStyle: {
      fontSize: 20,
      color: '#ffffff',
      textAlign: 'center'
  },

  buttonStyle: {
    backgroundColor: '#D30C0F',
    borderRadius: 20,
    width: '70%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: 1
  },
});

export default FooterButton;
