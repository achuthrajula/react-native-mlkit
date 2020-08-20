import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-native-calendars';
import { Button } from 'react-native-material-ui';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Dialog } from 'react-native-material-ui';
import { RadioButton } from 'react-native-paper';
import Modal from 'react-native-modal';
import { cos } from 'react-native-reanimated';

function HomeScreen({ navigation }) {
    const [options, toggleOptions] = useState(false)
    const [options2, toggleOptions2] = useState(false)
    const [options3, toggleOptions3] = useState(false)
    const [breakfastSchedule, updateBreakfastSchedule] = useState(false)
    const [lunchSchedule, updateLunchSchedule] = useState(false)
    const [dinnerSchedule, updateDinnerSchedule] = useState(false)
    const [currentMeal, updateCurrentMeal] = useState()
    const [date, updateDate] = useState()
    const [breakfast, setBreakfast] = React.useState(false);
    const [lunch, setLunch] = React.useState(false);
    const [dinner, setDinner] = React.useState(false);
    const [schedule, updateSchedule] = useState({})
    const [meals, updateMeals] = useState()
    const scheduleGenerator = () => {
        let array = ['breakfast','lunch','dinner']
        let size = [1,2,3]
        const n = Math.floor(Math.random() * size.length+1);
        let random = array.sort(() => .5 - Math.random()).slice(0,n)
        return random
    }
    const scheduleWeek = () => {
        let curr = new Date(); // today's date is: 19th April 2020
        let week = []
        let weekSchedule = {}
        for (let i = 1; i <= 7; i++) {
            let dow = curr.getDay();
            if (!dow) dow = 7;
            let first = curr.getDate() - dow + i;
            let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
            week.push(day);
            // weekSchedule[day] = ''
        }
        week.map((day) => {
            weekSchedule[day] = {
                'breakfast': scheduleGenerator(),
                'lunch': scheduleGenerator(),
                'dinner': scheduleGenerator()
            }
        })
        let prevSchedule = schedule
        let newSchedule = Object.assign(prevSchedule, weekSchedule)
        console.log(newSchedule)
    }
    useEffect(() => {
        let prevSchedule = schedule;
        if (!(date && prevSchedule.hasOwnProperty(date))) prevSchedule[date] = {}

            prevSchedule[date][currentMeal] = meals
            updateSchedule({...prevSchedule})
            console.log(schedule)
        
    }, [meals]); //
    const updateToSelectedDate = (data) => {
        // let prevSchedule = schedule;
        // prevSchedule[date] = {}
        // updateSchedule({...prevSchedule})
        updateDate(data.dateString)
        console.log(schedule)
    }
    const addToBreakfast = () => {
        console.log('breakfast')
        let totalList = Object();
        let list = []
        if ( breakfast == true) list.push('Breakfast')
        if ( lunch == true ) list.push('Lunch')
        if ( dinner == true ) list.push('Dinner')
        totalList['breakfast'] = list
        updateCurrentMeal('breakfast')
        updateMeals(list)
        toggleOptions(false)
    }
    const addToLunch = () => {
        console.log('lunch')
        let totalList = Object();
        let list = []
        if ( breakfast == true) list.push('Breakfast')
        if ( lunch == true ) list.push('Lunch')
        if ( dinner == true ) list.push('Dinner')
        totalList['lunch'] = list
        updateCurrentMeal('lunch')
        updateMeals(list)
        toggleOptions2(false)
    }
    const addToDinner = () => {
        console.log('dinner')
        let totalList = Object();
        let list = []
        if ( breakfast == true) list.push('Breakfast')
        if ( lunch == true ) list.push('Lunch')
        if ( dinner == true ) list.push('Dinner')
        totalList['dinner'] = list
        updateCurrentMeal('dinner')
        updateMeals(list)
        toggleOptions3(false)
    }
    const vessel = [
        {title: "Breakfast", backgroundColor: "#FFE50061", source: require('../../assets/breakfast.png'), status: () => updateBreakfastSchedule(!breakfastSchedule)},
        {title: "Lunch", backgroundColor: "#FFEB3BB3", source: require("../../assets/lunch.png"), status: () => updateLunchSchedule(!lunchSchedule)},
        {title: "Dinner", backgroundColor: "#FFA45ECC", source: require("../../assets/dinner.png"), status: () => updateDinnerSchedule(!dinnerSchedule)}/*, {title: "Snacks", backgroundColor: "#FFB38BCC", source: require("../../assets/snacks.png")}, {title: "Salads", backgroundColor: "#CAFF95", source: require("../../assets/salads.png")}*/
    ]
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
            <Calendar
                onDayPress={(day) => updateToSelectedDate(day)}
            />
        <View style={{ backgroundColor: "white", marginBottom: 100 }}> 
            <View style={{ flexDirection: "row" }}>
                <View style={{ margin: 10 }}>
                    <Text style={{ color: "#FF5800", fontSize: 20, fontWeight: "bold" }}>Meals</Text>
                </View>
                <View style={{ marginLeft: 'auto' }}>
                    <Button 
                        raised
                        primary 
                        text="Schedule for a week"
                        style={{ text: {  }, container: { marginBottom: 20, backgroundColor: "#FF5800" } }}
                        onPress={() => scheduleWeek()}
                    />
                </View>
            </View>
            <ScrollView>
                <View style={{ flex: 1, marginBottom: 300 }}>
            <View >
                <View style={{ flexDirection: 'row', margin: 5, backgroundColor: "#FFE50061", height: 60 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center',  width: 100 }}>
                    <Image 
                        source={require('../../assets/breakfast.png')}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Text>Breakfast</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() =>  toggleOptions(true)}>
                    {/* <TouchableOpacity onPress={() =>  navigation.navigate('Meal Plan 4')}> */}
                        <Image 
                            source={require('../../assets/add.png')}
                        />
                        <Modal isVisible={options} style={{ backgroundColor: 'white'}} coverScreen={true}>
                            <View style={{ margin: 50 }}>
                                <View style={{ flexDirection: 'row', height: 60 }}>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                        <Text>Breakfast</Text>
                                    </View>
                                    <View style={{justifyContent: 'center', alignItems: 'center' }}>
                                        <RadioButton
                                            value="breakfast"
                                            status={ breakfast == true ? 'checked' : 'unchecked' }
                                            onPress={() => setBreakfast(!breakfast)}
                                        />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', height: 60 }}>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                        <Text>Lunch</Text>
                                    </View>
                                    <View style={{justifyContent: 'center', alignItems: 'center' }}>
                                        <RadioButton
                                            value="lunch"
                                            status={ lunch == true ? 'checked' : 'unchecked' }
                                            onPress={() => setLunch(!lunch)}
                                        />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', height: 60 }}>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                        <Text>Dinner</Text>
                                    </View>
                                    <View style={{justifyContent: 'center', alignItems: 'center' }}>
                                        <RadioButton
                                            value="dinner"
                                            status={ dinner == true ? 'checked' : 'unchecked' }
                                            onPress={() => setDinner(!dinner)}
                                        />
                                    </View>
                                </View>
                                <View style={{justifyContent: 'center', alignItems: 'center' }}>
                                    <Button 
                                        text="Done" 
                                        onPress={() =>  addToBreakfast()}
                                        style={{ text: { color: 'white' }, container: { width: "50%", marginBottom: 20, backgroundColor: "#FF5800" } }}
                                    />
                                </View>
                            </View>
                        </Modal>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => updateBreakfastSchedule(!breakfastSchedule)}>
                        <Image 
                            source={require('../../assets/drop.png')}
                        />
                    </TouchableOpacity>
                </View>
                </View>
                {breakfastSchedule && <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <Dialog style={{ width: 200, height: 200 }}>
                    <Dialog.Title><Text style={{ fontWeight: "bold" }}>Breakfast</Text></Dialog.Title>
                    <Dialog.Content>
                    <View style={{ flexDirection: 'row', height: 60 }}>
                            <View style={{ flexDirection: 'column', height: 60 }}>
                                {!(date && schedule.hasOwnProperty(date))
                                ? <Text>No schedule</Text>
                                : (schedule[date].hasOwnProperty('breakfast')
                                ? schedule[date]['breakfast'].map((item) => {
                                    return(
                                        <View key={item} style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                            <Text>{'\u2B24'} <Text style={{ fontSize: 15 }}> {item}</Text></Text>
                                        </View>
                                    )
                                })
                                : <Text>No schedule</Text>)
                                }
                            </View>
                        </View>
                    </Dialog.Content>
                </Dialog>
            </View>}
                </View>
                <View>
                    <View style={{ flexDirection: 'row', margin: 5, backgroundColor: "#FFEB3BB3", height: 60 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center',  width: 100 }}>
                        <Image 
                            source={require('../../assets/lunch.png')}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text>Lunch</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() =>  toggleOptions2(true)}>
                            <Image 
                                source={require('../../assets/add.png')}
                            />
                             <Modal isVisible={options2} style={{ backgroundColor: 'pink'}} coverScreen={true}>
                                <View style={{ margin: 50 }}>
                                    <View style={{ flexDirection: 'row', height: 60 }}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                            <Text>Breakfast</Text>
                                        </View>
                                        <View style={{justifyContent: 'center', alignItems: 'center' }}>
                                            <RadioButton
                                                value="breakfast"
                                                status={ breakfast == true ? 'checked' : 'unchecked' }
                                                onPress={() => setBreakfast(!breakfast)}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', height: 60 }}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                            <Text>Lunch</Text>
                                        </View>
                                        <View style={{justifyContent: 'center', alignItems: 'center' }}>
                                            <RadioButton
                                                value="lunch"
                                                status={ lunch == true ? 'checked' : 'unchecked' }
                                                onPress={() => setLunch(!lunch)}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', height: 60 }}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                            <Text>Dinner</Text>
                                        </View>
                                        <View style={{justifyContent: 'center', alignItems: 'center' }}>
                                            <RadioButton
                                                value="dinner"
                                                status={ dinner == true ? 'checked' : 'unchecked' }
                                                onPress={() => setDinner(!dinner)}
                                            />
                                        </View>
                                    </View>
                                    <View style={{justifyContent: 'center', alignItems: 'center' }}>
                                        <Button 
                                            text="Done" 
                                            onPress={() =>  addToLunch()}
                                            style={{ text: { color: 'white' }, container: { width: "50%", marginBottom: 20, backgroundColor: "#FF5800" } }}
                                        />
                                    </View>
                                </View>
                            </Modal>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => updateLunchSchedule(!lunchSchedule)}>
                            <Image 
                                source={require('../../assets/drop.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    </View>
                    {lunchSchedule && <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <Dialog style={{ width: 200, height: 200 }}>
                        <Dialog.Title><Text style={{ fontWeight: "bold" }}>Lunch</Text></Dialog.Title>
                        <Dialog.Content>
                        <View style={{ flexDirection: 'row', height: 60 }}>
                            <View style={{ flexDirection: 'column', height: 60 }}>
                                {!(date && schedule.hasOwnProperty(date))
                                ? <Text>No schedule</Text>
                                : (schedule[date].hasOwnProperty('lunch')
                                ? schedule[date]['lunch'].map((item) => {
                                    return(
                                        <View key={item} style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                            <Text>{'\u2B24'} <Text style={{ fontSize: 15 }}> {item}</Text></Text>
                                        </View>
                                    )
                                })
                                : <Text>No schedule</Text>)
                                }
                            </View>
                        </View>
                    </Dialog.Content>
                    </Dialog>
                </View>}
                    </View>
                    <View>
                    <View style={{ flexDirection: 'row', margin: 5, backgroundColor: "#FFA45ECC", height: 60 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center',  width: 100 }}>
                        <Image 
                            source={require('../../assets/dinner.png')}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text>Dinner</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() =>  toggleOptions3(true)}>
                            <Image 
                                source={require('../../assets/add.png')}
                            />
                             <Modal isVisible={options3} style={{ backgroundColor: 'green'}} coverScreen={true}>
                                <View style={{ margin: 50 }}>
                                    <View style={{ flexDirection: 'row', height: 60 }}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                            <Text>Breakfast</Text>
                                        </View>
                                        <View style={{justifyContent: 'center', alignItems: 'center' }}>
                                            <RadioButton
                                                value="breakfast"
                                                status={ breakfast == true ? 'checked' : 'unchecked' }
                                                onPress={() => setBreakfast(!breakfast)}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', height: 60 }}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                            <Text>Lunch</Text>
                                        </View>
                                        <View style={{justifyContent: 'center', alignItems: 'center' }}>
                                            <RadioButton
                                                value="lunch"
                                                status={ lunch == true ? 'checked' : 'unchecked' }
                                                onPress={() => setLunch(!lunch)}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', height: 60 }}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                            <Text>Dinner</Text>
                                        </View>
                                        <View style={{justifyContent: 'center', alignItems: 'center' }}>
                                            <RadioButton
                                                value="dinner"
                                                status={ dinner == true ? 'checked' : 'unchecked' }
                                                onPress={() => setDinner(!dinner)}
                                            />
                                        </View>
                                    </View>
                                    <View style={{justifyContent: 'center', alignItems: 'center' }}>
                                        <Button 
                                            text="Done" 
                                            onPress={() =>  addToDinner()}
                                            style={{ text: { color: 'white' }, container: { width: "50%", marginBottom: 20, backgroundColor: "#FF5800" } }}
                                        />
                                    </View>
                                </View>
                            </Modal>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => updateDinnerSchedule(!dinnerSchedule)}>
                            <Image 
                                source={require('../../assets/drop.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    </View>
                    {dinnerSchedule && <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <Dialog style={{ width: 200, height: 200 }}>
                        <Dialog.Title><Text style={{ fontWeight: "bold" }}>Dinner</Text></Dialog.Title>
                        <Dialog.Content>
                        <View style={{ flexDirection: 'column', height: 60 }}>
                            {!(schedule.hasOwnProperty(date))
                            ? <Text>No schedule1</Text>
                            : (schedule[date].hasOwnProperty('dinner') 
                                ? schedule[date]['dinner'].map((item) => {
                                    return(
                                        <View key={item} style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                            <Text>{'\u2B24'} <Text style={{ fontSize: 15 }}> {item}</Text></Text>
                                        </View>
                                    )
                                })
                                : <Text>No schedule2</Text>)
                            }
                        </View>
                    </Dialog.Content>
                    </Dialog>
                </View>}
                    </View>
                    </View>
             </ScrollView>
        </View>
      </View>
    );
  }

export default HomeScreen;