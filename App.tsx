import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//import all screens from paths
import LoginScreen from './scripts/loginScreen';
import HomeScreen from './scripts/homeScreen';
import TripDetailsScreen from './scripts/tripDetailsScreen';
import PlanTripScreen from './scripts/planTripScreen';
import ProfileScreen from './scripts/profileScreen';
import ContributorsScreen from './scripts/contributorsScreen';

//typ definiation for the navigation stack
export type RootStackParamList = {
  Login : undefined;
  Home: undefined;
  TripDetails: undefined;
  PlanTrip: undefined;
  Profile: undefined;
  Contributors: undefined;
};

//initialize the stack navigator with the defined types
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (

    //Adding screesn in the stack navigator
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TripDetails" component={TripDetailsScreen} />
        <Stack.Screen name="PlanTrip" component={PlanTripScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Contributors" component={ContributorsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
