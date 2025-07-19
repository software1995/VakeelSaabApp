import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  ActivityIndicator,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { fetchLawyers } from '../../api/mockApi';
import LawyerCard from '../../component/LawyerCard';
import { Routes } from '../../Navigation/Routes';
import Header from '../../utils/Header';

const LawyerListingScreen = ({ navigation }) => {
  const [lawyers, setLawyers] = useState([]);
  const [filteredLawyers, setFilteredLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    loadLawyers();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredLawyers(lawyers);
    } else {
      const filtered = lawyers.filter(lawyer => 
        lawyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lawyer.specialization.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredLawyers(filtered);
    }
  }, [searchQuery, lawyers]);

  const loadLawyers = async () => {
    try {
      setLoading(true);
      const data = await fetchLawyers();
      console.log('Lawyers data loaded:', data.length);
      setLawyers(data);
      setFilteredLawyers(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load lawyers. Please try again later.');
      setLoading(false);
      console.error('Error loading lawyers:', err);
    }
  };

  const handleLawyerPress = (lawyer) => {
    console.log('Navigating to profile for lawyer:', lawyer.id);
    navigation.navigate('LawyerProfileScreen', { lawyerId: lawyer.id });
  };

  const renderLawyer = ({ item }) => (
    <LawyerCard 
      lawyer={item} 
      onPress={() => handleLawyerPress(item)} 
    />
  );

  const clearSearch = () => {
    setSearchQuery('');
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#2196F3" />
        <Text style={styles.loadingText}>Loading lawyers...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header 
        HeaderTxt="Find a Lawyer" 
         showBackButton={false} 
        onPress={() => navigation.goBack()} 
      />
      
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          {/* Using proper Vector Icon */}
          <Icon name="search1" size={20} color="#757575" style={styles.searchIcon} />
          
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name or specialization"
            placeholderTextColor="#9E9E9E"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
              <Icon name="close" size={18} color="#9E9E9E" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      
      {filteredLawyers.length === 0 ? (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>No lawyers found matching your search.</Text>
          <TouchableOpacity onPress={clearSearch} style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Reset Search</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filteredLawyers}
          renderItem={renderLawyer}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  searchContainer: {
    padding: 15,
    marginTop: 5,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 15,
    height: 50, // Fixed height for better tap target
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16, // Increased font size
    color: '#242424', // Darker text for better visibility
    fontWeight: '400',
    height: '100%', // Take full height of container
    paddingVertical: 8,
  },
  clearButton: {
    padding: 8,
  },
  listContainer: {
    padding: 15,
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
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noResultsText: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 15,
    textAlign: 'center',
  },
  resetButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  resetButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LawyerListingScreen;