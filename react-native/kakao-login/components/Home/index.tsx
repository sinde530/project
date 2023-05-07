import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function Home({ navigation }) {
  const [profileImage, setProfileImage] = useState(null);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('access_token');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the home page!</Text>
      {profileImage ? (
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
      ) : (
        <Button title="Log Out" onPress={handleLogout} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
