import * as React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-material-ui'

function HomeScreen({ navigation }) {
    const categories = [{title: 'Breakfast', source: require('../../assets/category/1.png')}, {title: 'Lunch', source: require('../../assets/category/2.png')}, {title: 'Dinner', source: require('../../assets/category/3.png')}, {title: 'Soup', source: require('../../assets/category/4.png')}, {title: 'Curry', source: require('../../assets/category/5.png')}, {title: 'Rice', source: require('../../assets/category/6.png')}]
    const timings = ["07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM"]
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
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
                <Image
                    style={{ margin: 10 }}
                    source={require('../../assets/curry.png')}
                />
            </ScrollView>
          </View>
        <View style={{ backgroundColor: "white" }}> 
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 20 }}>Choose from categories</Text>
            </View>
            <View flexDirection="row">
                {categories.map( category => {
                    return(
                        <View style={{ margin: 3 }} key={category.title}>
                            <View style={{ height: 60, width: 60, borderRadius: 30, borderWidth: 2, borderColor: "#FF5800", justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={category.source}
                                />
                            </View>
                            <View>
                    <Text style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>{category.title}</Text>
                            </View>
                        </View>
                    )
                })}
          </View>
          <View style={{ margin: 10 }}>
                <View style={{ flexDirection: 'row', margin: 5, height: 50 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Add a new breakfast recipe</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center' }}>
                        <Image 
                        source={require('../../assets/add.png')}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', margin: 5, height: 50 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Lunch</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center' }}>
                        <Image 
                        source={require('../../assets/add.png')}
                        />
                    </View>
                </View>
            </View>
        </View>
        <ScrollView>
        <View>
            <Text style={{ marginLeft: 10, fontSize: 20 }}>Select Time</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {timings.map(time => {
                    return(
                        <View key={time} style={{ margin: 10 }}>
                            {/* <Button title={time} color="#FF5800" /> */}
                            <Button 
                                raised
                                primary 
                                text={time}
                                style={{ text: {  }, container: { marginBottom: 20, backgroundColor: "#FF5800" } }}
                            />
                        </View>
                    )
                })}
            </ScrollView>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <View style={{ marginBottom: 20, width: 200 }}>
          <Button 
              raised
              primary 
              text="Create a Meal Plan"
              style={{ text: {  }, container: { marginBottom: -5, backgroundColor: "#FF5800" } }}
              onPress={() => navigation.navigate('Meal Plan 6')}
            />
          </View>
        </View>
        </ScrollView>
    </View>
    );
  }

export default HomeScreen;