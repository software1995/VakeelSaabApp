import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../utils';
import Header from '../../utils/Header';
import {RfH, RfW} from '../../utils/helper';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const categories = [
  {
    title: 'ClickNTokk App',
    description:
      'A social media app with video/photo sharing, messaging, and advanced search features.',
    icon: 'brush',
    colors: ['#6a11cb', '#2575fc'],
    details:
      'This app integrates a wide range of social media features, including KYC, reels, comments, likes/dislikes, notifications, and more to ensure user engagement.',
    type: 'app',
  },
  {
    title: 'Azzir App',
    description:
      'Discover artists and events in nearby clubs with real-time updates and curated lists.',
    icon: 'megaphone',
    colors: ['#6a11cb', '#2575fc'],
    details:
      'Azzir provides a platform to explore live music events, with advanced search filters and real-time updates.',
    type: 'app',
  },
  {
    title: 'CNPRealstate App',
    description:
      'Manage real estate listings with live chat, advanced search, and multilingual support.',
    icon: 'pencil',
    colors: ['#6a11cb', '#2575fc'],
    details:
      'The app includes features for creating and managing property listings, handling customer queries, and supporting multiple languages.',
    type: 'app',
  },
  {
    title: 'ClickNTokk Admin Panel',
    description:
      'Admin panel with dashboard, user management, KYC monitoring, and secure login.',
    icon: 'videocam',
    colors: ['#6a11cb', '#2575fc'],
    details:
      'The admin panel allows efficient management of users and content, with role-based access controls and real-time notifications.',
    type: 'website',
  },
  {
    title: 'calendly.com',
    description:
      'A scheduling platform for meetings with calendar integration and automated reminders.',
    icon: 'musical-notes',
    colors: ['#6a11cb', '#2575fc'],
    details:
      'Calendly simplifies scheduling with features like team scheduling, buffer times, and automated notifications.',
    type: 'website',
  },
];

const PostScreen = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = index => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <Header HeaderTxt={'Project'} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        bounces={false}
        overScrollMode="never"
        contentContainerStyle={styles.scrollContainer}>
        <View style={styles.homecontainer}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => toggleAccordion(index)}
              activeOpacity={0.8}>
              <LinearGradient
                colors={category.colors}
                style={[
                  styles.card,
                  expanded === index && styles.expandedCard,
                ]}>
                <View style={styles.cardHeader}>
                  <Icon
                    name={category.type === 'app' ? 'apps' : 'globe'}
                    size={RfW(20)}
                    color="#fff"
                    style={styles.icon}
                  />
                  <Text style={styles.cardTitle}>{category.title}</Text>
                  <Icon
                    name={expanded === index ? 'chevron-up' : 'chevron-down'}
                    size={RfW(24)}
                    color="#fff"
                    style={styles.chevronIcon}
                  />
                </View>
                <Text style={styles.cardDescription}>
                  {category.description}
                </Text>
                {expanded === index && (
                  <View style={styles.detailsContainer}>
                    <Text style={styles.detailsText}>{category.details}</Text>
                  </View>
                )}
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default PostScreen;

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
    flex: 1,
  },
  card: {
    marginBottom: RfH(15),
    borderRadius: RfW(10),
    padding: RfW(15),
    backgroundColor: colors.WHITE,
  },
  expandedCard: {
    paddingBottom: RfH(20),
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: RfW(10),
  },
  cardTitle: {
    fontSize: RfW(18),
    fontWeight: 'bold',
    color: '#fff',
    flex: 1, // Take up remaining space
  },
  chevronIcon: {
    marginLeft: RfW(10),
  },
  cardDescription: {
    marginTop: RfH(5),
    fontSize: RfW(14),
    color: '#fff',
  },
  detailsContainer: {
    marginTop: RfH(10),
  },
  detailsText: {
    fontSize: RfW(14),
    color: '#fff',
  },
});
