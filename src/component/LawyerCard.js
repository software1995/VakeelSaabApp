import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import StatusIndicator from './StatusIndicator';

const LawyerCard = ({ lawyer, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image 
        source={{ uri: lawyer.photo }} 
        style={styles.photo} 
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{lawyer.name}</Text>
        <Text style={styles.specialization}>{lawyer.specialization}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>★ {lawyer.rating}</Text>
          <Text style={styles.reviews}>({lawyer.reviews} reviews)</Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <StatusIndicator status={lawyer.status} />
        <Text style={styles.rate}>{lawyer.hourlyRate}/hr</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  specialization: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFC107',
    marginRight: 5,
  },
  reviews: {
    fontSize: 12,
    color: '#9E9E9E',
  },
  statusContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 5,
  },
  rate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2196F3',
    marginTop: 10,
  },
});

export default LawyerCard;
