import * as React from 'react';
import { Text, View, Image, Button } from 'react-native';

function HomeScreen({ navigation }) {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{ flexDirection: 'row', height: 150, backgroundColor: "#FFF1E8", margin: 20 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center',  width: 100 }}>
            <Image
            source={require('../../assets/plate.png')}
          />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>You're not on a meal plan currently, but you can create one. </Text>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <View style={{ marginBottom: 20, width: 200 }}>
            <Button 
              title="Create a Meal Plan"
              color="#FF5800"
              style={{ marginButtom: 20 }}
              onPress={() => navigation.navigate('Meal Plan 3')}
            />
          </View>
        </View>
      </View>
    );
  }

export default HomeScreen;