import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import bluetooth from './components/settings/bluetooth';
import pantryEmpty from './components/pantry/pantryEmpty';
import pantryFull from './components/pantry/pantryFull';
import shoppingList from './components/pantry/shoppingList';
import HomeScreen1 from './components/MeanPlanner/1.js';
import HomeScreen2 from './components/MeanPlanner/2.js';
import HomeScreen3 from './components/MeanPlanner/3.js';
import HomeScreen4 from './components/MeanPlanner/4.js';
import HomeScreen5 from './components/MeanPlanner/5.js';
import HomeScreen6 from './components/MeanPlanner/6.js';

function Home() {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Meal Plan 1"
        component={HomeScreen1}
        options={{
          headerTitleStyle: { alignSelf: 'center', color: '#FF5800' },
          
        }}
      />
      <Stack.Screen
        name="Meal Plan 2"
        component={HomeScreen2}
        options={{
          headerTitleStyle: { alignSelf: 'center', color: '#FF5800' },
          
        }}
      />
      <Stack.Screen
        name="Meal Plan 3"
        component={HomeScreen3}
        options={{
          headerTitleStyle: { alignSelf: 'center', color: '#FF5800' },
          
        }}
      />
      <Stack.Screen
        name="Meal Plan 4"
        component={HomeScreen4}
        options={{
          headerTitleStyle: { alignSelf: 'center', color: '#FF5800' },
          
        }}
      />
      <Stack.Screen
        name="Meal Plan 5"
        component={HomeScreen5}
        options={{
          headerTitleStyle: { alignSelf: 'center', color: '#FF5800' },
          
        }}
      />
      <Stack.Screen
        name="Meal Plan 6"
        component={HomeScreen6}
        options={{
          headerTitleStyle: { alignSelf: 'center', color: '#FF5800' },
          
        }}
      />
    </Stack.Navigator>
  )
}

function Pantry() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pantry"
        component={shoppingList}
      />
    </Stack.Navigator>
  );
}

function SettingsScreen() {
  return (
      <Stack.Navigator>
        <Stack.Screen
        name="Bluetooth Pairing"
        component={bluetooth}
        />
      </Stack.Navigator>
  );
}

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="black"
        headerTitleStyle={{ height: 10 }}
        barStyle={{ height: 50, backgroundColor: "#FF5800", alignContent: "center", alignItems: "center" }}
      >
        <Tab.Screen 
          name="Home"
          component={Home}
          options={{
            tabBarLabel: <Text style={{ fontSize: 15, fontWeight: "bold" }}>Home</Text>
          }}
        />
        <Tab.Screen 
          name="Pantry"
          component={Pantry}
          options={{
            tabBarLabel: <Text style={{ fontSize: 15, fontWeight: "bold" }}>Pantry</Text>
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: <Text style={{ fontSize: 15, fontWeight: "bold" }}>Settings</Text>
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}