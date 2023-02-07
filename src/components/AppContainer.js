import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './DrawerContent';
import {createStackNavigator} from '@react-navigation/stack';
import { Screen1 } from './Screen1';
import { Screen2 } from './Screen2';
import { Screen3 } from './Screen3';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const DrawerRoutes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {width: '77%'},
        }}>
        <Drawer.Screen name="screen3" component={Screen3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Screen3">
        {/* <Stack.Screen name='SigninPage' component={SigninPage}/>
            <Stack.Screen name="SignupPage" component={SignupPage}/>
            <Stack.Screen name="Otp" component={Otp}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
