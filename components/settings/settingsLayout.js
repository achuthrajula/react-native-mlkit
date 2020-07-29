import * as React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

function settingsLayout ({ navigation }) {
  
    return (
      <View style={{flex: 1, flexDirection: 'column', margin: 20}}>
        <Button
              title="User Profile"
              titleStyle={{ color: 'black' }}
              buttonStyle={{ backgroundColor: "white", marginBottom: 20, borderWidth:1, borderColor: 'white', borderBottomColor: 'black', }}
              onPress={() => navigation.navigate('User Profile') }
          />
        <Button
              title="User Onboard"
              titleStyle={{ color: 'black' }}
              buttonStyle={{ backgroundColor: "white", marginBottom: 20, borderWidth:1, borderColor: 'white', borderBottomColor: 'black', }}
              onPress={() => navigation.navigate('User Onboard 1') }
          />  
        <Button
              title="Pair with Riku"
              titleStyle={{ color: 'black' }}
              buttonStyle={{ backgroundColor: "white", marginBottom: 20, borderWidth:1, borderColor: 'white', borderBottomColor: 'black', }}
              onPress={() => navigation.navigate('Bluetooth Pairing') }
          />
          <Button
              title="My Devices"
              titleStyle={{ color: 'black' }}
              buttonStyle={{ backgroundColor: "white", marginBottom: 20, borderWidth:1, borderColor: 'white', borderBottomColor: 'black', }}
              onPress={() => navigation.navigate('My Devices')}
          />
          <Button
              title="About the app"
              titleStyle={{ color: 'black' }}
              buttonStyle={{ backgroundColor: "white", marginBottom: 20, borderWidth:1, borderColor: 'white', borderBottomColor: 'black', }}
              onPress={() => alert('Will be added')}
          />
          <Button
              title="Terms and Conditions"
              titleStyle={{ color: 'black' }}
              buttonStyle={{ backgroundColor: "white", marginBottom: 20, borderWidth:1, borderColor: 'white', borderBottomColor: 'black', }}
              onPress={() => alert('Will be added')}
          />
          <Button
              title="Help and Support"
              titleStyle={{ color: 'black' }}
              buttonStyle={{ backgroundColor: "white", marginBottom: 20, borderWidth:1, borderColor: 'white', borderBottomColor: 'black', }}
              onPress={() => alert('Will be added')}
          />
      </View>
    )
}

export default settingsLayout;