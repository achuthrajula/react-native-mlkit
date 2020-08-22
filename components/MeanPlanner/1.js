import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-material-ui';
import Tooltip from 'react-native-walkthrough-tooltip';
import AsyncStorage from '@react-native-community/async-storage';
import Clipboard from '@react-native-community/clipboard';

function HomeScreen({ navigation }) {
  const [toolTip1, toggleToolTip1] = useState(true);
  const [toolTip2, toggleToolTip2] = useState(false);
  const [status, setStatus] = useState();
  const [copiedText, setCopiedText] = useState('');
  const copyToClipboard = () => {
    Clipboard.setString('hello world');
  };
  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };
  const getData = async () => {
    const value = await AsyncStorage.getItem('first-visit');
    try {
      if (value == 'true') {
        setStatus(value);
      }
    } catch (e) {
      // error reading value
      console.log(e);
    } finally {
      return value;
    }
  };
  getData();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    copiedText: {
      marginTop: 10,
      color: 'red',
    },
  });
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      {status && (
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View
            style={{
              flexDirection: 'row',
              height: 150,
              backgroundColor: '#FFF1E8',
              margin: 20,
            }}
          >
            <Tooltip
              isVisible={toolTip1}
              content={<Text>Step 1</Text>}
              placement="top"
              onClose={() => {
                toggleToolTip1(false);
                toggleToolTip2(true);
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  height: 150,
                  backgroundColor: '#FFF1E8',
                  margin: 20,
                }}
              >
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 100,
                  }}
                >
                  <Image source={require('../../assets/plate.png')} />
                </View>
              </View>
            </Tooltip>
            <View
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
              <Text>
                You're not on a meal plan currently, but you can create one.
                {' '}
              </Text>
            </View>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
          >
            <View style={{ marginBottom: 20, width: 200 }}>
              <Tooltip
                isVisible={toolTip2}
                content={<Text>Step 2</Text>}
                placement="top"
                onClose={() => toggleToolTip2(false)}
              >
                <Button
                  raised
                  primary
                  text="Create a Meal Plan"
                  style={{
                    text: {},
                    container: { marginBottom: 20, backgroundColor: '#FF5800' },
                  }}
                  onPress={() => navigation.navigate('Meal Plan 3')}
                />
              </Tooltip>
            </View>
            <SafeAreaView style={{ flex: 1 }}>
              <View style={styles.container}>
                {/* <TouchableOpacity onPress={copyToClipboard}>
              <Text>Click here to copy to Clipboard</Text>
            </TouchableOpacity> */}
                <TouchableOpacity onPress={fetchCopiedText}>
                  <Text>View copied text</Text>
                </TouchableOpacity>

                <Text style={styles.copiedText}>{copiedText}</Text>
              </View>
            </SafeAreaView>
          </View>
        </View>
      )}
      {!status && (
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View
            style={{
              flexDirection: 'row',
              height: 150,
              backgroundColor: '#FFF1E8',
              margin: 20,
            }}
          >
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 100,
              }}
            >
              <Image source={require('../../assets/plate.png')} />
            </View>
            <View
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
              <Text>
                You're not on a meal plan currently, but you can create one.
                {' '}
              </Text>
            </View>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
          >
            <View style={{ marginBottom: 20, width: 200 }}>
              <Button
                raised
                primary
                text="Create a Meal Plan"
                style={{
                  text: {},
                  container: { marginBottom: 20, backgroundColor: '#FF5800' },
                }}
                onPress={() => navigation.navigate('Meal Plan 3')}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

export default HomeScreen;
