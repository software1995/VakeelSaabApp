// // import React, { useState, useEffect } from 'react';
// // import { 
// //   View, 
// //   Text, 
// //   FlatList, 
// //   StyleSheet, 
// //   ActivityIndicator,
// //   SafeAreaView,
// //   TextInput
// // } from 'react-native';
// // import { fetchLawyers } from '../../api/mockApi';
// // import LawyerCard from '../../component/LawyerCard';
// // const LawyerListingScreen = ({ navigation }) => {
// //   const [lawyers, setLawyers] = useState([]);
// //   const [filteredLawyers, setFilteredLawyers] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     loadLawyers();
// //   }, []);

// //   useEffect(() => {
// //     if (searchQuery.trim() === '') {
// //       setFilteredLawyers(lawyers);
// //     } else {
// //       const filtered = lawyers.filter(lawyer => 
// //         lawyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //         lawyer.specialization.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //       setFilteredLawyers(filtered);
// //     }
// //   }, [searchQuery, lawyers]);

// //   const loadLawyers = async () => {
// //     try {
// //       setLoading(true);
// //       const data = await fetchLawyers();
// //       setLawyers(data);
// //       setFilteredLawyers(data);
// //       setLoading(false);
// //     } catch (err) {
// //       setError('Failed to load lawyers. Please try again later.');
// //       setLoading(false);
// //       console.error('Error loading lawyers:', err);
// //     }
// //   };

// //   const handleLawyerPress = (lawyer) => {
// //     navigation.navigate('LawyerProfileScreen', { lawyerId: lawyer.id });
// //   };

// //   const renderLawyer = ({ item }) => (
// //     <LawyerCard 
// //       lawyer={item} 
// //       onPress={() => handleLawyerPress(item)} 
// //     />
// //   );

// //   if (loading) {
// //     return (
// //       <View style={styles.centerContainer}>
// //         <ActivityIndicator size="large" color="#2196F3" />
// //         <Text style={styles.loadingText}>Loading lawyers...</Text>
// //       </View>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <View style={styles.centerContainer}>
// //         <Text style={styles.errorText}>{error}</Text>
// //       </View>
// //     );
// //   }

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <View style={styles.header}>
// //         <Text style={styles.headerTitle}>Find a Lawyer</Text>
// //       </View>
      
// //       <View style={styles.searchContainer}>
// //         <TextInput
// //           style={styles.searchInput}
// //           placeholder="Search by name or specialization"
// //           value={searchQuery}
// //           onChangeText={setSearchQuery}
// //         />
// //       </View>
      
// //       <FlatList
// //         data={filteredLawyers}
// //         renderItem={renderLawyer}
// //         keyExtractor={item => item.id.toString()}
// //         contentContainerStyle={styles.listContainer}
// //         showsVerticalScrollIndicator={false}
// //       />
// //     </SafeAreaView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#F5F7FA',
// //   },
// //   header: {
// //     padding: 20,
// //     backgroundColor: '#2196F3',
// //   },
// //   headerTitle: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: 'white',
// //   },
// //   searchContainer: {
// //     padding: 15,
// //   },
// //   searchInput: {
// //     backgroundColor: 'white',
// //     borderRadius: 10,
// //     padding: 10,
// //     fontSize: 16,
// //   },
// //   listContainer: {
// //     padding: 15,
// //   },
// //   centerContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     padding: 20,
// //   },
// //   loadingText: {
// //     marginTop: 10,
// //     fontSize: 16,
// //     color: '#757575',
// //   },
// //   errorText: {
// //     fontSize: 16,
// //     color: '#F44336',
// //     textAlign: 'center',
// //   },
// // });

// // export default LawyerListingScreen;



// import React, { useState, useEffect } from 'react'; 
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   ActivityIndicator,
//   SafeAreaView,
//   TextInput 
// } from 'react-native'; 
// import { fetchLawyers } from '../../api/mockApi'; 
// import LawyerCard from '../../component/LawyerCard';
// // Import Routes constant
// import { Routes } from '../../Navigation/Routes';

