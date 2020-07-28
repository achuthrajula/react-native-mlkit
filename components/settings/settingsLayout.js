import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, ListItem } from 'react-native-material-ui';

function settingsLayout ({ navigation }) {
  
    return (
      <View style={{flex: 1, flexDirection: 'column', margin: 20}}>
        <Button 
            raised
            primary 
            text="User Onboard"
            style={{ text: {  }, container: { marginBottom: 20, backgroundColor: "#FF5800" } }}
            onPress={() => navigation.navigate('User Onboard 1') }
        />
        <Button 
            raised
            primary 
            text="Bluetooth"
            style={{ text: {  }, container: { marginBottom: 20, backgroundColor: "#FF5800" } }}
            onPress={() => navigation.navigate('Bluetooth Pairing') }
        />
      </View>
    )
}

export default settingsLayout;