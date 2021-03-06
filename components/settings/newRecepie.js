import React, { useState } from 'react';
import {
  Text, View, TextInput, ScrollView, Image, StyleSheet
} from 'react-native';
import { Button, Card } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';

function HomeScreen({ navigation }) {
  const list = [
    { key: 1, ingredient: 'Lorem Ipsum', quantity: 'Lorem Ipsum' },
    { key: 2, ingredient: 'Lorem Ipsum', quantity: 'Lorem Ipsum' },
    { key: 3, ingredient: 'Lorem Ipsum', quantity: 'Lorem Ipsum' },
    { key: 4, ingredient: 'Lorem Ipsum', quantity: 'Lorem Ipsum' },
    { key: 5, ingredient: 'Lorem Ipsum', quantity: 'Lorem Ipsum' },
    { key: 6, ingredient: 'Lorem Ipsum', quantity: 'Lorem Ipsum' },
    { key: 7, ingredient: 'Lorem Ipsum', quantity: 'Lorem Ipsum' },
    { key: 8, ingredient: 'Lorem Ipsum', quantity: 'Lorem Ipsum' },
    { key: 9, ingredient: 'Lorem Ipsum', quantity: 'Lorem Ipsum' },
    { key: 10, ingredient: 'Lorem Ipsum', quantity: 'Lorem Ipsum' },
    { key: 11, ingredient: 'Lorem Ipsum', quantity: 'Lorem Ipsum' },
    { key: 12, ingredient: 'Lorem Ipsum', quantity: 'Lorem Ipsum' },
  ];
  const [steps, toggleSteps] = useState({ first: true });
  const [instructions, inreaseInstructions] = useState([0]);
  const instruction = instructions;
  console.log('dasda', instruction);
  const [filePath, updateFilePath] = useState({ source: { uri: null } });
  const moreScreens = () => {
    const key = Math.random() * (100 - 1) + 1;
    let array = [...instructions];
    array = array.concat(key);
    inreaseInstructions(array);
  };
  const styles = StyleSheet.create({
    container: {
      height: 450,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  const chooseFile = () => {
    const options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      //   console.log('Response = ', response);

      if (response.didCancel) {
        // console.log('User cancelled image picker');
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        // this.setState({
        //   filePath: source,
        // });
        // console.log('---------------------------',source)
        // console.log('above')
        updateFilePath({ source });
      }
    });
  };
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{
        flex: 1, flexDirection: 'row', height: 150, backgroundColor: '#FFF1E8', margin: 20, borderWidth: 1, borderBottomColor: 'black'
      }}
      >
        {steps.first && (
          <Card
            containerStyle={{ }}
            title="Enter the name of the Recepie"
          >
            <ScrollView>
              <>
                <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 50 }}>
                  <TextInput
                    style={{ fontSize: 20 }}
                    placeholder="Type here"
                    editable
                  />
                </View>
                <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 20 }}>
                  <TextInput
                    style={{ fontSize: 20 }}
                    placeholder="Type here"
                    editable
                  />
                </View>
                <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 20 }}>
                  <TextInput
                    style={{ fontSize: 20 }}
                    placeholder="Type here"
                    editable
                  />
                </View>
                <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 20 }}>
                  <TextInput
                    style={{ fontSize: 20 }}
                    placeholder="Type here"
                    editable
                  />
                </View>
                <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 20 }}>
                  <TextInput
                    style={{ fontSize: 20 }}
                    placeholder="Type here"
                    editable
                  />
                </View>
                <View style={{
                  marginTop: 30, marginBottom: 50, justifyContent: 'flex-end', alignItems: 'center'
                }}
                >
                  <View style={{ width: 350 }}>
                    <Button
                      title="Next"
                      buttonStyle={{ backgroundColor: '#FF5800' }}
                      onPress={() => toggleSteps({ first: false, second: true })}
                    />
                  </View>
                </View>
              </>
            </ScrollView>
          </Card>
        )}
        {steps.second && (
          <Card
            containerStyle={{ }}
            title="Enter the Ingredients"
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
            >
              <>
                <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1 }}>
                  <TextInput
                    style={{ fontSize: 20 }}
                    placeholder="Type here"
                    editable
                  />
                </View>
                <View style={styles.container}>
                  <View style={styles.container}>
                    {/* <Image
                                source={{ uri: this.state.filePath.path}}
                                style={{width: 100, height: 100}} /> */}
                    <Image
                      source={{ uri: filePath.source.uri }}
                      style={{ width: 250, height: 250, marginBottom: 50 }}
                    />
                    <Button
                      title="Choose File"
                      buttonStyle={{ backgroundColor: '#FF5800', width: 150 }}
                      onPress={chooseFile}
                    />
                  </View>
                </View>
                <View style={{
                  flexDirection: 'row', marginBottom: 50, justifyContent: 'flex-end', alignItems: 'center'
                }}
                >
                  <View style={{ width: 150, margin: 10 }}>
                    <Button
                      title="Back"
                      buttonStyle={{ backgroundColor: '#FF5800' }}
                      onPress={() => toggleSteps({ first: true, second: false })}
                    />
                  </View>
                  <View style={{ width: 150, margin: 10 }}>
                    <Button
                      title="Next"
                      buttonStyle={{ backgroundColor: '#FF5800' }}
                      onPress={() => toggleSteps({ second: false, third: true })}
                    />
                  </View>
                </View>
              </>
            </ScrollView>
          </Card>
        )}
        {steps.third && (
          <Card
            containerStyle={{ }}
            title="Enter Instructions"
          >
            <>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {instruction.map((itr) => (
                  <View key={itr} style={{ flexDirection: 'column', height: 500 }}>
                    <View style={{
                      borderBottomColor: '#000000', justifyContent: 'center', borderBottomWidth: 1, width: 250
                    }}
                    >
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ margin: 5 }}>
                <Text>Enter a detailed instruction below</Text>
              </View>
                        <View style={{ margin: 5 }}>
                <Button
          title="More"
          buttonStyle={{ backgroundColor: '#FF5800', width: 80 }}
          onPress={() => moreScreens()}
        />
              </View>
                      </View>
                      <TextInput
                        style={{ fontSize: 20, width: 100 }}
                        placeholder="Type here"
                        editable
                      />
                    </View>
                    <View style={styles.container}>
                      <View style={styles.container}>
                        {/* <Image
                                        source={{ uri: this.state.filePath.path}}
                                        style={{width: 100, height: 100}} /> */}
                        <Image
                source={{ uri: filePath.source.uri }}
                style={{
          width: 250, height: 250, marginLeft: 50, marginRight: 50
        }}
              />
                        <Button
                title="Choose File"
                buttonStyle={{ backgroundColor: '#FF5800', width: 150, marginTop: 50 }}
                onPress={chooseFile}
              />
                      </View>
                    </View>
                  </View>
                ))}
              </ScrollView>
              <View style={{
                flexDirection: 'row', marginBottom: 50, justifyContent: 'flex-end', alignItems: 'center'
              }}
              >
                <View style={{ width: 150, margin: 10 }}>
                  <Button
                    title="Back"
                    buttonStyle={{ backgroundColor: '#FF5800' }}
                    onPress={() => toggleSteps({ second: true, third: false })}
                  />
                </View>
                <View style={{ width: 150, margin: 10 }}>
                  <Button
                    title="Next"
                    buttonStyle={{ backgroundColor: '#FF5800' }}
                    onPress={() => toggleSteps({ third: false, fourth: true })}
                  />
                </View>
              </View>
            </>
          </Card>
        )}
        {steps.fourth && (
          <Card
            containerStyle={{ }}
            title="Final Dish"
          >
            {/* <ScrollView
                        showsVerticalScrollIndicator={false}
                    > */}
            <>
              <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1 }}>
                <Text style={{ marginBottom: 10 }}>Final Thoughts</Text>
                <TextInput
                  style={{ fontSize: 20 }}
                  placeholder="Type here"
                  editable
                />
              </View>
              <View style={styles.container}>
                <View style={styles.container}>
                  <Image
                    source={{ uri: filePath.source.uri }}
                    style={{
                      width: 200, height: 200, marginLeft: 50, marginRight: 50
                    }}
                  />
                  <Button
                    title="Choose File"
                    buttonStyle={{ backgroundColor: '#FF5800', width: 150, marginTop: 50 }}
                    onPress={chooseFile}
                  />
                </View>
              </View>
              <View style={{
                flexDirection: 'row', marginBottom: 50, justifyContent: 'center', alignItems: 'center'
              }}
              >
                <View style={{ width: 150, margin: 10 }}>
                  <Button
                    title="Back"
                    buttonStyle={{ backgroundColor: '#FF5800' }}
                    onPress={() => toggleSteps({ fourth: false, third: true })}
                  />
                </View>
                <View style={{ width: 150, margin: 10 }}>
                  <Button
                    title="Next"
                    buttonStyle={{ backgroundColor: '#FF5800' }}
                    onPress={() => toggleSteps({ fourth: false, fifth: true })}
                  />
                </View>
              </View>
            </>
            {/* </ScrollView> */}
          </Card>
        )}
        {steps.fifth && (
          <Card
            containerStyle={{ }}
            title="Recipe Summary"
          >
            {/* <ScrollView
                        showsVerticalScrollIndicator={false}
                    > */}
            <>
              <View style={styles.container}>
                <View style={styles.container}>
                  {/* <Image
                                source={{ uri: this.state.filePath.path}}
                                style={{width: 100, height: 100}} /> */}
                  <Image
                    source={{ uri: filePath.source.uri }}
                    style={{ width: 200, height: 200, margin: 50 }}
                  />
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Ingredients Details</Text>
                  <View style={{ height: 150, margin: 10 }}>

                    <ScrollView
                      showsVerticalScrollIndicator={false}
                    >
                      {list.map((item) => (
                        <Text style={{ margin: 5 }} key={item.key}>
                {'\u2B24'}
                {' '}
                {item.ingredient}
                {' '}
                {item.quantity}
              </Text>
                      ))}
                    </ScrollView>
                  </View>
                </View>
              </View>
              <View style={{
                marginTop: 50, flexDirection: 'row', marginBottom: 50, justifyContent: 'flex-end', alignItems: 'center'
              }}
              >
                <View style={{ width: 150, margin: 10 }}>
                  <Button
                    title="Back"
                    buttonStyle={{ backgroundColor: '#FF5800' }}
                    onPress={() => toggleSteps({ fifth: false, fourth: true })}
                  />
                </View>
                <View style={{ width: 150, margin: 10 }}>
                  <Button
                    title="Share"
                    buttonStyle={{ backgroundColor: '#FF5800' }}
                    onPress={() => { alert('Shared'), navigation.navigate('Settings Layout'); }}
                  />
                </View>
              </View>
            </>
            {/* </ScrollView> */}
          </Card>
        )}
      </View>
    </View>
  );
}

export default HomeScreen;
