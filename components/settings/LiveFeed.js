// /* eslint-disable react/destructuring-assignment */
// /* eslint-disable react/no-access-state-in-setstate */
// import React, { Component } from 'react';
// import {
//   View, StyleSheet, Text, TouchableOpacity
// } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import * as tf from '@tensorflow/tfjs';
// import '@tensorflow/tfjs-react-native';
// import vision from '@react-native-firebase/ml-vision';

// export default class LiveFeed extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       detected: [],
//       frameDetected: false,
//       isTfReady: false
//     };
//   }

//   async componentDidMount() {
//     await tf.ready();
//     this.setState({
//       ...this.state,
//       isTfReady: true
//     });
//   }

//   takePic = async () => {
//     const data = await this.camera.takePictureAsync({ quality: 0.5, base64: true });

//     // Local path to the temporary file on the device
//     const labels = await processImage(data.uri);
//     this.setState({ frameDetected: true, detected: [...this.state.detected, labels] });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <RNCamera
//           style={{ flex: 1 }}
//           ref={(cam) => { this.camera = cam; }}
//         >
//           <TouchableOpacity
//             onPress={() => this.takePic()}
//             style={{ padding: 50, borderColor: 'black', borderWidth: 5 }}
//           >
//             <Text style={{
//               textAlign: 'center', fontSize: 20, color: 'red', fontWeight: 'bold'
//             }}
//             >
//               {
//                 this.state.isTfReady ? 'TF Ready' : 'TF Not Ready'
//               }
//               {/* {
//                 this.state.frameDetected
//                   ? JSON.stringify(this.state.detected[this.state.detected.length - 1][0], null, 2)
//                   : 'Click to detect'
//               } */}
//             </Text>
//           </TouchableOpacity>
//         </RNCamera>
//       </View>
//     );
//   }
// }

// async function processImage(localPath) {
//   const labels = await vision().imageLabelerProcessImage(localPath);

//   labels.slice(0, 5).forEach((label) => {
//     console.log('Service labelled the image: ', label.text);
//     console.log('Confidence in the label: ', label.confidence);
//   });
//   return labels.slice(0, 5);
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 10,
//     backgroundColor: '#000',
//   }
// });

import React from 'react';
import { Text } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

export default class LiveFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTfReady: false,
    };
  }

  async componentDidMount() {
    // Wait for tf to be ready.
    await tf.ready();
    // Signal to the app that tensorflow.js can now be used.
    this.setState({
      isTfReady: true,
    });
    const model = await tf.loadLayersModel('localstorage://my-model-1');
  }

  render() {
    return <Text>{this.state.isTfReady}</Text>;
  }
}
