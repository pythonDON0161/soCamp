import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/Homescreen';
import BookingScreen from '../screens/BookingScreen/BookingScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='booking' component={BookingScreen} />
        <Tab.Screen name='profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}