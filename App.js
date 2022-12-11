import react,{useState,useEffect} from "react";
import { StyleSheet,Text,View , Button } from "react-native";
import { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import Home from './Screens/Home';
import index from "./Screens";
import Verification from "./Screens/Verification";
import 'react-native-gesture-handler';
import Article from "./Screens/Article";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from "react-native-gesture-handler";
const Stack = createStackNavigator()

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login"
          screenOptions={{
            headerShown: false
          }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="index" component={index} />
            <Stack.Screen name="Verification" component={Verification} />
            <Stack.Screen name="Article" component={Article} />
          </Stack.Navigator>
        </NavigationContainer>

    );
}

