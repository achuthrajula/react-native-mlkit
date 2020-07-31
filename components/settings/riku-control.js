import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-material-ui';

function RikuControl({ navigation }) {
    const options = [
        { name: 'Live View', source: require('../../assets/riku-control/bowl.png') },
        { name: 'Induction', source: require('../../assets/riku-control/bowl.png') },
        { name: 'Weighing Scale', source: require('../../assets/riku-control/scale.png') },
        { name: 'Spice Box', source: require('../../assets/riku-control/spice.png') },
        { name: 'Rice Cooker', source: require('../../assets/riku-control/bowl.png') },
        { name: 'Pantry', source: require('../../assets/riku-control/bowl.png') },
    ]
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{ flexDirection: 'row', height: 150, margin: 20 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center',  width: 100 }}>
            <Image
            source={require('../../assets/women.png')}
            style={{ height: 60, width: 60, borderRadius: 30 }}
          />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hey ana, what are you looking for?</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            {options.map(option => {
                return(
                    <TouchableOpacity>
                        <View key={option.name} style={{ justifyContent: 'center', alignItems: 'center' ,width: 150, height: 150, margin: 5, borderWidth: 1, borderColor: 'black' }}>
                            <Image
                                source={option.source}
                            />
                            <Text>{option.name}</Text>
                        </View>     
                    </TouchableOpacity>
                )
            })}
        </View>
      </View>
    );
  }

export default RikuControl;