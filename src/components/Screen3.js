import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

export const Screen3 = ({navigation}) => {
  console.log(navigation)
  const theme = useSelector(state => state.theme);
  return (
    <View
      style={{flex: 1, backgroundColor: theme == 'dark' ? '#2e2e2e' : 'white', alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity >
        <Text>Screen 1</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text>Screen 2</Text>
      </TouchableOpacity>
    </View>
  );
};
