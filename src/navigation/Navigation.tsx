import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogIn } from "../screens/LogIn/LogIn";
import { Image, StyleSheet } from "react-native";
import { Profile } from "../screens/Profile/Profile";
import { Home } from "../screens/Home/Home";
import { Images } from "../Images";
import { PersonalDetails } from "../screens/Profile/PersonalDetails";
import { TrackHistory } from "../screens/Profile/TrackHistory";
import { MapScreen } from "../screens/Map/Map";

type RootStackParamList = {
    LogIn: undefined;
    Profile:undefined;
    Home:undefined;
    PersonalDetails:undefined;
    TrackHistory:undefined;
    MapScreen:undefined;
    // Add other screen names and their params here if needed
};

const Stack = createStackNavigator<RootStackParamList>();


const Navigation: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
            <Stack.Screen name="PersonalDetails" component={PersonalDetails} options={{ headerShown: false }} />
            <Stack.Screen name="TrackHistory" component={TrackHistory} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default Navigation;