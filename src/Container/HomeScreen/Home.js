import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Header from '../../utils/Header';
import Post from './Post';
import styles from './style';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header HeaderTxt={'Sanjay Kumar'} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        bounces={false}
        overScrollMode="never"
        contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.homecontainer}>
          <Post
            ProfileImage={require('../../assets/images/Vector.png')}
            name={'Sanjay Kumar'}
            Day={'2 Years'}
            Massage={
              'Passionate React Native and React JS Developer with 2 years of experience in creating dynamic web and mobile applications. Expertise in JavaScript and related frameworks, with a strong focus on delivering seamless user experiences and robust functionality. Proven success in developing high-quality code for social media apps and e-commerce websites, integrating APIs, and optimizing performance. Skilled in using modern development tools and best practices to drive innovation and project success.'
            }
          />
        </View>

        <View style={styles.jobDescriptionContainer}>
          <Text style={styles.CompanyTitle}>Professional Experience</Text>
          <Text style={styles.jobTitle}>
            Clicknpay Digital Solutions Private Limited
          </Text>
          <Text style={styles.jobDuration}>October 2023 - Present</Text>

          <View style={styles.textSection}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://play.google.com/store/search?q=ClickNTokk&c=apps',
                )
              }>
              <Text style={styles.boldText}>
                ClickNTokk App (Social media App)
              </Text>
            </TouchableOpacity>
            <Text style={styles.normalText}>
              Led Frontend Development and Feature Implementation: Spearheaded
              the creation of ClickNTokk using React Native, integrating a wide
              range of features such as video/photo sharing, messaging, voice
              communication, tagging, referrals, KYC, reels, comments,
              likes/dislikes, notifications, activity tracking, status updates,
              follow/unfollow, and advanced search functionalities.
            </Text>
          </View>

          <View style={styles.textSection}>
            <Text style={styles.boldText}>
              User Experience and Interface Design:-
            </Text>
            <Text style={styles.normalText}>
              Designed a sleek, user-friendly interface with intuitive
              navigation, ensuring optimal performance across various devices
              for a consistent and engaging user experience.
            </Text>
          </View>

          <View style={styles.textSection}>
            <Text style={styles.boldText}>Technology and Innovation:-</Text>
            <Text style={styles.normalText}>
              Utilized React Native for the frontend and Django with MongoDB for
              the backend to build robust systems supporting real-time
              interactions and secure data management. Enhanced user engagement
              with innovative elements like reels and advanced search
              capabilities.
            </Text>
          </View>
        </View>

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
              Azzir is a mobile app developed to help users discover artists and
              upcoming events in nearby clubs. It features a user-friendly
              interface, advanced search filters, and supports various music
              genres like rock, hip-hop, and electronic. The app offers a
              curated list of events and allows users to view detailed artist
              lineups directly. Built using React Native for the frontend, the
              app's development focused on creating an intuitive user interface,
              implementing advanced search capabilities, integrating real-time
              updates, and optimizing backend performance to ensure a seamless
              and engaging user experience.
            </Text>
          </View>
        </View>

        <View style={styles.jobDescriptionContainer}>
          <Text style={styles.CompanyTitle}>Professional Experience</Text>
          <Text style={styles.jobTitle}>
            Clicknpay Digital Solutions Private Limited
          </Text>
          <Text style={styles.jobDuration}>October 2023 - Present</Text>

          <View style={styles.textSection}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://play.google.com/store/search?q=ClickNTokk&c=apps',
                )
              }>
              <Text style={styles.boldText}>CNPRealstate App</Text>
            </TouchableOpacity>
            <Text style={styles.normalText}>
              Developed a comprehensive platform for creating and managing real
              estate property listings. Integrated advanced search features,
              live chat functionality, and customer query handling to enhance
              user interaction and satisfaction.
            </Text>
          </View>

          <View style={styles.textSection}>
            <Text style={styles.boldText}>
              User Experience and Profile Management:-
            </Text>
            <Text style={styles.normalText}>
              Implemented critical modules including About, Settings, Privacy
              Policy, and Support to ensure a seamless user experience. Designed
              a user profile management system with features like location
              sharing, notifications, and an activity log for tracking user
              actions.
            </Text>
          </View>

          <View style={styles.textSection}>
            <Text style={styles.boldText}>
              Multilingual Support and Technical Implementation:-
            </Text>
            <Text style={styles.normalText}>
              Enabled multilingual support, allowing users to switch between
              Hindi and English for broader accessibility. Utilized React
              Native, Redux, REST APIs, Firebase, and Google Maps API to deliver
              a high-performance, responsive mobile application.
            </Text>
          </View>
        </View>

        {/* Skills Section */}
        <View style={styles.skillsContainer}>
          <Text style={styles.sectionTitle}>Skills</Text>

          <View style={styles.skillCategory}>
            <Text style={styles.boldText2}>Languages & Technologies:</Text>
            <Text style={styles.normalText2}>
              Front-End: React Native, React JS, JavaScript (ES6), HTML5, CSS3,
              Bootstrap
            </Text>
            <Text style={styles.normalText2}>
              Back-End: Node.js, JSON Server, CRUD Operations
            </Text>
            <Text style={styles.normalText2}>
              Databases: SQL (Oracle 10g), Firebase
            </Text>
            <Text style={styles.normalText2}>
              Frameworks & Libraries: Redux Tool Kit, Context API, React Router
              DOM
            </Text>
            <Text style={styles.normalText2}>
              Tools & Platforms: NPM/YARN, Virtual DOM, Hooks, Form Validation,
              Event Handling, REST APIs Integration, Postman, Git, Android
              Studio
            </Text>
            <Text style={styles.normalText2}>
              Programming Languages: Core Java (OOP Concepts, Exception
              Handling, Strings, Arrays, Collections)
            </Text>
            <Text style={styles.normalText2}>Other: XML, JSON</Text>
          </View>
        </View>

        {/* eduction */}
        <View style={styles.educationContainer}>
          <Text style={styles.sectionTitle}>Educational Qualification</Text>

          <View style={styles.educationItem}>
            <Text style={styles.degreeText}>Bachelor of Engineering</Text>
            <Text style={styles.institutionText}>
              Dr. A.P.J. Abdul Kalam Technical University
            </Text>
            <Text style={styles.durationText}>2017 - 2021</Text>
            <Text style={styles.detailsText}>CGPA: 7.53 (HONS)</Text>
          </View>

          <View style={styles.educationItem}>
            <Text style={styles.degreeText}>Senior Secondary</Text>
            <Text style={styles.institutionText}>
              SJ P Sharma Inter College, UP (Board)
            </Text>
            <Text style={styles.durationText}>2013 - 2015</Text>
            <Text style={styles.detailsText}>Percentage: 76.8%</Text>
          </View>

          <View style={styles.educationItem}>
            <Text style={styles.degreeText}>Secondary</Text>
            <Text style={styles.institutionText}>
              Lat Hari Prasad Singraur R.S. High School, UP (Board)
            </Text>
            <Text style={styles.durationText}>2012 - 2013</Text>
            <Text style={styles.detailsText}>Percentage: 74.5%</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
