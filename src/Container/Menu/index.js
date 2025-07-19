import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  Animated,
} from 'react-native';
import {colors} from '../../utils';
import Header from '../../utils/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RfH, RfW} from '../../utils/helper';
import LinearGradient from 'react-native-linear-gradient';
import ImageAssets from '../../Asset/ImageAssets';

const MenuScreen = () => {
  const openLink = url => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const openPhone = () => {
    Linking.openURL(`tel:08874369688`);
  };

  const openEmail = () => {
    Linking.openURL('mailto:sanjaykumarme40@gmail.com');
  };

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const animateScale = animation => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1.1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Header HeaderTxt={'Profile'} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        bounces={false}
        overScrollMode="never"
        contentContainerStyle={styles.scrollContainer}>
        <View style={styles.homecontainer}>
          <Text style={styles.greeting}>Hello, Sanjay Kumar!</Text>
          <Text style={styles.subheading}>What do you wanna learn today?</Text>
        </View>

        <LinearGradient
          colors={['#6a11cb', '#2575fc']}
          style={styles.promoCard}>
          <View style={styles.promoTextContainer}>
            <Text style={styles.promoTitle}>React Native Developer</Text>
            <Text style={styles.promoDescription}>
              Passionate React Native and React JS Developer with 2 years of
              experience in creating dynamic web and mobile applications.
            </Text>
          </View>
          {/* <Image
            source={{
              uri: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2151',
            }}
            style={styles.promoImage}
          /> */}

          <Image source={ImageAssets.sanjay} style={styles.promoImage} />
        </LinearGradient>

        <View style={styles.socialMediaContainer}>
          <TouchableOpacity
            onPressIn={() => animateScale(scaleAnim)}
            onPress={() => openLink('https://github.com/SanjayKumarCode')}>
            <Animated.View
              style={[styles.iconButton, {transform: [{scale: scaleAnim}]}]}>
              <LinearGradient
                colors={['#6a11cb', '#2575fc']}
                style={styles.iconBackground}>
                <Icon name="github" size={RfW(30)} color="#fff" />
              </LinearGradient>
            </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={() => animateScale(scaleAnim)}
            onPress={() =>
              openLink('https://www.linkedin.com/in/sanjay-kumar-2a756916a/')
            }>
            <Animated.View
              style={[styles.iconButton, {transform: [{scale: scaleAnim}]}]}>
              <LinearGradient
                colors={['#6a11cb', '#2575fc']}
                style={styles.iconBackground}>
                <Icon name="linkedin" size={RfW(30)} color="#fff" />
              </LinearGradient>
            </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={() => animateScale(scaleAnim)}
            onPress={() => openLink('https://x.com/Sanjaykumar2455')}>
            <Animated.View
              style={[styles.iconButton, {transform: [{scale: scaleAnim}]}]}>
              <LinearGradient
                colors={['#6a11cb', '#2575fc']}
                style={styles.iconBackground}>
                <Icon name="twitter" size={RfW(30)} color="#fff" />
              </LinearGradient>
            </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={() => animateScale(scaleAnim)}
            onPress={openPhone}>
            <Animated.View
              style={[styles.iconButton, {transform: [{scale: scaleAnim}]}]}>
              <LinearGradient
                colors={['#6a11cb', '#2575fc']}
                style={styles.iconBackground}>
                <Icon name="phone" size={RfW(30)} color="#fff" />
              </LinearGradient>
            </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={() => animateScale(scaleAnim)}
            onPress={openEmail}>
            <Animated.View
              style={[styles.iconButton, {transform: [{scale: scaleAnim}]}]}>
              <LinearGradient
                colors={['#6a11cb', '#2575fc']}
                style={styles.iconBackground}>
                <Icon name="envelope" size={RfW(30)} color="#fff" />
              </LinearGradient>
            </Animated.View>
          </TouchableOpacity>
        </View>

        <View style={styles.borderContainer}>
          <View style={styles.jobDescriptionContainer}>
            <Text style={styles.CompanyTitle}>Professional Experience</Text>
            <Text style={styles.jobTitle}>
              Clicknpay digital solutions Private Limited
            </Text>
            <Text style={styles.jobDuration}>October 2023 </Text>

            <View style={styles.textSection}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://play.google.com/store/search?q=ClickNTokk&c=apps',
                  )
                }>
                <Text style={styles.boldText}>ClickNTokk App</Text>
              </TouchableOpacity>
              <Text style={styles.normalText}>
                A social media app with video/photo sharing, messaging, and
                advanced search features.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.borderContainer}>
          <View style={styles.jobDescriptionContainer}>
            <Text style={styles.CompanyTitle}>Professional Experience</Text>
            <Text style={styles.jobTitle}>AAV Innovation Labs</Text>
            <Text style={styles.jobDuration}>October 2022 </Text>

            <View style={styles.textSection}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://play.google.com/store/apps/details?id=com.azzir',
                  )
                }>
                <Text style={styles.boldText}>Azzir App</Text>
              </TouchableOpacity>
              <Text style={styles.normalText}>
                Azzir is a mobile app developed to help users discover artists
                and upcoming events in nearby clubs. It features a user-friendly
                interface, advanced search filters,
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.borderContainer}>
          <View style={styles.jobDescriptionContainer}>
            <Text style={styles.CompanyTitle}>Professional Experience</Text>
            <Text style={styles.jobTitle}>
              Clicknpay digital solutions Private Limited
            </Text>
            <Text style={styles.jobDuration}>October 2022 </Text>

            <View style={styles.textSection}>
              <TouchableOpacity>
                <Text style={styles.boldText}>CNPRealstate App</Text>
              </TouchableOpacity>
              <Text style={styles.normalText}>
                Manage real estate listings with live chat, advanced search, and
                multilingual support,
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  scrollContainer: {
    paddingHorizontal: RfW(20),
    paddingTop: RfH(10),
    paddingBottom: RfH(6),
  },
  homecontainer: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginBottom: RfH(10),
  },
  greeting: {
    fontSize: RfW(28),
    fontWeight: 'bold',
    color: '#1A237E',
  },
  subheading: {
    fontSize: RfW(16),
    color: '#666',
  },
  promoCard: {
    flexDirection: 'row',
    borderRadius: RfW(7),
    padding: RfW(15),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  promoTextContainer: {
    flex: 1,
    justifyContent: 'center',
    marginRight: RfW(10),
  },
  promoTitle: {
    fontSize: RfW(20),
    fontWeight: 'bold',
    marginBottom: RfH(8),
    color: '#fff',
  },
  promoDescription: {
    fontSize: RfW(14),
    color: '#fff',
    marginBottom: RfH(12),
  },
  promoImage: {
    width: RfW(100),
    height: RfW(100),
    borderRadius: RfW(50),
    resizeMode: 'stretch',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: RfH(15),
  },
  iconButton: {
    alignItems: 'center',
    marginVertical: RfH(10),
  },
  iconBackground: {
    width: RfW(60),
    height: RfW(60),
    borderRadius: RfW(30),
    justifyContent: 'center',
    alignItems: 'center',
  },

  borderContainer: {
    marginTop: RfH(10),
    borderRadius: RfW(7),
    borderWidth: 1,
    borderColor: '#6a11cb',
    padding: RfW(10),
  },
  jobDescriptionContainer: {
    borderRadius: RfW(7),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  CompanyTitle: {
    fontSize: RfW(18),
    fontWeight: 'bold',
    color: '#1A237E',
    marginBottom: RfH(4),
  },
  jobTitle: {
    fontSize: RfW(16),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: RfH(4),
  },
  jobDuration: {
    fontSize: RfW(14),
    color: '#666',
    marginBottom: RfH(12),
  },
  textSection: {
    marginBottom: RfH(12),
  },
  boldText: {
    fontSize: RfW(16),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: RfH(4),
  },
  normalText: {
    fontSize: RfW(14),
    color: '#555',
    lineHeight: RfH(20),
  },
});