// const LawyerListingScreen = ({ navigation }) => {
//   const [lawyers, setLawyers] = useState([]);
//   const [filteredLawyers, setFilteredLawyers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     loadLawyers();
//   }, []);

//   useEffect(() => {
//     if (searchQuery.trim() === '') {
//       setFilteredLawyers(lawyers);
//     } else {
//       const filtered = lawyers.filter(lawyer => 
//         lawyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         lawyer.specialization.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredLawyers(filtered);
//     }
//   }, [searchQuery, lawyers]);

//   const loadLawyers = async () => {
//     try {
//       setLoading(true);
//       const data = await fetchLawyers();
//       console.log('Lawyers loaded:', data.length); // Debug log
//       setLawyers(data);
//       setFilteredLawyers(data);
//       setLoading(false);
//     } catch (err) {
//       setError('Failed to load lawyers. Please try again later.');
//       setLoading(false);
//       console.error('Error loading lawyers:', err);
//     }
//   };

//   const handleLawyerPress = (lawyer) => {
//     // Use Routes constant instead of hardcoded string
//     console.log('Navigating to lawyer profile:', lawyer.id); // Debug log
//     console.log('Route name:', Routes.LAWYERPROFILE_SCREEN); // Debug log
    
//     navigation.navigate(Routes.LAWYERPROFILE_SCREEN, { lawyerId: lawyer.id });
//   };

//   const renderLawyer = ({ item }) => (
//     <LawyerCard 
//       lawyer={item}
//       onPress={() => handleLawyerPress(item)}
//     />
//   );

//   if (loading) {
//     return (
//       <View style={styles.centerContainer}>
//         <ActivityIndicator size="large" color="#2196F3" />
//         <Text style={styles.loadingText}>Loading lawyers...</Text>
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.centerContainer}>
//         <Text style={styles.errorText}>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Find a Lawyer</Text>
//       </View>
      
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search by name or specialization"
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//         />
//       </View>
      
//       <FlatList
//         data={filteredLawyers}
//         renderItem={renderLawyer}
//         keyExtractor={item => item.id.toString()}
//         contentContainerStyle={styles.listContainer}
//         showsVerticalScrollIndicator={false}
//         ListEmptyComponent={
//           <Text style={styles.noResultsText}>No lawyers found</Text>
//         }
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F7FA',
//   },
//   header: {
//     padding: 20,
//     backgroundColor: '#2196F3',
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   searchContainer: {
//     padding: 15,
//   },
//   searchInput: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 10,
//     fontSize: 16,
//   },
//   listContainer: {
//     padding: 15,
//   },
//   centerContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 16,
//     color: '#757575',
//   },
//   errorText: {
//     fontSize: 16,
//     color: '#F44336',
//     textAlign: 'center',
//   },
//   noResultsText: {
//     fontSize: 16,
//     color: '#757575',
//     textAlign: 'center',
//     marginTop: 30,
//   },
// });

// export default LawyerListingScreen;


import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  ActivityIndicator,
  SafeAreaView,
  TextInput
} from 'react-native';
import { fetchLawyers } from '../../api/mockApi';
import LawyerCard from '../../component/LawyerCard';
import { Routes } from '../../Navigation/Routes';

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
    // Use the correct route name from Routes constant
navigation.navigate('LawyerProfileScreen', { lawyerId: lawyer.id });
  };

  const renderLawyer = ({ item }) => (
    <LawyerCard 
      lawyer={item} 
      onPress={() => handleLawyerPress(item)} 
    />
  );

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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find a Lawyer</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name or specialization"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      
      <FlatList
        data={filteredLawyers}
        renderItem={renderLawyer}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    padding: 20,
    backgroundColor: '#2196F3',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  searchContainer: {
    padding: 15,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
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
});

export default LawyerListingScreen;