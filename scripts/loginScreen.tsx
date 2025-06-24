import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { setUsername } from './data/appData';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [username, setUsernameState] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!username.trim()) {
      Alert.alert('Username required', 'Please enter your username.');
      return;
    }
    setUsername(username);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsernameState}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'rgb(240,244,248)',
  },
  input: {
    height: 40,
    borderColor: 'rgb(197, 197, 197)',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: 'rgb(255,255,255)',
    color: 'rgb(51,51,51)',
  },
});

export default LoginScreen;