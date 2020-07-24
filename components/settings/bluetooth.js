import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, ListItem } from 'react-native-material-ui';
import { BleManager } from 'react-native-ble-plx';

class Bluetooth extends React.Component {

  constructor() {
      super();
      this.state = {
        deviceNames: [],
        deviceIds: []
      };
      this.manager = new BleManager();
  }
  scanAndConnect() {
    this.manager.startDeviceScan(null, null, (error, device) => {
      let deviceIds = this.state.deviceIds
      if (!deviceIds.includes(device.id) && device.name != null) {
        newDeviceName = device.name
        newDeviceId = device.id
        this.setState( prevState => ({
          deviceNames: [...prevState.deviceNames, newDeviceName],
          deviceIds: [...prevState.deviceIds, newDeviceId]
        })
        )
      }
      if (device.name === 'AR`s iPhone') {
            
            // Stop scanning as it's not necessary if you are scanning for one device.
            device.connect()
            .then((device) => {
              console.log(device.name)
                return device.discoverAllServicesAndCharacteristics()
            })
            .then((device) => {
              // Do work on device with services and characteristics
            })
            .catch((error) => {
                // Handle errors
            });

            // Proceed with connection.
        }
})
}
connect(name) {
    console.log(name)
    devices = this.state.deviceNames
    ids = this.state.deviceIds
    index = devices.indexOf(name)
    console.log(ids[index])
   this.manager.connectToDevice(ids[index])
        .then((device) => {
            console.log(device.name, 'is successfully connected')
            return device.discoverAllServicesAndCharacteristics()
        })
        .catch((error) => {
            // Handle errors
            console.log(error)
        });
}
    render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', margin: 20}}>
        <Button 
              raised
              primary 
              text="connectt"
              style={{ text: {  }, container: { marginBottom: 20, backgroundColor: "#FF5800" } }}
              onPress={() => this.scanAndConnect()}
            />
        <View style={{ flex: 1, flexDirection: 'column', margin: 20 }}>
          {this.state.deviceNames.map(device => 
            <ListItem
              key={device}
              divider
              centerElement={{
                primaryText: device
              }}
              onPress={() => this.connect(device)}
            />
          )}  
        </View>
      </View>
    )
    }
  }

export default Bluetooth;