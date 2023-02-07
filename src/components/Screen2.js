import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles/Screen2Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {mealType} from '../constants/dummyJSON';
import {popularRecipes} from '../constants/dummyJSON';
import {editorsChoice} from '../constants/dummyJSON';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
// import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import { Screen1 } from './Screen1';
import {breakfast} from '../constants/dummyJSON';
import {lunch} from '../constants/dummyJSON';
import {dinner} from '../constants/dummyJSON';

// const Tab = createBottomTabNavigator();

export const Screen2 = () => {
  const [isSelected, setIsSelected] = useState(null);
  const onCategoryTabPress = item => {
    // console.log(item);
    setIsSelected(item);
    console.log(isSelected);
  };

  const mealTitle = ({item, index}) => {
    // console.log(item)
    return (
      <TouchableOpacity
        style={[
          styles.mealTypeBox,
          {backgroundColor: isSelected == item ? '#71b8bd' : '#dbdbdb'},
        ]}
        onPress={() => onCategoryTabPress(item)}>
        <Text
          style={[
            styles.mealTitle,
            {color: isSelected == item ? '#fff' : 'black'},
          ]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const popularRecipesSlider = ({item, index}) => {
    return (
      <View style={styles.popularRecipiesCard}>
        <Image source={item.image} style={styles.popularRecipiesImage} />
        <Text style={styles.popularRecipiesText}>{item.title}</Text>
      </View>
    );
  };

  const editorsChoiceSlider = ({item, index}) => {
    return (
      <View style={styles.editorsChoiceCard}>
        <Image source={item.image} style={styles.editorsChoiceImage} />
        <View style={styles.textDetails}>
          <Text style={styles.textDetailsTitle}>{item.title}</Text>
          <Text style={styles.person}>{item.person}</Text>
        </View>
        <View style={styles.rightArrowContainer}>
          <View style={styles.rightArrowInnerContainer}>
            <AntDesign name="arrowright" style={styles.rightArrow} />
          </View>
        </View>
      </View>
    );
  };

  const breakfastSlider = ({item, index}) => {
    console.log('breakfast', item);
    <View style={styles.breakfastSliderCard}>
      <Image source={item.image} style={styles.breakfastImage} />
      <Text style={styles.breakfastTitle}>{item.title}</Text>
    </View>;
  };

  const lunchSlider = ({item, index}) => {
    console.log('lunch', item);
    <View style={styles.lunchSliderCard}>
      <Image source={item.image} style={styles.lunchImage} />
      <Text style={styles.lunchTitle}>{item.title}</Text>
    </View>;
  };

  const dinnerSlider = ({item, index}) => {
    console.log('dinner', item);
    <View style={styles.dinnerSliderCard}>
      <Image source={item.image} style={styles.dinnerImage} />
      <Text style={styles.dinnerTitle}>{item.title}</Text>
    </View>;
  };
  // const AnimatedTabBar = BottomTabBarProps => {
  //   const {bottom} = useSafeAreaInsets();
  //   return <View style={[styles.tabBar, {paddingBottom: bottom}]}></View>;
  // };

  return (
    // <NavigationContainer>
    <View style={styles.main_container}>
      <View style={styles.headerTitleContainer}>
        <AntDesign name="arrowleft" style={styles.arrowLeft} />
        <Text style={styles.headerText}>Search</Text>
        <AntDesign name="arrowleft" style={styles.arrowRight} />
      </View>
      <View style={styles.inputContainer}>
        <AntDesign name="search1" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#6666"
          style={styles.input}
        />
      </View>
      <View style={styles.mealTypeContainer}>
        <FlatList
          horizontal
          renderItem={mealTitle}
          data={mealType}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 30}}
        />
      </View>
      <View style={styles.popularRecipiesHeader}>
        <Text style={styles.popularRecipiesHeaderText}>Popular Recipes</Text>
        <Text style={styles.viewAllText}>View All</Text>
      </View>
      <View style={styles.popularRecipiesContainer}>
        <FlatList
          data={popularRecipes}
          renderItem={popularRecipesSlider}
          horizontal
          contentContainerStyle={{paddingHorizontal: 20}}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.popularRecipiesHeader}>
        <Text style={styles.popularRecipiesHeaderText}>Editor's Choice</Text>
        <Text style={styles.viewAllText}>View All</Text>
      </View>
      <View style={styles.categoryViewContainer}>
        {/* <FlatList data={editorsChoice} renderItem={editorsChoiceSlider} /> */}
        {(isSelected == 'All' || isSelected == 'Breakfast') && (
          <FlatList
            data={breakfast}
            renderItem={breakfastSlider}
            horizontal
            contentContainerStyle={{paddingHorizontal: 20}}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
      {(isSelected == 'All' || isSelected == 'Lunch') && (
          <FlatList
            data={lunch}
            renderItem={lunchSlider}
            horizontal
            contentContainerStyle={{paddingHorizontal: 20}}
            showsHorizontalScrollIndicator={false}
          />
        )}
        {(isSelected == 'All' || isSelected == 'Dinner') && (
          <FlatList
            data={dinner}
            renderItem={dinnerSlider}
            horizontal
            contentContainerStyle={{paddingHorizontal: 20}}
            showsHorizontalScrollIndicator={false}
          />
        )}
    </View>
  );
};
