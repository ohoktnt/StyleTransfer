import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import ProgressBar from 'react-native-progress/Bar';

export default class App extends Component {
  render() {
    return (
      <View>
        <View>
          <Text>Neural Style Transfer</Text>
          <Text>Art Style Transfer Generator</Text>
        </View>
        <View>
          <Image></Image>
        </View>
        <View>
          <Button title="Select Base Image" ></Button>
          <Button title="Select Style Image"></Button>
        </View>
      </View>
    );
  }
}
