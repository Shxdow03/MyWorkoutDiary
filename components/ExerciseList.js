import { useContext, useEffect, useState } from "react";
import { UnitContext, WorkoutContext } from "../contexts/Context";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { Avatar, Card } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Style from '../styles/Style';
import { moderateScale } from "../metrics/Metrics";

export default function ExerciseList() {
    
    const {workout, setWorkout} = useContext(WorkoutContext);
    const {unit} = useContext(UnitContext);
    const [distances, setDistances] = useState({});
    
    useEffect(() => {
        const calculateDistances = () => {
            const workoutDistances = {'run': 0, 'bike': 0, 'swim': 0};
            workout.forEach(work => {
                const { workoutType, distance } = work;
                if (workoutDistances[workoutType]) {
                    workoutDistances[workoutType] += parseFloat(distance);
                } else {
                    workoutDistances[workoutType] = parseFloat(distance);
                }
            });
            setDistances(workoutDistances);
        };
        calculateDistances();
    }, [workout]);

    const setIcon = (props, iconName) => {
        return(
            <Avatar.Icon {...props} color='white' style={Style.exerciseListIcon} icon={iconName} />
        );
    }

    const clearExercises = () => {
        setWorkout([]);   
        Alert.alert('List of exercises was cleared.');                     
    }

    const convertDistance = (dist) => {
        return((dist/1.60934).toFixed(2));
    }

    return(
        <View style={Style.exerciseListView}>
            <View style={Style.exercises}>
                <View style={Style.exercise}>
                    <MaterialCommunityIcons name="run" size={moderateScale(20)} color='maroon' style={Style.sumIcon}/>
                    <Text style={Style.exerciseText}>{unit === 'km' 
                                                        ? distances.run 
                                                        : convertDistance(distances.run)} {unit}</Text>
                </View>
                <View style={Style.exercise}>
                    <MaterialCommunityIcons name="bike" size={moderateScale(20)} color='maroon' style={Style.sumIcon}/>
                    <Text style={Style.exerciseText}>{unit === 'km' 
                                                        ? distances.bike 
                                                        : convertDistance(distances.bike)} {unit}</Text>
                </View>
                <View style={Style.exercise}>
                    <MaterialCommunityIcons name="swim" size={moderateScale(20)} color='maroon' style={Style.sumIcon}/>
                    <Text style={Style.exerciseText}>{unit === 'km' 
                                                        ? distances.swim 
                                                        : convertDistance(distances.swim)} {unit}</Text>
                </View>
            </View>
            <ScrollView style={Style.scrollView}>
                {
                    workout.map((work, index) => (
                        <Card key={index} style={Style.card} mode="contained">
                            <Card.Title title={work.date} left={(props) => setIcon(props, work.workoutType)} titleStyle={Style.titleStyle}/>
                            <Card.Content>
                                { unit === 'km'
                                    ? <Text style={Style.exerciseText}>Distance: {work.distance} {unit}</Text>
                                    : <Text style={Style.exerciseText}>Distance: {convertDistance(work.distance)} {unit}</Text>
                                }
                                <Text style={Style.exerciseText}>Duration: {work.duration} min</Text>
                                { unit === 'km'
                                    ? <Text style={Style.exerciseText}>Pace: {(work.duration/work.distance).toFixed(2)} min/{unit}</Text>
                                    : <Text style={Style.exerciseText}>
                                        Pace: {(work.duration/convertDistance(work.distance)).toFixed(2)} min/{unit}
                                    </Text>
                                }   
                            </Card.Content>
                        </Card>
                    ))
                }
            </ScrollView>
            {
                workout.length !== 0 
                && 
                <View style={Style.clearListButton}>
                    <Pressable
                        onPress={clearExercises}
                    > 
                            <Text style={Style.clearListButtonText}>Clear Exercises</Text>
                    </Pressable>
                </View>
            }
        </View>
    );
}