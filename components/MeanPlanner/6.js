import * as React from 'react';
import {
  Text, View, Image, Button, ScrollView
} from 'react-native';

function HomeScreen({ navigation }) {
  const insights = ['29 Minutes', '17 Ingredients', '2 Ingredients'];
  const holder = [];
  const dummy = () => {
    for (let i = 0; i < 20; i++) {
      holder.push(
        <View
          key={i}
          style={{
            flexDirection: 'row', margin: 5, backgroundColor: '#FFE50061', height: 60
          }}
        >
          <View style={{ justifyContent: 'center', alignItems: 'center', width: 100 }}>
            <Image
              source={require('../../assets/breakfast.png')}
            />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
            <Text>Breakfast</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('../../assets/add.png')}
            />
          </View>
        </View>
      );
    }
    return holder;
  };
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image
          style={{ flex: 1 }}
          source={require('../../assets/noodles.png')}
        />
      </View>
      <View style={{
        flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: -10
      }}
      >
        <View style={{ marginBottom: 20, width: 200 }}>
          <Button
            title="Create a Meal Plan"
            color="#FF5800"
          />
        </View>
        <Text style={{ fontSize: 40 }}>Veg Noodles</Text>
      </View>
      <View
        flexDirection="row"
        style={{
          alignItems: 'center', justifyContent: 'center', borderStyle: 'dashed', borderTopWidth: 2, borderBottomWidth: 2, borderColor: '#FF5800'
        }}
      >
        {insights.map((insight) => (
          <View key={insight} style={{ margin: 3 }}>
            <View style={{
              height: 60, width: 60, borderRadius: 30, borderWidth: 2, borderColor: '#FF5800', justifyContent: 'center', alignItems: 'center'
            }}
            >
              {/* <Image
                                    source={require('../../assets/clock.png')}
                                /> */}
            </View>
            <View>
              <Text style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>{insight}</Text>
            </View>
          </View>
        ))}
      </View>
      <Text style={{ fontSize: 20, margin: 10 }}>Ideal Servings: 4</Text>
      <View style={{ height: 200 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50
          }}
        >
          {dummy()}
        </ScrollView>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
        <View style={{ marginBottom: 20, width: 200 }}>
          <Button
            title="Done"
            color="#FF5800"
            style={{ marginButtom: 20 }}
            onPress={() => navigation.navigate('Meal Plan 5')}
          />
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
