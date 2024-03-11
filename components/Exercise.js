import { useContext, useEffect, useState } from "react";
import { Alert, Keyboard, Modal, Pressable, SafeAreaView, View } from "react-native";
import { Button, MD3LightTheme, PaperProvider, SegmentedButtons, Text, TextInput } from "react-native-paper";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Calendar } from "react-native-calendars";
import { UnitContext, WorkoutContext } from "../contexts/Context";
import Style from "../styles/Style";
import { moderateScale } from "../metrics/Metrics";

const MyTheme = {
  ...MD3LightTheme,
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: 'maroon',
    background: '#efdfdfff',
    onSurface: 'maroon',
    onSurfaceVariant: 'maroon',
    outline: 'white',
  }
}

export default function Exercise() {
  const [workoutType, setWorkoutType] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const {workout, setWorkout} = useContext(WorkoutContext);
  const {unit} = useContext(UnitContext);
  
  const addWorkout = () => {
    if (workoutType === '') {
      Alert.alert('You have to select a workout.');
    }
    else if (distance === '') {
      Alert.alert('You have to enter a distance.');
    }
    else if (duration === '') {
      Alert.alert('You have to enter a duration.');
    }
    else if (selectedDate === undefined) {
      Alert.alert('You have to select a date.');
    }
    else if (convertTextInput(distance) <= 0 ) {
      Alert.alert('You have to enter a positive distance.');
    }
    else if (convertTextInput(duration) <= 0) {
      Alert.alert('You have to enter a positive duration.');
    }
    else {
      const doneWorkout = {
        workoutType: workoutType, 
        date: selectedDate.dateString, 
        distance: unit === 'km' ? convertTextInput(distance).toFixed(2) : convertToMiles(convertTextInput(distance)).toFixed(2), 
        duration: convertTextInput(duration)
      };
      const workoutsUnsorted = [...workout, doneWorkout];
      const workoutsSorted = workoutsUnsorted.sort((a, b) => new Date(b.date) - new Date(a.date));
      setWorkout(workoutsSorted);
      setDistance('');
      setDuration('');
      setSelectedDate();
      Keyboard.dismiss();
    }
  }
  
  const setDate = (day) => {
    setModalVisible(false);
    setSelectedDate(day)
  }

  const convertTextInput = (input) => {
    return(parseFloat(input.replace(',', '.')));
  }

  const convertToMiles = (km) => {
    return(km*1.60934);
  }

  return (
    <PaperProvider theme={MyTheme}>
      <View style={Style.exerciseView}>
        <SafeAreaView style={Style.safeAreaView}>
          <SegmentedButtons
            value={workoutType}
            onValueChange={setWorkoutType}
            buttons={[
              {
                value: 'swim',
                label: 'Swimming',
                icon: 'swim',
                style: Style.segmentedButtons
              },
              {
                value: 'bike',
                label: 'Biking',
                icon: 'bike',
                style: Style.segmentedButtons
              },
              {
                value: 'run',
                label: 'Running',
                icon: 'run',
                style: Style.segmentedButtons
              },
            ]}
          />
          <View style={Style.exerciseInput}>
            <TextInput label={`Workout Distance (${unit})`} outlineStyle={Style.textInput} mode='outlined' keyboardType='numeric' value={distance} onChangeText={dis => setDistance(dis)}/>
            <TextInput label={'Workout Duration (min)'} mode='outlined' outlineStyle={Style.textInput} keyboardType='numeric' value={duration} onChangeText={dur => setDuration(dur)}/>
          </View>
          <View style={Style.exerciseInput}>
            <Pressable style={Style.modalButton}
              onPress={() => setModalVisible(true)}
            >
              <MaterialIcons name='date-range' size={moderateScale(24)} color={'white'} style={Style.dateIcon}/>
              <Text style={Style.dateText}>{selectedDate ? selectedDate.dateString : 'Select Date'}</Text>
            </Pressable>
            <Pressable onPress={addWorkout} style={Style.addWorkout}>
              <MaterialCommunityIcons name='plus-box' size={moderateScale(26)} color='maroon'/>
              <Text style={Style.addWorkoutText}>Add Workout</Text>
            </Pressable>
          </View>
          <View>
            <Modal
              animationType='none'
              transparent={false}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(!modalVisible)}
            >
              <View style={Style.calendarView}>
                <Calendar onDayPress={setDate} style={Style.calendar}/>
                <Button mode='contained' onPress={() => setModalVisible(!modalVisible)} style={Style.calendarButton}>Close</Button>
              </View>
            </Modal>
          </View>
        </SafeAreaView>
      </View>
    </PaperProvider>
  );
}
