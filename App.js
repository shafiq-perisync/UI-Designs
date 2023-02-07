import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './src/components/BottomTab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Icons
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// StyleSheet
import Screen2Styles from './src/styles/Screen2Styles';

// import { Image } from 'react-native-svg';
import 'react-native-gesture-handler';

// Drawer
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './src/components/DrawerContent.js';

// Screens
import {Screen1} from './src/components/Screen1';
import {Screen2} from './src/components/Screen2';
import {Screen3} from './src/components/Screen3';
import {Screen4} from './src/components/Screen4.js';

// Redux
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {useSelector, useDispatch} from 'react-redux';
import { AppContainer } from './src/components/AppContainer';


const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// const CustomTabBarButton = ({children, onPress}) => {
//   <TouchableOpacity
//     style={{
//       top: -30,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: 'red'
//       // ...styles.shadow
//     }}>
//     <View style={{width: 60, height: 60, borderRadius: 30, backgroundColor:"red"}}>{children}</View>
//   </TouchableOpacity>;
// };

// const store = configureStore();

const App = () => {
  // const theme = useSelector((state) => state.theme);

  return (
    //  <BottomTab/>
    // <NavigationContainer>
    //   <Tab.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //       tabBarLabel: () => {
    //         return null;
    //       },
    //       position: 'absolute',
    //       // showLabel: false,
    //       style: {
    //         margin: 10,
    //       },
    //       height: 120,
    //     }}>
    //     <Tab.Screen
    //       name="home"
    //       component={Screen2}
    //       options={{
    //         tabBarIcon: ({focused}) => {
    //           return (
    //             <Octicons
    //               name="home"
    //               size={20}
    //               color={focused ? '#71b8bd' : 'gray'}
    //             />
    //           );
    //         },
    //       }}
    //     />
    //     <Tab.Screen
    //       name="search"
    //       component={Screen2}
    //       options={{
    //         tabBarIcon: ({focused}) => {
    //           return (
    //             <Feather
    //               name="search"
    //               size={20}
    //               color={focused ? '#71b8bd' : 'gray'}
    //             />
    //           );
    //         },
    //       }}
    //     />
    //   <Tab.Screen
    //       name="chef"
    //       component={Screen2}
    //       options={{
    //         tabBarIcon: ({focused}) => {
    //           return (
    //             <MaterialCommunityIcons
    //               name="chef-hat"
    //               size={40}
    //               color={focused ? '#71b8bd' : 'gray'}
    //             />
    //           );
    //         },
    //       }}
    //     />
    //     <Tab.Screen
    //       name="notification"
    //       component={Screen2}
    //       options={{
    //         tabBarIcon: ({focused}) => {
    //           return (
    //             <Octicons
    //               name="bell"
    //               size={20}
    //               color={focused ? '#71b8bd' : 'gray'}
    //             />
    //           );
    //         },
    //       }}
    //     />
    //     <Tab.Screen
    //       name="user"
    //       component={Screen2}
    //       options={{
    //         tabBarIcon: ({focused}) => {
    //           return (
    //             <FontAwesome
    //               name="user-o"
    //               size={20}
    //               color={focused ? '#71b8bd' : 'gray'}
    //             />
    //           );
    //         },
    //       }}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>

    <Provider store={store}>
      {/* <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <DrawerContent {...props} />}
          screenOptions={{
            drawerStyle: {width: '77%'},
          }}>
          <Drawer.Screen name="screen3" component={Screen3} />
        </Drawer.Navigator>
      </NavigationContainer> */}
      <AppContainer/>
    </Provider>

    // <Screen4/>
  );
};

export default App;

const styles = StyleSheet.create({});
