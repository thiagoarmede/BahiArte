import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class FooterButton extends Component {
	render() {
		const { text, onPress} = this.props;
		return (
		  <TouchableOpacity style={styles.buttonStyle}
			onPress={() => onPress()}
		  >
			<Text style={styles.textStyle}>{text}</Text>
		  </TouchableOpacity>
		);
	}
}

FooterButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize:20,
	color: '#ffffff',
    textAlign: 'center'
  },
  
  buttonStyle: {
    backgroundColor: '#D30C0F',
    borderRadius: 5,
    width: '70%',
    height: 50
  }
});

export default FooterButton;
