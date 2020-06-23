import * as React from 'react';
import { Text, View, Image, Button, ScrollView } from 'react-native';

function HomeScreen() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                    style={{ flex: 1 }}
                    source={require('../../assets/noodles.png')}
                />
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: -10 }}>
                <View style={{ marginBottom: 20, width: 200 }}>
                    <Button 
                        title="Create a Meal Plan"
                        color="#FF5800"
                    />
                </View>
                <Text style={{ fontSize: 40 }}>Veg Noodles</Text>
            </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <View style={{ marginBottom: 20, width: 200 }}>
            <Button 
              title="Done"
              color="#FF5800"
              style={{ marginButtom: 20 }}
            />
          </View>
        </View>
    </View>
    );
  }

export default HomeScreen;