import React, { Component } from 'react';
import {
  Text, View, Image, ScrollView, TouchableOpacity
} from 'react-native';
import { Button, Dialog, DialogDefaultActions } from 'react-native-material-ui';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function (props) {
  const navigation = useNavigation();

  return <ShoppingList {...props} navigation={navigation} />;
}

class ShoppingList extends Component {
  constructor() {
    super();
    this.state = {
      vegetables: false,
      fruits: false,
      spices: false,
      liquids: false,
      meats: false,
      dairy: false
    };
  }

  toggleVegetables() {
    this.setState({
      vegetables: !this.state.vegetables
    });
  }

  toggleFruits() {
    this.setState({
      fruits: !this.state.fruits
    });
  }

  toggleSpices() {
    this.setState({
      spices: !this.state.spices
    });
  }

  toggleMeats() {
    this.setState({
      meats: !this.state.meats
    });
  }

  toggleLiquids() {
    this.setState({
      liquids: !this.state.liquids
    });
  }

  toggleDairy() {
    this.setState({
      dairy: !this.state.dairy
    });
  }

  render() {
    const { navigation } = this.props;
    const vessel = [
      {
        title: 'Vegetables',
        source: require('../../assets/pantry/categories/vegetable.png'),
        state: this.state.vegetables,
        toggle: () => this.toggleVegetables(),
        dish: [
          { title: 'Tomato', source: require('../../assets/pantry/vegetables/tomato.png'), quantity: '2 kgs' },
          { title: 'Potato', source: require('../../assets/pantry/vegetables/potato.png'), quantity: '1 kg ' },
          { title: 'Chillies', source: require('../../assets/pantry/vegetables/chilli.png'), quantity: '200 g' },
          { title: 'Cabbage', source: require('../../assets/pantry/vegetables/cabbage.png'), quantity: '500 g' },
          { title: 'Broccoli', source: require('../../assets/pantry/vegetables/broccoli.png'), quantity: '250 g' },
          { title: 'Carrot', source: require('../../assets/pantry/vegetables/carrot.png'), quantity: '600 kg' },
          { title: 'Spinach', source: require('../../assets/pantry/vegetables/spinach.png'), quantity: '200 kgs' }
        ]
      },
      {
        title: 'Fruits',
        source: require('../../assets/pantry/categories/fruit.png'),
        state: this.state.fruits,
        toggle: () => this.toggleFruits(),
        dish: [
          { title: 'Apple', source: require('../../assets/pantry/fruits/apple.png'), quantity: '2 kgs' },
          { title: 'Banana', source: require('../../assets/pantry/fruits/banana.png'), quantity: '1 dozen' },
          { title: 'Mango', source: require('../../assets/pantry/fruits/mango.png'), quantity: '200 g' },
          { title: 'Kiwi', source: require('../../assets/pantry/fruits/kiwi.png'), quantity: '500 g' },
        ]
      },
      {
        title: 'Spices',
        source: require('../../assets/pantry/categories/spice.png'),
        state: this.state.spices,
        toggle: () => this.toggleSpices(),
        dish: [{ title: 'N/A', source: require('../../assets/pantry/categories/spice.png'), quantity: 'N/A' }]
      },
      {
        title: 'Liquids',
        source: require('../../assets/pantry/categories/liquid.png'),
        state: this.state.liquids,
        toggle: () => this.toggleLiquids(),
        dish: [{ title: 'N/A', source: require('../../assets/pantry/categories/liquid.png'), quantity: 'N/A' }]
      },
      {
        title: 'Meats',
        source: require('../../assets/pantry/categories/meat.png'),
        state: this.state.meats,
        toggle: () => this.toggleMeats(),
        dish: [
          { title: 'Beef', source: require('../../assets/pantry/meat/beef.png'), quantity: '300 g' },
          { title: 'Pork', source: require('../../assets/pantry/meat/pork.png'), quantity: '200 g' },
          { title: 'Poultry', source: require('../../assets/pantry/meat/poultry.png'), quantity: '1 kg' },
        ]
      },
      {
        title: 'Dairy',
        source: require('../../assets/pantry/categories/dairy.png'),
        state: this.state.dairy,
        toggle: () => this.toggleDairy(),
        dish: [{ title: 'N/A', source: require('../../assets/pantry/categories/dairy.png'), quantity: 'N/A' }]
      }
    ];
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row', height: 70 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
              raised
              primary
              text="Pantry"
              style={{ text: { color: '#FF5800', fontWeight: 'bold' }, container: { marginBottom: 20, backgroundColor: 'white', width: 200 } }}
              onPress={() => navigation.navigate('Pantry Full')}
            />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
              raised
              primary
              text="Shopping List"
              style={{ text: { fontWeight: 'bold' }, container: { marginBottom: 20, backgroundColor: '#FF5800', width: 200 } }}
              onPress={() => navigation.navigate('Shopping')}
            />
          </View>
        </View>
        <View style={{
          flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#FFF1E8'
        }}
        >
          <View style={{ flexDirection: 'row', height: 150, margin: 10 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold' }}>Your pantry is loaded with a lot of stuff!</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../../assets/pantry/food.png')} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../../assets/pantry/pantry.png')} />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <ScrollView>
            {vessel.map((dish) => (
              <View key={dish.title} style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                {dish.state && (
                <Dialog style={{ marginBottom: 100 }}>
                  <Dialog.Title><Text style={{ fontWeight: 'bold' }}>{dish.title}</Text></Dialog.Title>
                  <Dialog.Content>
                    {dish.dish.map((itr) => (
                      <View key={itr.title} style={{ flexDirection: 'row', height: 60 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: 100 }}>
                          <Image
              source={itr.source}
            />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                          <Text>{itr.title}</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                          <RadioButton
              value="first"
              onPress={() => console.log('checked')}
            />
                        </View>
                      </View>
                    ))}
                  </Dialog.Content>
                  <Dialog.Actions>
                    <DialogDefaultActions
                      actions={['Okay']}
                      onActionPress={() => { dish.toggle(); }}
                    />
                  </Dialog.Actions>
                </Dialog>
                )}
                <View style={{ flexDirection: 'row', margin: 5, height: 60 }}>
                  <View style={{ justifyContent: 'center', alignItems: 'center', width: 100 }}>
                    <Image
                      source={dish.source}
                    />
                  </View>
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Text>{dish.title}</Text>
                  </View>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { dish.toggle(); }}>
                      <Image
                        source={require('../../assets/add.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={{ flexDirection: 'row', height: 70 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
              raised
              primary
              text="Add Item"
              style={{ text: { color: '#FF5800', fontWeight: 'bold' }, container: { marginBottom: 20, backgroundColor: 'white', width: 200 } }}
              onPress={() => alert('Soon')}
            />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
              raised
              primary
              text="Done"
              style={{ text: { fontWeight: 'bold' }, container: { marginBottom: 20, backgroundColor: '#FF5800', width: 200 } }}
              onPress={() => alert('DOne')}
            />
          </View>
        </View>
      </View>
    );
  }
}
