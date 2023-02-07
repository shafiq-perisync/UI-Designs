import { Text, View, Image, Switch } from 'react-native';
import React from 'react';

// Styles
import {styles} from '../styles/Screen3DrawerStyles.js';

// Icons
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import {TouchableOpacity} from 'react-native-gesture-handler';

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {setTheme} from '../redux/actions.js';

export const DrawerContent = props => {

  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const changeTheme = () => {
    console.log("pressed33", theme)
    if(theme == "dark") {
        dispatch(setTheme('light'))
    }else {
        dispatch(setTheme('dark'))
    }
  }

  return (
    <View style={[styles.drawerContainer, {backgroundColor: theme == 'dark' ? 'black' : 'white'}]}>
      <View style={[styles.menu, {backgroundColor: theme === 'dark' ? 'black' : 'transparent'}]}>
        <View style={styles.close}>
          <AntDesign name="close" size={20} />
        </View>
        <View style={styles.menuTitle}>
          <Text style={[styles.menuTitleText, {color: theme == 'dark' ? 'white': 'black'}]}>Menu</Text>
        </View>
      </View>

      <View style={styles.userDetails}>
        <Image
          source={require('../assets/screen3/userImage.png')}
          style={styles.userImage}
        />
        <View style={styles.userDetailsTextContainer}>
          <View style={styles.username}>
            <Text style={[styles.usernameText, {color: theme  == 'dark' ? 'white' : 'black'}]}>Lindsey Rheil</Text>
            <Image
              source={require('../assets/screen3/tick.png')}
              style={[styles.tick, {borderRadius: 50}]}
            />
          </View>
          <Text style={[styles.userId, {color: theme == 'dark' ? '#787878': '#a8a8a8'}]}>Ox386_4T93</Text>
        </View>
      </View>

      <LinearGradient
        colors={['#a192ed', '#715be2', '#9354ee']}
        style={styles.balanceContainer}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <View style={styles.logoAndDetails}>
          <View style={styles.logo}>
            <MaterialCommunityIcons name="ethereum" size={38} color="white" />
          </View>
          <View>
            <Text style={{color: 'white', fontSize: 13, marginBottom: 2}}>
              My Balance
            </Text>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
              4.033 ETH
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.plus}>
            <AntDesign name="plus" />
          </View>
        </View>
      </LinearGradient>

      <View style={styles.walletContainer}>
        <View style={styles.leftWallet}>
          <View style={styles.walletIcon}>
            <Ionicons name="wallet-outline" size={24} color="black" />
          </View>
          <Text style={[styles.WalletText,  {color: theme  == 'dark' ? 'white' : 'black'}]}>My Wallet</Text>
        </View>
        <View style={styles.rightIcon}>
          <Entypo name="chevron-small-right" size={20} color={theme  == 'dark' ? 'white' : 'black'}/>
        </View>
      </View>
      <View style={styles.settingsView}>
        <Text style={styles.settingsText}>Settings</Text>
      </View>

      <View style={styles.themeContainer}>
        <View style={styles.leftTheme}>
          <View style={styles.moonIcon}>
            <Feather name="moon" size={22} />
          </View>
          <Text style={[styles.themeText, {color: theme  == 'dark' ? 'white' : 'black'}]}>Dark Theme</Text>
        </View>
        <View>
          <Switch onValueChange={changeTheme} value={theme == 'light' ? false : true }/>
        </View>
      </View>

      <View>
        <View style={styles.themeContainer}>
          <View style={styles.leftTheme}>
            <View style={styles.moonIcon}>
              <Feather name="globe" size={22} />
            </View>
            <Text style={[styles.themeText, {color: theme  == 'dark' ? 'white' : 'black'}]}>Language</Text>
          </View>
          <View>
            <Entypo name="chevron-small-right" size={20}  color={theme  == 'dark' ? 'white' : 'black'}/>
          </View>
        </View>
      </View>
      <View style={styles.settingsView}>
        <Text style={styles.settingsText}>Support</Text>
      </View>
      <View>
        <View style={styles.themeContainer}>
          <View style={styles.leftTheme}>
            <View style={styles.moonIcon}>
              <MaterialCommunityIcons name="hours-24" size={22} />
            </View>
            <Text style={[styles.themeText,  {color: theme  == 'dark' ? 'white' : 'black'}]}>Help Center</Text>
          </View>
          <View>
            <Entypo name="chevron-small-right" size={20} color={theme  == 'dark' ? 'white' : 'black'}/>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.themeContainer}>
          <View style={styles.leftTheme}>
            <View style={styles.moonIcon}>
              <AntDesign name="exclamationcircleo" size={22} />
            </View>
            <Text style={[styles.themeText, {color: theme  == 'dark' ? 'white' : 'black'}]}>About Us</Text>
          </View>
          <View>
            <Entypo name="chevron-small-right" size={20} color={theme  == 'dark' ? 'white' : 'black'}/>
          </View>
        </View>
      </View>

      <View style={styles.disconnectBtn}>
        <TouchableOpacity>
          <Text style={styles.disconnectText}>Disconnect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
