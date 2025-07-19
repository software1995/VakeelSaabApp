import React, {useState} from 'react';
import {colors} from '../../utils';
import Header from '../../utils/Header';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons from react-native-vector-icons
import LinearGradient from 'react-native-linear-gradient';
import {RfH, RfW} from '../../utils/helper';
import ImageAssets from '../../Asset/ImageAssets';

const SearchScreen = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <Header HeaderTxt={'Skills'} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        bounces={false}
        overScrollMode="never"
        contentContainerStyle={styles.scrollContainer}>
        {/* Profile Card with LinearGradient */}
        <LinearGradient
          colors={['#6a11cb', '#2575fc']}
          style={styles.profileCard}>
          <Image source={ImageAssets.sanjay} style={styles.profileImage} />
          <Text style={styles.profileName}>Sanjay Kumar</Text>
          <View style={styles.reviewContainer}>
            {/* <Icon name="star" size={RfW(16)} color="#fff" /> */}
            {/* <Text style={styles.reviewText}>5.0 </Text> */}
            <TouchableOpacity>
              {/* <Text style={styles.reviewLink}>(150 Review)</Text> */}
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Seller Details with Gradient */}
        <LinearGradient
          colors={['#6a11cb', '#2575fc']}
          style={styles.sellerDetails}>
          <Text style={styles.sellerTitle}>Profile Summary</Text>
          <Text style={styles.sellerDescription}>
            Passionate React Native and React JS Developer with 2 years of
            experience in creating dynamic web and mobile applications.
            Expertise in JavaScript and related frameworks, with a strong focus
            on delivering seamless user experiences and robust functionality.{' '}
            {!isExpanded && (
              <Text style={styles.moreLink} onPress={toggleReadMore}>
                More
              </Text>
            )}
            {isExpanded && (
              <>
                Proven success in developing high-quality code for social media
                apps and e-commerce websites, integrating APIs, and optimizing
                performance. Skilled in using modern development tools and best
                practices to drive innovation and project success.
                <Text style={styles.moreLink} onPress={toggleReadMore}>
                  Show Less
                </Text>
              </>
            )}
          </Text>
        </LinearGradient>

        <View style={styles.skillsContainer}>
          <Text style={styles.skillTitle}>Skill and Technologies</Text>
          <View style={styles.skillTagsContainer}>
            {[
              'App developer',
              'Web developer',
              'React Native',
              'React Js',
              'Vue Js',
              'Javascript',
              'ios developer',
              'Android developer',
              'SQL',
              'Java',
              'Android studio',
              'REST APIs',
              'Postman',
              'Git',
              'NPM/YARN',
              'Virtual DOM',
              'Hook',
              'RTK Query',
            ].map(skill => (
              <LinearGradient
                key={skill}
                colors={['#6a11cb', '#2575fc']}
                style={styles.skillTag}>
                <Text style={styles.skillText}>{skill}</Text>
              </LinearGradient>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

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
  profileCard: {
    alignItems: 'center',
    paddingVertical: RfH(10),
    borderRadius: RfH(7),
    marginBottom: RfH(20),
  },
  profileImage: {
    width: RfW(80),
    height: RfW(80),
    borderRadius: RfW(40),
    borderWidth: RfW(2),
    borderColor: '#fff',
    resizeMode: 'stretch',
  },
  profileName: {
    marginTop: RfH(16),
    fontSize: RfW(20),
    fontWeight: 'bold',
    color: '#fff',
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: RfH(8),
  },
  reviewText: {
    fontSize: RfW(16),
    color: '#fff',
  },
  reviewLink: {
    fontSize: RfW(16),
    color: '#00BFFF',
    marginLeft: RfW(4),
  },
  sellerDetails: {
    marginTop: RfH(10),
    padding: RfW(16),
    borderRadius: RfW(7),
  },
  sellerTitle: {
    fontSize: RfW(16),
    color: '#fff',
    marginBottom: RfH(8),
    fontWeight: 'bold',
  },
  sellerDescription: {
    fontSize: RfW(14),
    color: '#fff',
  },
  moreLink: {
    color: '#00BFFF',
    fontWeight: 'bold',
  },
  skillsContainer: {
    marginTop: RfH(24),
  },
  skillTitle: {
    fontSize: RfW(16),
    color: '#1A237E',
    fontWeight: 'bold',
  },
  skillTagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: RfH(10),
  },
  skillTag: {
    borderRadius: RfW(20),
    paddingVertical: RfH(6),
    paddingHorizontal: RfW(12),
    marginRight: RfW(8),
    marginBottom: RfH(8),
  },
  skillText: {
    fontSize: RfW(14),
    color: '#fff',
  },
});
