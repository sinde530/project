import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { BACKENDURL } from '@env';
import { accessTokenState } from '../../atom/token';
import { useSetRecoilState } from 'recoil';

export default function Login({ navigation }:{ navigation: any }) {
  const [isLoading, setIsLoading] = useState(false);
  const setAccessToken = useSetRecoilState(accessTokenState);


  console.log(BACKENDURL)

  const checkAccessToken = async () => {
    const accessToken = await AsyncStorage.getItem('access_token');
    if (accessToken) {
        navigation.navigate('Home');
    }
  }

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const authUrl = `${BACKENDURL}/login`;
      const response = await fetch(authUrl);
      const data = await response.json();

      if (data.access_token) {
        await AsyncStorage.setItem('access_token', data.access_token);
        setAccessToken(data.access_token)
        navigation.navigate('Home');
      }

    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAccessToken()
  },[])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <TouchableOpacity onPress={handleLogin} style={{ padding: 20, backgroundColor: 'blue' }}>
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
