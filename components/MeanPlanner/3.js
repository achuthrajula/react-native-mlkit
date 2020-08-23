import React, { useState } from 'react';
import Tooltip from 'react-native-walkthrough-tooltip';
import {
  Text, View, Image, ScrollView, TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

function HomeScreen({ navigation }) {
  const [toolTip1, toggleToolTip1] = useState(true);
  const [toolTip2, toggleToolTip2] = useState(false);
  const [toolTip3, toggleToolTip3] = useState(false);
  const [toolTip4, toggleToolTip4] = useState(false);
  const [toolTip5, toggleToolTip5] = useState(false);
  const [toolTip6, toggleToolTip6] = useState(false);
  const [status, setStatus] = useState();
  const vessel = [
    {
      text: 'Step 2', title: 'Breakfast', backgroundColor: '#FFE50061', tooltip: toolTip2, source: require('../../assets/breakfast.png'), next: () => { toggleToolTip2(false); toggleToolTip3(true); }
    },
    {
      text: 'Step 3', title: 'Lunch', backgroundColor: '#FFEB3BB3', tooltip: toolTip3, source: require('../../assets/lunch.png'), next: () => { toggleToolTip3(false); toggleToolTip4(true); }
    },
    {
      text: 'Step 4', title: 'Dinner', backgroundColor: '#FFA45ECC', tooltip: toolTip4, source: require('../../assets/dinner.png'), next: () => { toggleToolTip4(false); toggleToolTip5(true); }
    },
    {
      text: 'Step 5', title: 'Snacks', backgroundColor: '#FFB38BCC', tooltip: toolTip5, source: require('../../assets/snacks.png'), next: () => { toggleToolTip5(false); toggleToolTip6(true); }
    },
    {
      text: 'Step 6', title: 'Salads', backgroundColor: '#CAFF95', tooltip: toolTip6, source: require('../../assets/salads.png'), next: () => { toggleToolTip6(false); }
    }
  ];
  const getData = async () => {
    const value = await AsyncStorage.getItem('first-visit');
    try {
      if (value === 'true') {
        setStatus(value);
      }
    } catch (e) {
      // error reading value
      console.log(e);
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return value;
    }
  };
  getData();
  //   React.useLayoutEffect(() => {
  //     navigation.setOptions({
  //       headerRight: () => (
  //         <Button onPress={() => alert('Working')} text="Update count" />
  //       ),
  //     });
  //   }, [navigation]);
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      {status && (
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              viewabilityConfig={{
                itemVisiblePercentThreshold: 50
              }}
            >
              <Text style={{ margin: 20, fontSize: 50, color: '#FF5800' }}>Yesterday</Text>
              <Text style={{ margin: 20, fontSize: 50, color: '#FF5800' }}>Today</Text>
              <Text style={{ margin: 20, fontSize: 50, color: '#FF5800' }}>Tomorrow</Text>
            </ScrollView>
          </View>
          <View style={{
            flexDirection: 'row', height: 150, backgroundColor: '#FFF1E8', margin: 20
          }}
          >
            <Tooltip
              isVisible={toolTip1}
              content={<Text>Step 1</Text>}
              placement="top"
              onClose={() => { toggleToolTip1(false); toggleToolTip2(true); }}
            >
              <View style={{
                flexDirection: 'row', height: 150, backgroundColor: '#FFF1E8', margin: 20
              }}
              >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100 }}>
                  <Image
                    source={require('../../assets/plate.png')}
                  />
                </View>
              </View>
            </Tooltip>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>You&apos;re not on a meal plan currently, but you can create one. </Text>
            </View>
          </View>
          <View style={{ backgroundColor: 'white' }}>
            <View>
              <Text style={{ color: '#FF5800', fontSize: 20 }}>Meals</Text>
            </View>
            {vessel.map((dish) => (
              <View
                key={dish.title}
                style={{
                  flexDirection: 'row', margin: 5, backgroundColor: dish.backgroundColor, height: 60
                }}
              >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100 }}>
                  <Image
                    source={dish.source}
                  />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                  <Text>{dish.title}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Tooltip
                    isVisible={dish.tooltip}
                    content={<Text>{dish.text}</Text>}
                    placement="top"
                    onClose={() => { dish.next(); }}
                  >
                    <TouchableOpacity onPress={() => navigation.navigate('Meal Plan 2')}>
                      <Image
                        source={require('../../assets/add.png')}
                      />
                    </TouchableOpacity>
                  </Tooltip>
                </View>
              </View>
            ))}
          </View>
        </View>
      )}
      {!status && (
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              viewabilityConfig={{
                itemVisiblePercentThreshold: 50
              }}
            >
              <Text style={{ margin: 20, fontSize: 50, color: '#FF5800' }}>Yesterday</Text>
              <Text style={{ margin: 20, fontSize: 50, color: '#FF5800' }}>Today</Text>
              <Text style={{ margin: 20, fontSize: 50, color: '#FF5800' }}>Tomorrow</Text>
            </ScrollView>
          </View>
          <View style={{
            flexDirection: 'row', height: 150, backgroundColor: '#FFF1E8', margin: 20
          }}
          >
            <View style={{ justifyContent: 'center', alignItems: 'center', width: 100 }}>
              <Image
                source={require('../../assets/plate.png')}
              />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>You&apos;re not on a meal plan currently, but you can create one. </Text>
            </View>
          </View>
          <View style={{ backgroundColor: 'white' }}>
            <View>
              <Text style={{ color: '#FF5800', fontSize: 20 }}>Meals</Text>
            </View>
            {vessel.map((dish) => (
              <View
                key={dish.title}
                style={{
                  flexDirection: 'row', margin: 5, backgroundColor: dish.backgroundColor, height: 60
                }}
              >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100 }}>
                  <Image
                    source={dish.source}
                  />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                  <Text>{dish.title}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => navigation.navigate('Meal Plan 2')}>
                    <Image
                      source={require('../../assets/add.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}

export default HomeScreen;
