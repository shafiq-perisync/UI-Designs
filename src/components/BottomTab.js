import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Screen1 } from './Screen1';
import { Screen2 } from './Screen2';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="screen" component={Screen1} />
        <Tab.Screen name="screen1" component={Screen2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
