import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { saveTripData } from './data/appData'; 


//react hooks with usestate to manage form state 
const PlanTripScreen = ({ navigation }: any) => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [amount, setAmount] = useState('');
  const [contribution, setContribution] = useState('');
  const [note, setNote] = useState('');
  const [date, setDate] = useState('');
  const [members, setMembers] = useState('');

  const handleSubmit = () => {


    //validation checks , if any field invalid , return alert
    if (!source.trim()) {
      Alert.alert('Error', 'Please enter Source.');
      return;
    }
    if (!destination.trim()) {
      Alert.alert('Error', 'Please enter Destination.');
      return;
    }
    if (!amount.trim() || isNaN(Number(amount)) || Number(amount) <= 0) {
      Alert.alert('Error', 'Please enter a valid number');
      return;
    }
    if (!contribution.trim() || isNaN(Number(contribution)) || Number(contribution) < 0) {
      Alert.alert('Error', 'Please enter a valid number');
      return;
    }
    if (!date.trim()) {
      Alert.alert('Error', 'Please enter a valid date');
      return;
    }

    //save data in data/AppaData.ts file
    saveTripData({
      source,
      destination,
      amount,
      contribution,
      note,
      date,
      members,
    });
    navigation.navigate('Home');
  };


  return (
    //added the scroll view to make the form scrollable becase the data is longer than the screen size
    <ScrollView contentContainerStyle={styles.scrollContainer}>
     
      <View style={styles.container}>
        <Text style={styles.title}>Plan Your Trip</Text>

        <View style={styles.fieldContainer}>
          <Text>Source</Text>
          <TextInput
            style={styles.input}
            value={source}
            onChangeText={setSource}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text>Destination</Text>
          <TextInput
            style={styles.input}
            value={destination}
            onChangeText={setDestination}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text>Total Expected Amount $</Text>
          <TextInput
            style={styles.input}
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text>I can contribute $</Text>
          <TextInput
            style={styles.input}
            value={contribution}
            onChangeText={setContribution}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text>Date (e.g. 2025-06-23)</Text>
          <TextInput
            style={styles.input}
            value={date}
            onChangeText={setDate}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text>Members (comma separated)</Text>
          <TextInput
            style={styles.inputLarge}
            value={members}
            onChangeText={setMembers}
            multiline
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text>Note</Text>
          <TextInput
            style={styles.inputLarge}
            value={note}
            onChangeText={setNote}
            multiline
          />
        </View>

          {/* Submit button to handle form submission */}
        <Button title="Submit" onPress={handleSubmit} />
      
      </View>
    </ScrollView>
  );
};

//stylesheet for the PlanTripScreen component
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  fieldContainer: {
    flexDirection: 'column',
    marginBottom: 8,
    gap: 4,
  },
  input: {
    height: 40,
    borderColor: 'rgb(25,118,210)',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: 'rgb(255,255,255)',
    color: 'rgb(51,51,51)',
  },
  inputLarge: {
    height: 80,
    borderColor: 'rgb(25,118,210)',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 4,
    textAlignVertical: 'top',
    backgroundColor: 'rgb(255,255,255)',
    color: 'rgb(51,51,51)',
  },
});

export default PlanTripScreen;