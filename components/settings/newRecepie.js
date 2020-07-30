import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


function HomeScreen({ navigation }) {
    const [steps, toggleSteps] = useState({ first: true })
    return (
      <View style={{ flex: 1, flexDirection: 'column'}}>
        <View style={{ flex: 1, flexDirection: 'row', height: 150, backgroundColor: "#FFF1E8", margin: 20, borderWidth: 1, borderBottomColor: 'black' }}>
            {steps.first && <Card
                containerStyle={{  }}
                title='Enter the name of the Recepie'>
                    <ScrollView>
                    <React.Fragment>
            <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 50}}>
                <TextInput
                    style={{ fontSize: 20 }} 
                    placeholder="Type here"
                    editable
                />
            </View>
            <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 20}}>
                <TextInput
                    style={{ fontSize: 20 }}
                    placeholder="Type here"
                    editable
                />
            </View>
            <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 20}}>
                <TextInput
                    style={{ fontSize: 20 }}
                    placeholder="Type here"
                    editable
                />
            </View>
            <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 20}}>
                <TextInput
                    style={{ fontSize: 20 }}
                    placeholder="Type here"
                    editable
                />
            </View>
            <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 20}}>
                <TextInput
                    style={{ fontSize: 20 }}
                    placeholder="Type here"
                    editable
                />
            </View>
            
            <View style={{ marginTop: 30, marginBottom: 50, justifyContent: 'flex-end', alignItems: 'center' }}>
                <View style={{ width: 300 }} >
                    <Button
                        title="Next"
                        buttonStyle={{ backgroundColor: "#FF5800" }}
                        onPress={() => toggleSteps({ first: false, second: true })}
                    />
                </View>
            </View>
          </React.Fragment>
          </ScrollView>
            </Card>}
            {steps.second && <Card
                containerStyle={{  }}
                title='Enter the Ingredients'>
                    <ScrollView>
                    <React.Fragment>
            <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 50}}>
                <TextInput
                    style={{ fontSize: 20 }} 
                    placeholder="Type here"
                    editable
                />
            </View>
            <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 20}}>
                <TextInput
                    style={{ fontSize: 20 }}
                    placeholder="Type here"
                    editable
                />
            </View>
            <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 20}}>
                <TextInput
                    style={{ fontSize: 20 }}
                    placeholder="Type here"
                    editable
                />
            </View>
            <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 20}}>
                <TextInput
                    style={{ fontSize: 20 }}
                    placeholder="Type here"
                    editable
                />
            </View>
            <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 20}}>
                <TextInput
                    style={{ fontSize: 20 }}
                    placeholder="Type here"
                    editable
                />
            </View>
            
            <View style={{ marginTop: 30, flexDirection: 'row', marginBottom: 50, justifyContent: 'flex-end', alignItems: 'center' }}>
                <View style={{ width: 150, margin: 10 }} >
                    <Button
                        title="Back"
                        buttonStyle={{ backgroundColor: "#FF5800" }}
                        onPress={() => toggleSteps({ first: true, second: false })}
                    />
                </View>
                <View style={{ width: 150, margin: 10 }} >
                    <Button
                        title="Next"
                        buttonStyle={{ backgroundColor: "#FF5800" }}
                        onPress={() => toggleSteps({ second: false, third: true })}
                    />
                </View>
            </View>
          </React.Fragment>
          </ScrollView>
            </Card>}
            {steps.third && <Card
                containerStyle={{  }}
                title='Third'
                image={require('../../assets/women.png')}>
                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <View style={{ justifyContent:"flex-end" }}>

                </View>
                <View style={{  }} >
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        text='VIEW NOW'
                        onPress={() => toggleSteps({ third: false, fourth: true })} 
                    />
                </View>
            </Card>}
            {steps.fourth && <Card
                containerStyle={{  }}
                title='Fourth'
                image={require('../../assets/women.png')}>
                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <View style={{ justifyContent:"flex-end" }}>

                </View>
                <View style={{  }} >
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        text='VIEW NOW'
                        onPress={() => toggleSteps({ fourth: false, fifth: true })} 
                    />
                </View>
            </Card>}
            {steps.fifth && <Card
                containerStyle={{  }}
                title='Fifth'
                image={require('../../assets/women.png')}>
                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <View style={{ justifyContent:"flex-end" }}>

                </View>
                <View style={{  }} >
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        text='VIEW NOW'
                        onPress={() => toggleSteps({ fifth: false, sixth: true })} 
                    />
                </View>
            </Card>}
            {steps.sixth && <Card
                containerStyle={{  }}
                title='Sixth'
                image={require('../../assets/women.png')}>
                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <View style={{ justifyContent:"flex-end" }}>

                </View>
                <View style={{  }} >
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        text='VIEW NOW'
                        onPress={() => toggleSteps({ sixth: false, first: true })} 
                    />
                </View>
            </Card>}
        </View>
      </View>
    );
  }

export default HomeScreen;