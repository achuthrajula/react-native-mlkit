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
                <View style={{ margin: 3 }}>
                    <View style={{ height: 60, width: 60, borderRadius: 30, borderWidth: 2, borderColor: "#FF5800", justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../../assets/category/1.png')}
                        />
                    </View>
                    <View>
                        <Text style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>Breakfast</Text>
                    </View>
                </View>
                <View style={{ margin: 3 }}>
                    <View style={{ height: 60, width: 60, borderRadius: 30, borderWidth: 2, borderColor: "#FF5800", justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../../assets/category/2.png')}
                        />
                    </View>
                    <View>
                        <Text style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>Lunch</Text>
                    </View>
                </View>
                <View style={{ margin: 3 }}>
                    <View style={{ height: 60, width: 60, borderRadius: 30, borderWidth: 2, borderColor: "#FF5800", justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../../assets/category/3.png')}
                        />
                    </View>
                    <View>
                        <Text style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>Dinner</Text>
                    </View>
                </View>
                <View style={{ margin: 3 }}>
                    <View style={{ height: 60, width: 60, borderRadius: 30, borderWidth: 2, borderColor: "#FF5800", justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../../assets/category/4.png')}
                        />
                    </View>
                    <View>
                        <Text style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>Soup</Text>
                    </View>
                </View>
                <View style={{ margin: 3 }}>
                    <View style={{ height: 60, width: 60, borderRadius: 30, borderWidth: 2, borderColor: "#FF5800", justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../../assets/category/5.png')}
                        />
                    </View>
                    <View>
                        <Text style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>Curry</Text>
                    </View>
                </View>
                <View style={{ margin: 3 }}>
                    <View style={{ height: 60, width: 60, borderRadius: 30, borderWidth: 2, borderColor: "#FF5800", justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../../assets/category/6.png')}
                        />
                    </View>
                    <View>
                        <Text style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>Rice</Text>
                    </View>
                </View>
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
        <View>
            <Text style={{ marginLeft: 10, fontSize: 20 }}>Select Time</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ margin: 10 }}>
                    <Button title="07:30 AM" color="#FF5800" />
                </View>
                <View style={{ margin: 10 }}>
                    <Button title="08:00 AM" color="#FF5800" />
                </View>
                <View style={{ margin: 10 }}>
                    <Button title="08:30 AM" color="#FF5800" />
                </View>
                <View style={{ margin: 10 }}>
                    <Button title="09:00 AM" color="#FF5800" />
                </View>
                <View style={{ margin: 10 }}>
                    <Button title="09:30 AM" color="#FF5800" />
                </View>
                <View style={{ margin: 10 }}>
                    <Button title="10:00 AM" color="#FF5800" />
                </View>
                <View style={{ margin: 10 }}>
                    <Button title="10:30 AM" color="#FF5800" />
                </View>
            </ScrollView>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <View style={{ marginBottom: 20, width: 200 }}>
            <Button 
              title="Create a Meal Plan"
              color="#FF5800"
              style={{ marginButtom: 20 }}
            />
          </View>
        </View>
    </View>
    );
  }

export default HomeScreen;