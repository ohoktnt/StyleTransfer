import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import ProgressBar from 'react-native-progress/Bar';
import {launchImageLibrary} from 'react-native-image-picker';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Neural Style Transfer</Text>
          <Text style={styles.subtitle}>Art Style Transfer Generator</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('./assets/painting1.png')}
            style={styles.artImage}></Image>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Select Base Image"
            buttonStyle={styles.button}></Button>
          <Button
            title="Select Style Image"
            buttonStyle={styles.button}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6adfe6',
    flex: 1,
  },
  titleContainer: {
    marginTop: 80,
    marginLeft: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: 17,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    paddingBottom: 40,
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 57,
    backgroundColor: 'black',
    borderRadius: 8,
    margin: 5,
  },
  artImage: {
    width: 260,
    height: 260,
  },
});
