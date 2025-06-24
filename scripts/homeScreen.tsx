import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PlanTrip')}>
        <Text style={styles.buttonText}>Plan a Trip</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TripDetails')}>
        <Text style={styles.buttonText}>Trip Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contributors')}>
        <Text style={styles.buttonText}>Contributors</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16, backgroundColor: 'rgb(240,244,248)' },
  button: {
    width: 220,
    backgroundColor: 'rgb(221, 165, 92)',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    color: 'rgb(255,255,255)',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeScreen;
