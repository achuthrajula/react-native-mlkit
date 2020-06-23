import * as React from 'react';
import {Calendar} from 'react-native-calendars';
import { Text, View, Image, Button } from 'react-native';

function HomeScreen() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
          <Calendar
          current={'2020-02-02'}
          hideExtraDays
        />
        <View style={{ backgroundColor: "white" }}> 
            <View>
                <Text style={{ color: "#FF5800", fontSize: 20 }}>Meals</Text>
            </View>
            <View style={{ flexDirection: 'row', margin: 5, backgroundColor:  "#FFE50061", height: 60 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center',  width: 100 }}>
                <Image
                source={require('../../assets/breakfast.png')}
            />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                <Text>Breakfast</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center' }}>
                <Image 
                source={require('../../assets/add.png')}
                />
            </View>
            </View>
            <View style={{ flexDirection: 'row', margin: 5, backgroundColor:  "#FFEB3BB3", height: 60 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center',  width: 100 }}>
                <Image
                source={require('../../assets/lunch.png')}
            />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                <Text>Lunch</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center' }}>
                <Image 
                source={require('../../assets/add.png')}
                />
            </View>
            </View>
            <View style={{ flexDirection: 'row', margin: 5, backgroundColor:  "#FFA45ECC", height: 60 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center',  width: 100 }}>
                <Image
                source={require('../../assets/dinner.png')}
            />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                <Text>Dinner</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center' }}>
                <Image 
                source={require('../../assets/add.png')}
                />
            </View>
            </View>
            <View style={{ flexDirection: 'row', margin: 5, backgroundColor:  "#FFB38BCC", height: 60 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center',  width: 100 }}>
                <Image
                source={require('../../assets/snacks.png')}
            />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                <Text>Snacks</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center' }}>
                <Image 
                source={require('../../assets/add.png')}
                />
            </View>
            </View>
            <View style={{ flexDirection: 'row', margin: 5, backgroundColor:  "#CAFF95", height: 60 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center',  width: 100 }}>
                <Image
                source={require('../../assets/salads.png')}
            />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                <Text>Salads</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center' }}>
                <Image 
                source={require('../../assets/add.png')}
                />
            </View>
            </View>
        </View>
      </View>
    );
  }

export default HomeScreen;