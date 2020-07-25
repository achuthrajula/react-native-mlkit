import * as React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-material-ui';
import { SearchBar } from 'react-native-elements';

function pantryEmpty({ navigation }) {
    let fruits = []
    let vegetables = []
    let spices = []
    const dumpFruits = () => {
        for (let i = 0; i < 10; i++) {
            fruits.push(
                <View key={i} style={{marginRight: 10}}>
                    <Image source={require('../../assets/pantry/mango.png')} />
                </View>
            )
        }
        return fruits;
    }
    const dumpVegetables = () => {
        for (let i = 0; i < 10; i++) {
            vegetables.push(
                <View key={i} style={{marginRight: 10}}>
                    <Image source={require('../../assets/pantry/tomato.png')} />
                </View>
            )
        }
        return vegetables;
    }
    const dumpSpices = () => {
        for (let i = 0; i < 10; i++) {
            spices.push(
                <View key={i} style={{marginRight: 10}}>
                    <Image source={require('../../assets/pantry/spice.png')} />
                </View>
            )
        }
        return spices;
    }
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{ flexDirection: 'row', height: 150 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button 
              raised
              primary 
              text="Pantry"
              style={{ text: { fontWeight: "bold" }, container: { marginBottom: 20, backgroundColor: "#FF5800", width: 200 } }}
              onPress={() => navigation.navigate('Meal Plan 3')}
            />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button 
              raised
              primary 
              text="Shopping List"
              style={{ text: { color: "#FF5800", fontWeight: "bold" }, container: { marginBottom: 20, backgroundColor: "white", width: 200 } }}
              onPress={() => navigation.navigate('Meal Plan 3')}
            />
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#FFF1E8' }}>
            <View style={{ flexDirection: 'row', height: 150, margin: 20 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontWeight: "bold" }}>Your pantry is empty right now! Enter your groceries</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../assets/pantry/food.png')} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../assets/pantry/pantry.png')} />
                </View>
            </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <SearchBar
                        platform="android"
                        searchIcon={null}
                        cancelIcon={null}
                        placeholder="Search Here"
                    />
                </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <ScrollView>
            <View style={{ flexDirection: 'column', height: 300, marginTop: 20 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 30}}>
                    <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Vegetables</Text>
                    <View>
                        <ScrollView horizontal={true}>
                            {dumpVegetables()}
                        </ScrollView>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  paddingBottom: 30}}>
                    <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Fruits</Text>
                    <View>
                        <ScrollView horizontal={true}>
                            {dumpFruits()}
                        </ScrollView>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  paddingBottom: 30}}>
                    <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Species</Text>
                    <View>
                        <ScrollView horizontal={true}>
                            {dumpSpices()}
                        </ScrollView>
                    </View>
                </View>
            </View>
            </ScrollView>
        </View>
      </View>
    );
  }

export default pantryEmpty;