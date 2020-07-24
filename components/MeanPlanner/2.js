import * as React from 'react';
import {Calendar} from 'react-native-calendars';
import { Text, View, Image, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
    const vessel = [{title: "Breakfast", backgroundColor: "#FFE50061", source: require('../../assets/breakfast.png')}, {title: "Lunch", backgroundColor: "#FFEB3BB3", source: require("../../assets/lunch.png")}, {title: "Dinner", backgroundColor: "#FFA45ECC", source: require("../../assets/dinner.png")}, {title: "Snacks", backgroundColor: "#FFB38BCC", source: require("../../assets/snacks.png")}, {title: "Salads", backgroundColor: "#CAFF95", source: require("../../assets/salads.png")}]
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
            {vessel.map(dish => {
                return (
                    <View key={dish.title} style={{ flexDirection: 'row', margin: 5, backgroundColor: dish.backgroundColor, height: 60 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center',  width: 100 }}>
                        <Image 
                            source={dish.source}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text>{dish.title}</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() =>  navigation.navigate('Meal Plan 4')}>
                            <Image 
                                source={require('../../assets/add.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    </View>
                )
            })}
        </View>
      </View>
    );
  }

export default HomeScreen;