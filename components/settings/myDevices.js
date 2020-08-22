import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-material-ui';

function HomeScreen({ navigation }) {
  const devices = [
    { name: 'Google Fit', source: require('../../assets/devices/google-fit.png') },
    { name: 'HealthKit', source: require('../../assets/devices/health-kit.png') },
    { name: 'Runkeeper', source: require('../../assets/devices/runkeeper.png') },
    { name: 'Connect Mobile', source: require('../../assets/devices/mobile.png') },
    { name: 'Fitbit', source: require('../../assets/devices/fitbit.png') }
  ];
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      {devices.map((device) => (
        <View style={{ flexDirection: 'row', height: 80, margin: 20 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', width: 150 }}>
            <Image
              style={{ width: 50, height: 50 }}
              source={device.source}
            />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
            <Text style={{ fontSize: 20, fontFamily: 'Palatino Linotype', fontWeight: '500' }}>{device.name}</Text>
          </View>
        </View>
      ))}
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
        <View style={{ marginBottom: 20, width: 200 }}>
          <Button
            raised
            primary
            text="Done"
            style={{ text: { }, container: { marginBottom: 20, backgroundColor: '#FF5800' } }}
            onPress={() => navigation.navigate('Settings Layout')}
          />
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
