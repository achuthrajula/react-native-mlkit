import * as React from 'react';
import {
  Text, View, Image, ScrollView, TouchableOpacity
} from 'react-native';
import { Slider, Button } from 'react-native-elements';

function OnBoard({ navigation }) {
  const vessel = [{ title: 'Breakfast', backgroundColor: '#FFE50061', source: require('../../assets/breakfast.png') }, { title: 'Lunch', backgroundColor: '#FFEB3BB3', source: require('../../assets/lunch.png') }, { title: 'Dinner', backgroundColor: '#FFA45ECC', source: require('../../assets/dinner.png') }, { title: 'Snacks', backgroundColor: '#FFB38BCC', source: require('../../assets/snacks.png') }, { title: 'Salads', backgroundColor: '#CAFF95', source: require('../../assets/salads.png') }];
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <View style={{ flexDirection: 'column', margin: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Let's create your Health Profile</Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'column', margin: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Choose your gender</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', margin: 20 }}>
            <TouchableOpacity onPress={() => alert('male')}>
              <Image
                source={require('../../assets/male.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', margin: 20 }}>
            <TouchableOpacity onPress={() => alert('female')}>
              <Image
                source={require('../../assets/female.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 150, margin: 20
      }}
      >
        <View style={{
          flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20
        }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Select your age</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Slider
            animateTransitions
            step={1}
            minimumValue={0}
            maximumValue={100}
            style={{ width: 200 }}
          />
        </View>
      </View>
      <View style={{ justifyContent: 'flex-end', marginBottom: 20, alignItems: 'center' }}>
        <View style={{ width: 300 }}>
          <Button
            buttonStyle={{ backgroundColor: '#FF5800' }}
            title="Next"
            onPress={() => navigation.navigate('User Onboard 2')}
          />
        </View>
      </View>
    </View>
  );
}

export default OnBoard;
