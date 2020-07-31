import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Dialog } from 'react-native-material-ui';
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function Recipe ({ navigation }) {
    const [ham, toggleHam] = useState(false);
    const userInsights = [['Recepies', 100], ['Followers', 290], ['Following', 20]]
    const categories = [{title: 'Breakfast', source: require('../../assets/category/1.png')}, {title: 'Lunch', source: require('../../assets/category/2.png')}, {title: 'Dinner', source: require('../../assets/category/3.png')}, {title: 'Soup', source: require('../../assets/category/4.png')}, {title: 'Curry', source: require('../../assets/category/5.png')}, {title: 'Rice', source: require('../../assets/category/6.png')}]
    return (
      <View style={{flexDirection: 'column', height: 20}}>
            <View>
            <View style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center', marginTop: 50, height: 100 }}>
                {categories.map( category => {
                    return(
                        <View style={{ margin: 3, justifyContent: 'center', alignItems: 'center' }} key={category.title}>
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
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 550 }}>
                <ScrollView>
                    <View style={{ flexDirection: 'column', margin: 5, height: 300 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                            <Text style={{ fontSize: 20, fontFamily: "Palatino Linotype" ,fontWeight: "bold" }}>You may like {'>'}</Text>
                        </View>
                        <View style={{alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() =>  navigation.navigate('Meal Plan 2')}>
                                <Image 
                                    source={require('../../assets/add.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <ScrollView 
                            horizontal={true} 
                            showsHorizontalScrollIndicator={false} 
                            viewabilityConfig={{
                            itemVisiblePercentThreshold: 50
                        }}>
                        <View style={{ flexDirection: "column" }}>
                            <View>
                                <Image
                                    style={{ margin: 10 }}
                                    source={require('../../assets/noodles.png')}
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                <Text style={{ fontSize: 20, fontFamily: "Palatino Linotype" ,fontWeight: "bold" }}>Tasty Lasagna (Riku Compatible)</Text>
                            </View>
                            <View style={{ margin: 10, flexDirection: "row", justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                    <Text style={{ fontFamily: "Palatino Linotype" ,fontWeight: "bold" }}>{'\u2B24'}15 min</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                    <Text style={{ fontFamily: "Palatino Linotype" ,fontWeight: "bold" }}>{'\u2B24'}7 Ingredients</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                    <Text style={{ fontFamily: "Palatino Linotype" ,fontWeight: "bold" }}>{'\u2B24'}1k Cals</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "column" }}>    
                            <View>
                                <Image
                                    style={{ margin: 10 }}
                                    source={require('../../assets/curry.png')}
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                <Text style={{ fontSize: 20, fontFamily: "Palatino Linotype" ,fontWeight: "bold" }}>Batata Recipe</Text>
                            </View>
                            <View style={{ margin: 10, flexDirection: "row", justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                    <Text style={{ fontFamily: "Palatino Linotype" ,fontWeight: "bold" }}>{'\u2B24'}15 min</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                    <Text style={{ fontFamily: "Palatino Linotype" ,fontWeight: "bold" }}>{'\u2B24'}7 Ingredients</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                    <Text style={{ fontFamily: "Palatino Linotype" ,fontWeight: "bold" }}>{'\u2B24'}1k Cals</Text>
                                </View>
                            </View>
                        </View>
                        </ScrollView>
                    </View>
                    <View style={{ flexDirection: 'column', margin: 5, height: 300, marginTop: 10 }}>
                        <View style={{alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() =>  navigation.navigate('Meal Plan 2')}>
                                <Image 
                                    source={require('../../assets/add.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <ScrollView 
                            horizontal={true} 
                            showsHorizontalScrollIndicator={false} 
                            viewabilityConfig={{
                            itemVisiblePercentThreshold: 50
                        }}>
                        <View style={{ flexDirection: "column" }}>
                            <View>
                                <Image
                                    style={{ margin: 10 }}
                                    source={require('../../assets/noodles.png')}
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                <Text style={{ fontSize: 20, fontFamily: "Palatino Linotype" ,fontWeight: "bold" }}>Tasty Lasagna (Riku Compatible)</Text>
                            </View>
                            <View style={{ margin: 10, flexDirection: "row", justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                    <Text style={{ fontFamily: "Palatino Linotype" ,fontWeight: "bold" }}>{'\u2B24'}15 min</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                    <Text style={{ fontFamily: "Palatino Linotype" ,fontWeight: "bold" }}>{'\u2B24'}7 Ingredients</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                    <Text style={{ fontFamily: "Palatino Linotype" ,fontWeight: "bold" }}>{'\u2B24'}1k Cals</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "column" }}>    
                            <View>
                                <Image
                                    style={{ margin: 10 }}
                                    source={require('../../assets/curry.png')}
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                <Text style={{ fontSize: 20, fontFamily: "Palatino Linotype" ,fontWeight: "bold" }}>Batata Recipe</Text>
                            </View>
                            <View style={{ margin: 10, flexDirection: "row", justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                    <Text style={{ fontFamily: "Palatino Linotype" ,fontWeight: "bold" }}>{'\u2B24'}15 min</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                    <Text style={{ fontFamily: "Palatino Linotype" ,fontWeight: "bold" }}>{'\u2B24'}7 Ingredients</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                                    <Text style={{ fontFamily: "Palatino Linotype" ,fontWeight: "bold" }}>{'\u2B24'}1k Cals</Text>
                                </View>
                            </View>
                        </View>
                        </ScrollView>
                    </View>
                    </ScrollView>
            </View>
      </View>
    )
}

export default Recipe;