import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function Home({ navigation }) {
  const [profileImage, setProfileImage] = useState(null);

  const handleLogin = () => {
    navigation.navigate('WebView', {
      onMessage: (event) => {
        const data = JSON.parse(event.nativeEvent.data);
        setProfileImage(data.profile);
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the home page!</Text>
      {profileImage ? (
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
      ) : (
        <Button title="Login with Kakao" onPress={handleLogin} />
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
