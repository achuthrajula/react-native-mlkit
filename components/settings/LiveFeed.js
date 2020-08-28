/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import vision from '@react-native-firebase/ml-vision';

export default class LiveFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frames: []
    };
  }

  takePic = async () => {
    const data = await this.camera.takePictureAsync({ quality: 0.5, base64: true });
    this.setState({
      frames: [...this.state.frames, data]
    });

    // Local path to the temporary file on the device
    await processImage(data.uri);
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={{ flex: 1 }}
          ref={(cam) => { this.camera = cam; }}
        >
          <TouchableOpacity
            onPress={() => this.takePic()}
            style={{ flex: 1, padding: 50 }}
          >
            <Text style={{ textAlign: 'center', fontSize: 20 }}>Press me!</Text>
          </TouchableOpacity>
        </RNCamera>
      </View>
    );
  }
}

async function processImage(localPath) {
  const labels = await vision().imageLabelerProcessImage(localPath);

  labels.slice(0, 5).forEach((label) => {
    console.log('Service labelled the image: ', label.text);
    console.log('Confidence in the label: ', label.confidence);
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#000',
  }
});
