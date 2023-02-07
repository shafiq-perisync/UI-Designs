import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack' 
import { Screen1 } from '../components/Screen1';
import { Screen2 } from '../components/Screen2';


const Stack = createNativeStackNavigator();

const Routes = () => {
  return ( 
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* <Stack.Screen name='SigninPage' component={SigninPage}/>
            <Stack.Screen name="SignupPage" component={SignupPage}/>
            <Stack.Screen name="Otp" component={Otp}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
            <Stack.Screen name="Home" component={Home} /> */}
            <Stack.Screen name='Screen1' component={Screen1}/>
            <Stack.Screen name='Screen2' component={Screen2}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}