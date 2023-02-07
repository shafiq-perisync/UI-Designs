import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../styles/Screen4Styles';
import Feather from 'react-native-vector-icons/Feather';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo'

export const Screen4 = () => {
  return (
    <View style={styles.main_container}>
      <View style={styles.shapesContainer}>
        <View style={styles.top_outer_header_container}>
          <View style={styles.headerContainer}>
            <View style={styles.icon_container}>
              <Feather name="chevron-left" style={styles.left_icon} />
            </View>
            <View style={styles.date_container}>
              <Text style={styles.date_text}>23</Text>
              <Text style={styles.date_text}>May</Text>
            </View>
            <View style={styles.top_pink_shape}>
              <View style={styles.inner_pink_circle}></View>
            </View>
          </View>
          <View style={styles.top_left_outer_green_circle}>
            <View style={styles.top_left_inner_green_circle}></View>
          </View>
          <View style={styles.yellow_top_middle_container}>
            <View style={styles.top_middle_yellow_shape}></View>
            <View style={styles.top_middle_pink_shape}></View>
          </View>
          <View style={styles.top_right_yellow_shape}></View>
        </View>

        <View style={styles.middle_main_container}>
          <View style={styles.middle_left_main_container}>
            <View style={styles.light_yellow_shape}>
              <View style={styles.purple_shape_middle_right}></View>
            </View>
            <View style={styles.design_container}>
              <View
                style={{
                  width: '50%',
                  alignItems: 'flex-end',
                  paddingRight: 20,
                  marginTop: 30,
                }}>
                <View style={styles.left_purple_bottom_shape}></View>
                <Text style={styles.design_text}>D E S</Text>
                <Text style={styles.design_text}>I G N</Text>
              </View>
              <View style={styles.middle_right_container}>
                <View style={styles.middle_yellow_bottom}>
                  <View style={styles.line}></View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.left_yellow_bottom_shape}></View>
          <View style={styles.middle_pink_shape}>
            <View style={styles.inner_radius}>
              <View style={styles.middle_purple_number_container}>
                <Text style={styles.numberText}>05</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.middle_right_bottom_shape}></View>
            <View style={styles.middle_right_shape}>
              <View style={styles.middle_right_inner_shape}></View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottom_main_container}>
        <View style={styles.left_numericals_container}>
          <Text style={styles.numbers}>01</Text>
          <Text style={styles.numbers}>02</Text>
          <Text style={styles.numbers}>03</Text>
          <Text style={styles.numbers}>04</Text>
          <View style={styles.lastnumberContainer}>
            <View style={styles.greenDot}></View>
            <Text style={styles.lastnumber}>05</Text>
          </View>
        </View>
        <View style={styles.right_info_container}>
          <Text style={styles.art_text}>The Art of</Text>
          <Text style={styles.geometric_text}>Geometric</Text>
          <Text style={styles.geometric_text}>Shapes</Text>
          <TouchableOpacity style={styles.start_button}>
            <Text style={styles.startText}>Start Session</Text>
            <Entypo name="chevron-small-right" style={styles.right_icon}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
