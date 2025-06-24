import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Importing the function to get trip data from appData.ts file
import { getTripData } from './data/appData';

const TripDetailsScreen = () => {

  //get last saved trip data from appData.ts file
  const trip = getTripData();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Trip Details</Text>
      {/* if trip data null, just say no trip planned, other wise show data  */}
      {trip ? (
        <View style={styles.detailsBox}>
          <Text style={styles.detail}><Text style={styles.field}>Source</Text> {trip.source}</Text>
          <Text style={styles.detail}><Text style={styles.field}>Destination</Text> {trip.destination}</Text>
          <Text style={styles.detail}><Text style={styles.field}>Total Expected Amount</Text> <Text style={styles.amount}>${trip.amount}</Text></Text>
          <Text style={styles.detail}><Text style={styles.field}>I can contribute</Text> <Text style={styles.contribution}>${trip.contribution}</Text></Text>
          <Text style={styles.detail}><Text style={styles.field}>Date</Text> {trip.date}</Text>
          <Text style={styles.detail}><Text style={styles.field}>Members</Text> {trip.members}</Text>
          <Text style={styles.detail}><Text style={styles.field}>Note</Text> {trip.note}</Text>
        </View>
      ) : (
        <Text style={styles.noTrip}>No trip planned yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f0f4f8', 
    padding: 24, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  label: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#1976d2', 
    marginBottom: 24, 
    letterSpacing: 1 
  },
  detailsBox: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    gap: 10,
  },
  detail: { 
    fontSize: 18, 
    marginBottom: 8, 
    color: '#333', 
    flexDirection: 'row', 
    flexWrap: 'wrap',
  },
  field: {
    fontWeight: 'bold',
    color: '#1976d2',
  },
  amount: {
    color: '#388e3c',
    fontWeight: 'bold',
  },
  contribution: {
    color: '#fbc02d',
    fontWeight: 'bold',
  },
  noTrip: {
    fontSize: 18,
    color: '#888',
    marginTop: 24,
  },
});

export default TripDetailsScreen;
