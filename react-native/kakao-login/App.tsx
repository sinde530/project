import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  const onLoginPress = async () => {
    const authUrl = 'http://192.168.0.72:3030/login';
    const redirectUrl = 'http://192.168.0.72:3030/oauth/kakao-login';

    try {
      const result = await WebBrowser.openAuthSessionAsync(authUrl, redirectUrl);
      console.log("result: ",result)

      if (result.type === 'success' && result.url.includes(redirectUrl)) {
        const response = await fetch(result.url);
        const data = await response.json();
        setToken(data.access_token);
        setIsLoggedIn(true);
        
        // Redirect to another page after login
        Linking.openURL('http://example.com/another-page');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <>
          <Text>Logged in</Text>
          <Text>Token: {token}</Text>
        </>
      ) : (
        <TouchableOpacity onPress={onLoginPress} style={styles.loginButton}>
          <Text style={styles.buttonText}>Login with Kakao</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});
