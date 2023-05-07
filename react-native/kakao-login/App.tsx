import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Login from './components/Login';
import { RecoilRoot } from 'recoil';
// import HomeScreen from './screens/HomeScreen';
// import WebViewScreen from './screens/WebViewScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
