import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatusIndicator = ({ status }) => {
  const isOnline = status.toLowerCase() === 'online';
  
  return (
    <View style={styles.container}>
      <View style={[
        styles.indicator, 
        { backgroundColor: isOnline ? '#4CAF50' : '#9E9E9E' }
      ]} />
      <Text style={styles.statusText}>
        {isOnline ? 'Online' : 'Offline'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 5,
  },
  statusText: {
    fontSize: 12,
    color: '#757575',
  },
});

export default StatusIndicator;
