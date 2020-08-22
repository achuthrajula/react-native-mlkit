import React, { useState } from 'react';
import {
  View, Text, Image, ScrollView, TouchableOpacity
} from 'react-native';
import { Dialog } from 'react-native-material-ui';
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function settingsLayout({ navigation }) {
  const [ham, toggleHam] = useState(false);
  const userInsights = [['Recepies', 100], ['Followers', 290], ['Following', 20]];
  function hamburger() {
    return (
      <Button
        icon={(
          <Icon
            style={{ width: 25, height: 25 }}
            name="bars"
            size={20}
            color="white"
          />
                  )}
        buttonStyle={{ backgroundColor: '#FF5800' }}
        onPress={() => toggleHam(true)}
      />
    );
  }
  return (
    <View style={{ flexDirection: 'column', height: 20 }}>
      <View>
        <Header
          backgroundColor="#FF5800"
          containerStyle={{ height: 60 }}
          rightContainerStyle={{ marginBottom: 15 }}
          centerContainerStyle={{ marginBottom: 15 }}
          centerComponent={{ text: 'User Profile', style: { color: '#fff', fontSize: 20 } }}
          rightComponent={{ icon: 'menu', color: '#fff' }, hamburger()}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          {ham && (
            <Dialog style={{ }}>
              <Dialog.Content>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
                  <View style={{ margin: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Button
                      title="Change Password"
                      titleStyle={{ color: 'black' }}
                      buttonStyle={{ backgroundColor: 'white', width: 250 }}
                      onPress={() => toggleHam(false)}
                    />
                  </View>
                  <View style={{ margin: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Button
                      title="Share my Profile"
                      titleStyle={{ color: 'black' }}
                      buttonStyle={{ backgroundColor: 'white', width: 250 }}
                      onPress={() => toggleHam(false)}
                    />
                  </View>
                  <View style={{ margin: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Button
                      title="Delete my Account"
                      titleStyle={{ color: 'black' }}
                      buttonStyle={{ backgroundColor: 'white', width: 250 }}
                      onPress={() => toggleHam(false)}
                    />
                  </View>
                </View>
              </Dialog.Content>
            </Dialog>
          )}
        </View>
      </View>
      <View style={{ flexDirection: 'column', margin: 20, height: 250 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
          <Image
            style={{
              height: 120, width: 120, borderRadius: 60, borderWidth: 1, borderColor: '#FF5800'
            }}
            source={require('../../assets/women.png')}
          />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>Anatasia White</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          {userInsights.map((insight) => (
            <View
              key={insight[1]}
              style={{
                margin: 10, flexDirection: 'column', alignContent: 'center', justifyContent: 'center'
              }}
            >
              <View style={{ alignContent: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>{insight[1]}</Text>
              </View>
              <View style={{ alignContent: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>{insight[0]}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            title="Edit Profile"
            titleStyle={{ color: '#FF5800' }}
            buttonStyle={{
              backgroundColor: 'white', borderWidth: 1, borderColor: '#FF5800', width: 150
            }}
          />
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 400 }}>
        <ScrollView>
          <View style={{ flexDirection: 'column', margin: 5, height: 300 }}>
            <View style={{
              flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
            }}
            >
              <Text style={{ fontSize: 20, fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>
                All Recepies
                {'>'}
              </Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <TouchableOpacity onPress={() => navigation.navigate('Meal Plan 2')}>
                <Image
                  source={require('../../assets/add.png')}
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              viewabilityConfig={{
                itemVisiblePercentThreshold: 50
              }}
            >
              <View style={{ flexDirection: 'column' }}>
                <View>
                  <Image
                    style={{ margin: 10 }}
                    source={require('../../assets/noodles.png')}
                  />
                </View>
                <View style={{
                  flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
                }}
                >
                  <Text style={{ fontSize: 20, fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>Tasty Lasagna (Riku Compatible)</Text>
                </View>
                <View style={{
                  margin: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
                }}
                >
                  <View style={{
                    flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
                  }}
                  >
                    <Text style={{ fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>
                        {'\u2B24'}
                        15 min
                      </Text>
                  </View>
                  <View style={{
                    flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
                  }}
                  >
                    <Text style={{ fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>
                        {'\u2B24'}
                        7 Ingredients
                      </Text>
                  </View>
                  <View style={{
                    flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
                  }}
                  >
                    <Text style={{ fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>
                        {'\u2B24'}
                        1k Cals
                      </Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <View>
                  <Image
                    style={{ margin: 10 }}
                    source={require('../../assets/curry.png')}
                  />
                </View>
                <View style={{
                  flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
                }}
                >
                  <Text style={{ fontSize: 20, fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>Batata Recipe</Text>
                </View>
                <View style={{
                  margin: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
                }}
                >
                  <View style={{
                    flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
                  }}
                  >
                    <Text style={{ fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>
                        {'\u2B24'}
                        15 min
                      </Text>
                  </View>
                  <View style={{
                    flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
                  }}
                  >
                    <Text style={{ fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>
                        {'\u2B24'}
                        7 Ingredients
                      </Text>
                  </View>
                  <View style={{
                    flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
                  }}
                  >
                    <Text style={{ fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>
                        {'\u2B24'}
                        1k Cals
                      </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={{
            flexDirection: 'column', margin: 5, height: 300, marginTop: 10
          }}
          >
            <View style={{
              flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
            }}
            >
              <Text style={{ fontSize: 20, fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>Riku Recepies</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <TouchableOpacity onPress={() => navigation.navigate('Meal Plan 2')}>
                <Image
                  source={require('../../assets/add.png')}
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              viewabilityConfig={{
                itemVisiblePercentThreshold: 50
              }}
            >
              <View style={{ flexDirection: 'column' }}>
                <View>
                  <Image
                    style={{ margin: 10 }}
                    source={require('../../assets/noodles.png')}
                  />
                </View>
                <View style={{
                  flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
                }}
                >
                  <Text style={{ fontSize: 20, fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>Tasty Lasagna (Riku Compatible)</Text>
                </View>
                <View style={{
                  margin: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
                }}
                >
                  <View style={{
                    flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
                  }}
                  >
                    <Text style={{ fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>
                        {'\u2B24'}
                        15 min
                      </Text>
                  </View>
                  <View style={{
                    flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
                  }}
                  >
                    <Text style={{ fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>
                        {'\u2B24'}
                        7 Ingredients
                      </Text>
                  </View>
                  <View style={{
                    flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
                  }}
                  >
                    <Text style={{ fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>
                        {'\u2B24'}
                        1k Cals
                      </Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <View>
                  <Image
                    style={{ margin: 10 }}
                    source={require('../../assets/curry.png')}
                  />
                </View>
                <View style={{
                  flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
                }}
                >
                  <Text style={{ fontSize: 20, fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>Batata Recipe</Text>
                </View>
                <View style={{
                  margin: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
                }}
                >
                  <View style={{
                    flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
                  }}
                  >
                    <Text style={{ fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>
                        {'\u2B24'}
                        15 min
                      </Text>
                  </View>
                  <View style={{
                    flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
                  }}
                  >
                    <Text style={{ fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>
                        {'\u2B24'}
                        7 Ingredients
                      </Text>
                  </View>
                  <View style={{
                    flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10
                  }}
                  >
                    <Text style={{ fontFamily: 'Palatino Linotype', fontWeight: 'bold' }}>
                        {'\u2B24'}
                        1k Cals
                      </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={{
            margin: 20, justifyContent: 'center', alignItems: 'center', height: 200
          }}
          >
            <Button
              title="Done"
              buttonStyle={{ backgroundColor: '#FF5800', width: 250 }}
              onPress={() => navigation.navigate('Settings Layout')}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default settingsLayout;
