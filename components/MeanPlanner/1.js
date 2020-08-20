import React, { useState } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-material-ui';
import Tooltip from 'react-native-walkthrough-tooltip';

function HomeScreen({ navigation }) {
  const [toolTipVisible, setToolTipVisible] = useState(true);
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Tooltip
            isVisible={toolTipVisible}
            content={<Text>Check this out!</Text>}
            placement="top"
            onClose={() => setToolTipVisible(false)}
          >
            <TouchableHighlight>
              <Text>Press me</Text>
            </TouchableHighlight>
          </Tooltip>
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
          <Tooltip
            isVisible={toolTipVisible}
            content={<Text>Check this out!</Text>}
            placement="top"
            onClose={() => setToolTipVisible(false)}
          >
            <Button 
              raised
              primary 
              text="Create a Meal Plan"
              style={{ text: {  }, container: { marginBottom: 20, backgroundColor: "#FF5800" } }}
              onPress={() => navigation.navigate('Meal Plan 3')}
            />
            </Tooltip>
          </View>
        </View>
      </View>
    );
  }

export default HomeScreen;