import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    paddingTop: 60,
    // padding: 15,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  arrowLeft: {
    fontSize: 24,
    color: 'black',
  },
  headerText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  arrowRight: {
    color: 'transparent',
    fontSize: 24,
  },
  inputContainer: {
    width: '85%',
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 55,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#6666',
    alignSelf: 'center',
  },
  searchIcon: {
    fontSize: 24,
    color: 'black',
    fontWeight: '700',
  },
  input: {
    width: '100%',
    paddingHorizontal: 10,
  },
  mealTypeContainer: {
    // marginLeft: 30,
    marginTop: 20,
  },
  mealTypeBox: {
    backgroundColor: '#71b8bd',
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginHorizontal: 5,
    borderRadius: 50,
  },
  mealTitle: {
    color: 'white',
    fontSize: 14,
  },
  popularRecipiesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  popularRecipiesHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  viewAllText: {
    color: '#71b8bd',
    fontWeight: 'bold',
  },
  popularRecipiesContainer: {},
  popularRecipiesCard: {
    margin: 9,
    padding: 10,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#989898',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
  },
  popularRecipiesImage: {
    width: 78,
    height: 78,
    borderRadius: 18,
  },
  popularRecipiesText: {
    marginTop: 10,
    marginLeft: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 13,
  },
  categoryViewContainer: {
  // //  position: 'absolute',
  //  top: 500,
  flex:1
  },
  editorsChoiceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    padding: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 15,
    shadowColor: '#989898',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
  },
  editorsChoiceImage: {
    height: 100,
    width: 100,
    borderRadius: 15,
  },
  textDetails: {
    width: 140,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  textDetailsTitle: {
    fontSize: 17,
    fontWeight: 700,
    color: 'black',
    lineHeight: 25,
  },
  person: {
    color: '#666',
  },
  rightArrowContainer: {
    justifyContent: 'center',
    marginRight: 5,
  },
  rightArrowInnerContainer: {
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 8,
  },
  rightArrow: {
    fontSize: 16,
    color: 'white',
  },
  bottomTab: {
    position: 'absolute',
    width: '100%',
    height: 90,
    backgroundColor: 'white',
    bottom: 0,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: '#989898',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
    
  },
  bottomTabLeftIcons: {
    opacity: 0.5,
    // backgroundColor: 'gray',
    height: '100%',
    width: '35%',
    flexDirection: 'row',
    // alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 25
  },
  home: {
    fontSize: 20,
    color: 'blue'
  },
  search: {
    fontSize: 20,
  },
  bottomTabRightIcons: {
    // backgroundColor: 'red',
    opacity: 0.5,
    height: '100%',
    width: '35%',
    flexDirection: 'row',
    // alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 25
  },
  bell: {
    fontSize: 20,
  },
  user: {
    fontSize: 20,
  },
  // tabBar: {
  //   backgroundColor: 'white'
  // },
  // activeBackground: {
  //   position: 'absolute'
  // },
  // tabBarContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-evenly'
  // },
  // component: {
  //   height: 60,
  //   width: 60,
  //   marginTop: -5
  // },
  // componentCircle: {
  //   flex: 1,
  //   borderRadius: 30,
  //   backgroundColor: 'white'
  // },
  // iconContainer: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // icon: {
  //   height: 36,
  //   width: 36
  // }
  breakfastSliderCard: {
    backgroundColor: 'red'
  },

  dinnerSliderCard: {
    position: 'absolute',
    top: 200,
    backgroundColor: 'red'
  }
});
