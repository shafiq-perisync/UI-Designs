import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from '../styles/Screen3Styles.js';
import LinearGradient from 'react-native-linear-gradient';

export const Screen3 = ({navigation}) => {
  console.log(navigation);
  const theme = useSelector(state => state.theme);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme == 'dark' ? '#2e2e2e' : 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Screen1')}
        style={styles.button}>
        <LinearGradient
          colors={['#a192ed', '#715be2', '#9354ee']}
          style={styles.button}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <Text style={styles.buttonText}>Screen 1</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Screen2')}
        style={styles.button}>
        <LinearGradient
          colors={['#a192ed', '#715be2', '#9354ee']}
          style={styles.button}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <Text style={styles.buttonText}>Screen 2</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.openDrawer()}>
        <LinearGradient
          colors={['#a192ed', '#715be2', '#9354ee']}
          style={styles.button}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <Text style={styles.buttonText}>Screen 3</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen4')}>
        <LinearGradient
          colors={['#a192ed', '#715be2', '#9354ee']}
          style={styles.button}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <Text style={styles.buttonText}>Screen 4</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen5')}>
        <LinearGradient
          colors={['#a192ed', '#715be2', '#9354ee']}
          style={styles.button}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <Text style={styles.buttonText}>Screen 5</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
