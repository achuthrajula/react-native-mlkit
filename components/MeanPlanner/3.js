import * as React from 'react';
import { Text, View, Image, Button, ScrollView, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
    const vessel = [{title: "Breakfast", backgroundColor: "#FFE50061", source: require('../../assets/breakfast.png')}, {title: "Lunch", backgroundColor: "#FFEB3BB3", source: require("../../assets/lunch.png")}, {title: "Dinner", backgroundColor: "#FFA45ECC", source: require("../../assets/dinner.png")}, {title: "Snacks", backgroundColor: "#FFB38BCC", source: require("../../assets/snacks.png")}, {title: "Salads", backgroundColor: "#CAFF95", source: require("../../assets/salads.png")}]
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 50
                }}>
                <Text style={{ margin: 20, fontSize: 50, color: '#FF5800' }}>Yesterday</Text>
                <Text style={{ margin: 20, fontSize: 50, color: '#FF5800' }}>Today</Text>
                <Text style={{ margin: 20, fontSize: 50, color: '#FF5800' }}>Tomorrow</Text>
            </ScrollView>
          </View>
          <View style={{ flexDirection: 'row', height: 150, backgroundColor: "#FFF1E8", margin: 20 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center',  width: 100 }}>
            <Image
            source={require('../../assets/plate.png')}
          />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>You're not on a meal plan currently, but you can create one. </Text>
          </View>
        </View>
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
                        <TouchableOpacity onPress={() =>  navigation.navigate('Meal Plan 2')}>
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