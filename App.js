import * as React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen1 from './components/MeanPlanner/1.js';
import HomeScreen2 from './components/MeanPlanner/2.js';
import HomeScreen3 from './components/MeanPlanner/3.js';
import HomeScreen4 from './components/MeanPlanner/4.js';
import HomeScreen5 from './components/MeanPlanner/5.js';
import HomeScreen6 from './components/MeanPlanner/6.js';


function Exit() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Exit!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Meal Plan"
        component={HomeScreen6}
        options={{
          headerTitleStyle: { alignSelf: 'center', color: '#FF5800' },
          
        }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}