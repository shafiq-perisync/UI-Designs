import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {BudgetJson} from '../constants/dummyJSON';
import {Dimensions} from 'react-native';
import {cardDetailJson} from '../constants/dummyJSON';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_LENGTH = SCREEN_WIDTH * 0.45;
const SPACING = SCREEN_WIDTH * 0.02;
const SIDECARD_LENGTH = (SCREEN_WIDTH * 0.18) / 2;
const CARD_WIDTH = SCREEN_WIDTH * 0.85;

export const Screen1 = () => {
  const [scrollX, setScrollX] = useState(0);

  const renderBudget = ({item, index}) => {
    // console.log('renderBudget', item);
    return (
      <View
        style={{
          alignItems: 'center',
          // backgroundColor: 'red',
          marginLeft: index == 0 ? SIDECARD_LENGTH : SPACING,
          marginRight: index == 2 ? SIDECARD_LENGTH : SPACING,
          width: CARD_LENGTH,
          marginTop: 30,
        }}
        key={index}>
        <Text style={{fontSize: 30, fontWeight: 700, color: '#fff'}}>
          <Text style={{fontSize: 24, letterSpacing: 5}}>$</Text>
          {item.amount}
        </Text>
        <Text style={{fontSize: 14, color: '#fff'}}>{item.title}</Text>
      </View>
    );
  };

  const colors = (percentage) => {
    if(percentage < 31){
      return "#69b0ff";
    } else if(percentage > 30 && percentage < 70){
      return "#2b90ff";
    } else {
      return '#1b65b2'
    }
  }

  const renderCardDetails = ({item, index}) => {
    return (
      <View style={styles.cardContainer} key={index}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={item.image} style={styles.image} />
              <Text style={{fontWeight: 'bold', marginLeft: 3}}>
                {item.title}
              </Text>
            </View>
            <Text>$46/day</Text>
          </View>
          <View style={styles.bar}>
            <View
              style={[styles.barIndicator,{width: item.barWidth, backgroundColor: colors(item.percentage)}]}>
                  {/* // backgroundColor: item.percentage > 40 ? '#1b65b2' : '#69b0ff', */}
                
              <Text style={{color: '#fff'}}>$210</Text>
            </View>
            <View
              style={{
                width: 100,
                height: 45,
                position: 'absolute',
                // bottom: -20,
                right: -30,
                borderLeftWidth: 1.5,
                borderLeftColor: 'black',
                paddingLeft: 15,
                borderLeftColor: '#69b0ff',
                justifyContent: 'center',
              }}>
              <Text style={{}}>$800</Text>
            </View>
          </View>
          <View style={styles.bottomInfo}>
            <AntDesign
              name="checkcircle"
              style={{color: '#2b90ff', fontSize: 20, marginRight: 15}}
            />
            <Text>Your food spending is still on track</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={{transform: [{scaleX: 0.5}]}}>
          <View style={styles.headerTitle}>
            <FontAwesome
              name="angle-left"
              style={{fontSize: 35, color: '#fff'}}
            />
            <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>
              Budget
            </Text>
            <FontAwesome
              name="angle-left"
              style={{fontSize: 35, color: '#2d8ef5'}}
            />
          </View>
          <View>
            <FlatList
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              renderItem={renderBudget}
              snapToAlignment={'center'}
              // snapToInterval={100}
              data={BudgetJson}
              keyExtractor={item => item.id}
              onScroll={event => {
                setScrollX(event.nativeEvent.contentOffset.x);
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          width: SCREEN_WIDTH,
          alignItems: 'center',
          marginTop: -120,
          flex: 1,
        }}>
        <FlatList
          // pagingEnabled
          snapToInterval={50}
          renderItem={renderCardDetails}
          data={cardDetailJson}
          vertical
          style={{padding: 10}}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#2d8ef5',
    height: 330,
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 250,
    borderBottomEndRadius: 250,
    paddingTop: 50,
  },
  headerTitle: {
    marginHorizontal: 30,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainer: {
    backgroundColor: 'white',
    width: CARD_WIDTH,
    height: 180,
    marginVertical: 20,
    borderRadius: 13,
    padding: 20,
    shadowColor: '#aeaeae',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 6,
    // flex: 1,
  },
  image: {
    width: 40,
    height: 40,
  },
  bar: {
    width: '100%',
    height: 40,
    backgroundColor: '#f6fbff',
    borderRadius: 50,
    marginTop: 20,
    position: 'relative',
    justifyContent: 'center',
  },
  barIndicator: {
    justifyContent: 'center',
    height: '100%',
    borderRadius: 50,
    paddingHorizontal: 15,
  },
  bottomInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});
