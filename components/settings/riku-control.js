import * as React from 'react';
import {
  Text, View, Image, TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-material-ui';

function RikuControl({ navigation }) {
  const options = [
    { name: 'Live View', source: require('../../assets/riku-control/bowl.png'), press: () => { alert('soon'); } },
    { name: 'Induction', source: require('../../assets/riku-control/bowl.png'), press: () => { alert('soon'); } },
    { name: 'Weighing Scale', source: require('../../assets/riku-control/scale.png'), press: () => { alert('soon'); } },
    { name: 'Spice Box', source: require('../../assets/riku-control/spice.png'), press: () => { alert('soon'); } },
    { name: 'Rice Cooker', source: require('../../assets/riku-control/bowl.png'), press: () => { alert('soon'); } },
    { name: 'Pantry', source: require('../../assets/riku-control/bowl.png'), press: () => { navigation.navigate('Pantry Full'); } },
  ];
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ flexDirection: 'row', height: 150, margin: 20 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', width: 100 }}>
          <Image
            source={require('../../assets/women.png')}
            style={{ height: 60, width: 60, borderRadius: 30 }}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hey ana, what are you looking for?</Text>
        </View>
      </View>
      <View style={{
        flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'
      }}
      >
        {options.map((option) => (
          <TouchableOpacity
            onPress={() => option.press()}
          >
            <View
              key={option.name}
              style={{
                justifyContent: 'center', alignItems: 'center', width: 150, height: 150, margin: 5, borderWidth: 1, borderColor: 'black'
              }}
            >
              <Image
                source={option.source}
              />
              <Text>{option.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default RikuControl;
