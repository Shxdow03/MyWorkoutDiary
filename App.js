import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';
import Exercise from './components/Exercise';
import ExerciseList from './components/ExerciseList';
import Settings from './components/Settings';
import { useState } from 'react';
import { UnitContext, WorkoutContext } from './contexts/Context';
import { useFonts } from "expo-font";
import Style from './styles/Style';
import { exercises } from './constants/Constant';

const Tab = createBottomTabNavigator();

export default function App() {

  const [workout, setWorkout] = useState(exercises);
  const [unit, setUnit] = useState('km');

  const [loaded] = useFonts({
    LatoRegular : require('./fonts/Lato-Regular.ttf')
  });

  if(!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <WorkoutContext.Provider value={{workout, setWorkout}}>
        <UnitContext.Provider value={{unit, setUnit}}>
          <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({route}) => ({
              tabBarIcon: ({focused}) => {
                let iconName;
                if (route.name === 'Exercise') {
                  iconName = 'activity'
                  return <Feather name={iconName} size={24} color={'maroon'}/>
                }
                else if (route.name === 'ExerciseList') {
                  iconName = focused 
                    ? 'clipboard-list'
                    : 'clipboard-list-outline'
                    return <MaterialCommunityIcons name={iconName} size={24} color={'maroon'}/>
                }
                else if (route.name === 'Settings') {
                  iconName = focused 
                    ? 'settings'
                    : 'settings-outline'
                    return <Ionicons name={iconName} size={24} color={'maroon'}/>
                }
              },
              tabBarActiveTintColor: 'maroon',
              tabBarInactiveTintColor: '#80000085',
              headerTintColor: 'maroon',
              headerStyle: Style.outline,
              headerTitleStyle: Style.headerTitle,
              tabBarStyle: Style.outline,
              tabBarLabelStyle: Style.tabBarLabel,
              tabBarBadgeStyle: Style.tabBarBadge
            })}>
            <Tab.Screen name='Exercise' component={Exercise}/>
            <Tab.Screen name='ExerciseList' component={ExerciseList} options={{tabBarBadge: workout.length}}/>
            <Tab.Screen name='Settings' component={Settings}/>
          </Tab.Navigator>
        </UnitContext.Provider>
      </WorkoutContext.Provider>
    </NavigationContainer>
  );
}