import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getUsername } from './data/appData';
const profilePic = require('../images/image.png'); 

const ProfileScreen = () => {
  const username = getUsername();

  return (
    <View style={styles.container}>
      <View style={styles.profileBox}>
        <Image source={profilePic} style={styles.image} />
        <Text style={styles.username}>{username}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    backgroundColor: '#fff',
  },
  profileBox: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 8,
  },
  username: {
    fontSize: 20,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
});

export default ProfileScreen;
