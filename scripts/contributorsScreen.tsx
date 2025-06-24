import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ImageSourcePropType } from 'react-native';

//type for contributor
type Contributor =
{
  name: string;
  image: ImageSourcePropType;
}

//array of contributor objects with data
const contributors : Contributor[] = [
  {
    name: 'Gagandeep Singh',
    image: require('../images/gagan.png'),
  },
    
  {
    name: 'Manjeet Singh',
    image: require('../images/manjeet.png'),
  },
  {
    name: 'Harjot Singh',
    image: require('../images/harjot.png'),
  },
  {
    name: 'Mehak Kakkar',
    image: require('../images/mehak.png'),
  },
];

const ContributorsScreen = () => {
  return (
    <View style={styles.container}>
      {contributors.map((contributor) => (
        <View key={contributor.name} style={styles.contributorCard}>
          <Image source={contributor.image} style={styles.avatar} />
          <Text style={styles.name}>{contributor.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgb(240,244,248)' 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: 'rgb(25,118,210)', 
    marginBottom: 24 
  },
  contributorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 20,
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 4,
    width: 350,
    height: 120,
    padding: 10,
    margin: 10,
    gap : 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 5,
    backgroundColor: 'rgb(227,227,227)',
  },
  name: { 
    fontSize: 20, 
    color: 'rgb(51,51,51)', 
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default ContributorsScreen;