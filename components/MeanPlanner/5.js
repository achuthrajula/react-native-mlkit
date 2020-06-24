import * as React from 'react';
import { Text, View, Image, Button, ScrollView } from 'react-native';

function HomeScreen() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 50
                }}>
                <Text style={{ margin: 20, fontSize: 50, color: '#FF5800' }}>Breakfast</Text>
                <Text style={{ margin: 20, fontSize: 50, color: '#FF5800' }}>Lunch</Text>
                <Text style={{ margin: 20, fontSize: 50, color: '#FF5800' }}>Dinner</Text>
            </ScrollView>
          </View>
          <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 15 }}>Your Breakfast</Text>
            </View>
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 50
                }}>
                <Image
                    style={{ margin: 10 }}
                    source={require('../../assets/noodles.png')}
                />
            </ScrollView>
          </View>
        <View style={{ backgroundColor: "white" }}> 
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 15 }}>Veg Noodles</Text>
            </View>
        </View>
        <View>
            <Text style={{ marginLeft: 10, fontSize: 20 }}>Time</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ margin: 10, borderWidth: 2, borderColor: "#FF5800", width: 100, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#FF5800' }} >7:30 AM</Text>
                </View>
            </ScrollView>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <View style={{ marginBottom: 20, width: 200 }}>
            <Button 
              title="Done"
              color="#FF5800"
              style={{ marginButtom: 20 }}
              onPress={() => alert('Done')}
            />
          </View>
        </View>
    </View>
    );
  }

export default HomeScreen;