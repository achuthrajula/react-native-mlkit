import React, { useState } from 'react';
import {
  View, Text
} from 'react-native';
import { utils } from '@react-native-firebase/app';
import vision from '@react-native-firebase/ml-vision';

export default function test() {
  return (
    <View>
      <Text>ML Test</Text>
    </View>
  );
}

async function processImage(localPath) {
  const labels = await vision().imageLabelerProcessImage(localPath);

  labels.forEach((label) => {
    console.log('Service labelled the image: ', label.text);
    console.log('Confidence in the label: ', label.confidence);
  });
}

// Local path to file on the device
console.log(utils.FilePath.PICTURES_DIRECTORY);
const localFile = `${utils.FilePath.PICTURES_DIRECTORY}/image.jpg`;

processImage(localFile).then(() => console.log('Finished processing file.'));
