import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  SafeAreaView
} from 'react-native';
import { fetchLawyerById } from '../../api/mockApi';
import StatusIndicator from '../../component/StatusIndicator';
import Header from '../../utils/Header';

const LawyerProfileScreen = ({ route, navigation }) => {
  const { lawyerId } = route.params;
  const [lawyer, setLawyer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadLawyerDetails();
  }, []);

  const loadLawyerDetails = async () => {
    try {
      setLoading(true);
      const data = await fetchLawyerById(lawyerId);
      if (data) {
        setLawyer(data);
      } else {
        setError('Lawyer not found.');
      }
      setLoading(false);
    } catch (err) {
      setError('Failed to load lawyer details. Please try again later.');
      setLoading(false);
      console.error('Error loading lawyer details:', err);
    }
  };

  const handleStartChat = () => {
    navigation.navigate('ChatScreen', { lawyer });
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#2196F3" />
        <Text style={styles.loadingText}>Loading lawyer profile...</Text>
      </View>
    );
  }

  if (error || !lawyer) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error || 'Lawyer not found'}</Text>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        HeaderTxt="Lawyer Profile" 
         showBackButton={true} 
        onPress={() => navigation.goBack()} 
      />
      <ScrollView showsVerticalScrollIndicator={false}>
       <View style={styles.profileSection}>
          <Image 
            source={{ uri: lawyer.photo }} 
            style={styles.profilePhoto} 
          />
          <Text style={styles.name}>{lawyer.name}</Text>
          <Text style={styles.specialization}>{lawyer.specialization}</Text>
          
          <View style={styles.statusRow}>
            <StatusIndicator status={lawyer.status} />
            <Text style={styles.rate}>{lawyer.hourlyRate}/hr</Text>
          </View>
          
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>★ {lawyer.rating}</Text>
            <Text style={styles.reviews}>({lawyer.reviews} reviews)</Text>
          </View>
        </View>
        
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.bio}>{lawyer.bio}</Text>
          
          <View style={styles.detailRow}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Experience</Text>
              <Text style={styles.detailValue}>{lawyer.experience} years</Text>
            </View>
          </View>
          
          <Text style={styles.sectionTitle}>Languages</Text>
          <View style={styles.languageContainer}>
            {lawyer.languages.map((language, index) => (
              <View key={index} style={styles.languageTag}>
                <Text style={styles.languageText}>{language}</Text>
              </View>
            ))}
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[
              styles.actionButton, 
              { opacity: lawyer.status === 'online' ? 1 : 0.6 }
            ]}
            onPress={handleStartChat}
            disabled={lawyer.status !== 'online'}
          >
            <Text style={styles.actionButtonText}>
              {lawyer.status === 'online' ? 'Start Chat' : 'Lawyer Offline'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
 
  backButtonSmall: {
    padding: 5,
  },
  backButtonTextSmall: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  specialization: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 10,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFC107',
    marginRight: 5,
  },
  reviews: {
    fontSize: 14,
    color: '#9E9E9E',
  },
  rate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  infoSection: {
    padding: 20,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15,
  },
  bio: {
    fontSize: 14,
    color: '#424242',
    lineHeight: 22,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
  },
  detailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  languageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  languageTag: {
    backgroundColor: '#E3F2FD',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  languageText: {
    color: '#1976D2',
    fontSize: 14,
  },
  buttonContainer: {
    padding: 20,
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#757575',
  },
  errorText: {
    fontSize: 16,
    color: '#F44336',
    textAlign: 'center',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LawyerProfileScreen;
