

import React, {useRef, useState} from 'react';
import {
  BackHandler,
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Icon from 'react-native-vector-icons/AntDesign';
import {RfH, RfW} from '../../../utils/helper';
import IntroText from '../../../component/IntroText';
import SkipButton from '../../../component/SkipButton';
const {width} = Dimensions.get('window');

const SplashScreen = ({navigation}) => {
  const [keyNumber, setKeyNumber] = useState(0);
  const swiperRef = useRef(null);

  const handlePress = () => {
    BackHandler.exitApp();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SwiperFlatList
        ref={swiperRef}
        autoplay={false}
        onChangeIndex={({index}) => {
          setKeyNumber(index);
        }}
        showPagination={false}
        renderAll
        autoplayLoop={false}>
        <View style={styles.slide1}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={handlePress} style={styles.imgsty}>
              <Icon
                name="left"
                size={20}
                color="#242424"
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>
            <View>
              <SkipButton
                skipText={'Skip'}
                onPress={() => {
                  navigation.navigate('BottomTabStack');
                }}
              />
            </View>
          </View>
          <Image
            source={require('../../../assets/images/Intro/maskintrofirst.png')}
            style={styles.imgsty2}
          />
          <View style={{marginTop: RfH(40)}}>
            <IntroText
              hedtext={'Reach Out Anytime with SK App'}
              text={'Stay Connected!'}
              subText={
                'Easily reach out to me via email or phone. With our dedicated app, contacting me has never been easier!'
              }
            />
          </View>
        </View>
        <View style={styles.slide3}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                swiperRef.current?.scrollToIndex({index: keyNumber - 1});
              }}>
              <TouchableOpacity onPress={handlePress} style={styles.imgsty}>
                <Icon
                  name="left"
                  size={20}
                  color="#242424"
                  style={{alignSelf: 'center'}}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <SkipButton
              skipText={'Skip'}
              onPress={() => {
                navigation.navigate('BottomTabStack');
              }}
            />
          </View>
          <Image
            source={require('../../../assets/images/Intro/spalshscreen.webp')}
            style={styles.imgsty2}
          />
          <View style={{marginTop: RfH(40)}}>
            <IntroText
              hedtext={'Know Me Better with SK App'}
              // text={'All in one app for Sanjay \nand portfolio updates'}
              text={'Your Gateway to My World'}
              subText={
                'Explore all my professional and personal updates, just a click away.'
              }
            />
          </View>
        </View>
      </SwiperFlatList>

      <View
        style={{
          minHeight: RfH(112),
          width: '100%',
          top: RfH(Platform.OS === 'ios' ? 40 : 20),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: RfW(25),
          }}>
          <View style={styles.activityDotsContainer}>
            {[0, 1].map(index => (
              <View
                key={index}
                style={{
                  backgroundColor: keyNumber === index ? 'blue' : '#E4E9F6',
                  height: RfH(7),
                  width: RfW(12),
                  ...styles.activityDotsStyle,
                }}
              />
            ))}
          </View>
          <View>
            {keyNumber === 0 ? (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  swiperRef.current?.scrollToIndex({index: keyNumber + 1});
                }}></TouchableOpacity>
            ) : keyNumber === 1 ? (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.startedbtn}
                onPress={() => {
                  navigation.navigate('BottomTabStack');
                }}>
                <Text
                  fontSize={15}
                  fontWeight={'500'}
                  style={styles.getStartedText}>
                  {'Get Started'}
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  slide1: {
    width,
  },
  slide3: {
    width,
  },
  startedbtn: {
    borderWidth: RfH(1),
    backgroundColor: 'white',
    borderColor: 'blue',
    height: RfH(43),
    borderRadius: RfH(10),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: RfW(5),
    top: RfH(7),
  },
  getStartedText: {
    paddingHorizontal: RfW(5),
    color: 'blue',
    lineHeight: 27,
    alignSelf: 'center',
  },
  activityDotsContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    paddingTop: RfH(10),
  },
  activityDotsStyle: {
    borderRadius: RfH(50),
    alignSelf: 'center',
    margin: RfH(3),
  },
  imgsty: {
    height: RfH(36),
    width: RfH(36),
    marginTop: RfH(16),
    left: RfW(18),
    justifyContent: 'center',
  },
  imgsty2: {height: RfH(340), width: RfW(320), alignSelf: 'center'},
});
