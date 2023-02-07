import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    // paddingTop: 20,
    backgroundColor: '#fff'
  },
  top_outer_header_container: {
    height: 200,
    backgroundColor: '#9f63ff',
  },
  headerContainer: {
    height: 100,
    backgroundColor: '#7e32fd',
    borderBottomEndRadius: 35,
    borderBottomLeftRadius: 35,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon_container: {
    // marginTop: 15,
  },
  left_icon: {
    color: 'white',
    fontSize: 26,
  },
  date_container: {
    // marginTop: 20,
    // marginRight: 10
  },
  date_text: {
    color: 'white',
    fontSize: 20,
  },
  top_pink_shape: {
    position: 'absolute',
    height: 100,
    width: 200,
    backgroundColor: '#ff6897',
    borderTopRightRadius: 70,
    left: 100,
    overflow: 'hidden',
  },
  inner_pink_circle: {
    position: 'absolute',
    width: 100,
    height: 95,
    backgroundColor: '#e84679',
    bottom: 0,
    right: -10,
    borderTopLeftRadius: 100,
    overflow: 'hidden',
  },
  top_left_outer_green_circle: {
    // position: 'absolute',
    height: 100,
    overflow: 'hidden',
    backgroundColor: '#57ccb9',
    width: 100,
    borderTopLeftRadius: 100,
    bottom: 0,
  },
  top_left_inner_green_circle: {
    position: 'absolute',
    overflow: 'hidden',
    width: 45,
    height: 45,
    backgroundColor: '#12a8a1',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 100,
  },
  yellow_top_middle_container: {
    position: 'absolute',
    width: 200,
    height: 100,
    backgroundColor: '#fef6db',
    bottom: 0,
    left: 100,
    overflow: 'hidden',
    zIndex: 1,
  },
  top_middle_yellow_shape: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: '#fdd35c',
    borderTopRightRadius: 150,
    overflow: 'hidden',
  },
  top_middle_pink_shape: {
    position: 'absolute',
    height: 100,
    width: 100,
    backgroundColor: '#ff6897',
    right: 0,
    borderBottomLeftRadius: 100,
    right: -10,
    overflow: 'hidden',
  },

  top_right_yellow_shape: {
    width: 111,
    height: 100,
    position: 'absolute',
    backgroundColor: '#fdd35c',
    bottom: 0,
    right: 1,
    borderTopRightRadius: 100,
    overflow: 'hidden',
  },
  middle_main_container: {
    flexDirection: 'row'
  },
  middle_left_main_container: {
    height: 250,
    width: 200,
    backgroundColor: '#fe9471',
    borderBottomLeftRadius: 90,
    zIndex: 10,
    // borderWidth: 1,
    overflow: 'hidden'
    // borderWidth: 1
  },
  light_yellow_shape: {
    width: 200,
    height: 100,
    backgroundColor: '#ffebb8',
    overflow: 'hidden',
    borderBottomLeftRadius: 100,
  },
  purple_shape_middle_right: {
    width: 100,
    height: 100,
    overflow: 'hidden',
    borderTopLeftRadius: 50,
    backgroundColor: '#863bfe',
    position: 'absolute',
    right: 0,
  },
  design_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  middle_right_container: {
    backgroundColor: '#fff',
    width: 100,
    height: 200
  },
  middle_yellow_bottom: {
    backgroundColor: '#fdd35c',
    width: 100,
    height: 100,
    borderBottomRightRadius: 120,
    overflow: 'hidden',
  },
  line: {
    height: 2,
    width: 60,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 25,
    left: -20,
    // zIndex: 999
  },
  left_purple_bottom_shape: {
    width: 45,
    height: 90,
    backgroundColor: '#863bfe',
    position: 'absolute',
    bottom: 8,
    right: 0,
    borderBottomLeftRadius: 80,
    borderTopLeftRadius: 80,
    overflow: 'hidden'
  },
  left_yellow_bottom_shape: {
    width: 45,
    height: 90,
    backgroundColor: '#fdd35c',
    position: 'absolute',
    bottom:-44,
    left: 55,
    borderBottomLeftRadius: 80,
    borderTopLeftRadius: 80,
    overflow: 'hidden',
    zIndex: 1
  },
  middle_pink_shape: {
    backgroundColor: '#ff6897',
    width: 100,
    height: 100
  },
  inner_radius: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  middle_purple_number_container: {
    width: 70,
    height: 70,
    backgroundColor: '#7024ed',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText:{
    fontSize: 30,
    color: '#fff',
    fontWeight: 500
  },
  middle_right_shape: {
    width: 120,
    height: 230,
    // backgroundColor: '#57ccb9',
    backgroundColor: 'rgba(23,166,155,0.7)',
    borderBottomLeftRadius: 80,
    zIndex: 10,
    // opacity: .7
  },
  middle_right_inner_shape:{
    width: 65,
    height: 170,
    backgroundColor: '#12a8a1',
    position: 'absolute',
    right: 0,
    borderBottomLeftRadius: 50,
  },
  middle_right_bottom_shape:{
    width: 100,
    height: 100,
    backgroundColor: '#fdd35c',
    borderRadius: 100,
    position: 'absolute',
    bottom: -10,
    left: -20,
    zIndex: 1,
  },
  design_text: {
    fontSize: 17,
    fontWeight: 600,
    color: 'white',
    
  },
  bottom_main_container: {
    flexDirection : 'row',
    flex: 1,
    width: '100%',
    // backgroundColor: 'red',
    marginTop: 50,

  },
  left_numericals_container: {
    // borderWidth: 1,
    width: '24%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 30
  },
  numbers: {
    fontWeight: 'bold',
    color: '#6666'
  },
  
  lastnumberContainer: {
    flexDirection: 'row'
  },

  lastnumber: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
    color: 'black',
    fontWeight: 'bold'
  },
  greenDot: {
    width: 6,
    height: 6,
    backgroundColor: '#5ccab8',
    alignSelf: 'center',
    borderRadius: 10,
    position: 'absolute',
    left: -7
  },
  right_info_container:{
    // borderWidth: 1,
    width: '76%',
    // justifyContent: 'center'
    paddingTop: 40,
    marginLeft: 5
  },
  art_text: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  geometric_text: {
    fontSize: 44,
    fontWeight: 800,
    color: 'black',
  },
  start_button: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 25,
    backgroundColor: '#2bb5af',
    borderTopLeftRadius: 40
  },
  startText: {
    color: 'white',
    fontSize: 16
  },
  right_icon: {
    fontSize: 26,
    color: 'white'
  }
});
